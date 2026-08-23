'use client';

import React from "react";
import {motion} from "motion/react";
import {ArrowRight} from "lucide-react";
import Magnet from "@/components/Magnet";
import {cn} from "@/lib/utils";

interface MagnetButtonProps {
  label: string;
  /** Receives the event so an `href` variant can `preventDefault()` and handle
   *  the navigation itself while still shipping a real, crawlable link. */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * Navigate to this URL. Anything that changes the page must use `href`
   * rather than an `onClick` handler: a crawler cannot execute a click, so a
   * `router.push` button is invisible to it and the destination page ends up
   * with no internal links pointing at it.
   */
  href?: string;
  /** Open `href` in a new tab. Adds the matching `rel` for `target="_blank"`. */
  external?: boolean;
  icon?: React.ReactNode;
  className?: string
  wrapperClassName?: string;
  magnetStrength?: number;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

/**
 * Two slabs with a 45-degree cut off the top-left corner, echoing the bevels
 * in the dragon mark.
 *
 * The primary is a piece of metal: `.forge-fill` paints an oversized copper
 * luminance ramp and slides the window on it upward on hover, so the light
 * rakes across the face rather than the whole surface simply brightening. It
 * replaces a `from-blue-600 to-purple-600` pill with a 40px blue drop shadow.
 *
 * Neither variant carries a border. `clip-path` shears a CSS border away along
 * the diagonal, so the cut corner has to be drawn by the fill itself — which
 * is also why the chamfer marks pressable surfaces and never content plates.
 * For the same reason the focus ring is inset: an `outline` sits outside the
 * border box and would be clipped off entirely.
 */
const MagnetButton: React.FC<MagnetButtonProps> = ({
                                                     label,
                                                     onClick,
                                                     href,
                                                     external = false,
                                                     icon,
                                                     className,
                                                     wrapperClassName,
                                                     magnetStrength = 10,
                                                     disabled = false,
                                                     variant = "primary",
                                                     size = "md",
                                                   }) => {
  // Size variants. Mono at the small end, where the label is metadata; the
  // body face once it is a real call to action.
  const sizes = {
    sm: "px-4 py-2.5 text-[0.8125rem]",
    md: "px-6 py-3.5 text-[0.9375rem]",
    lg: "px-8 py-4 text-base",
  };

  // A disabled control is not navigable, so it stays a <button> even with an href.
  const asLink = Boolean(href) && !disabled;
  const Component = asLink ? motion.a : motion.button;
  const navProps = asLink
    ? { href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
    : { type: "button" as const, disabled };

  return (
    <Magnet padding={25} disabled={disabled} wrapperClassName={wrapperClassName} magnetStrength={magnetStrength}>
      <Component
        whileTap={{ scale: 0.985 }}
        onClick={onClick}
        {...navProps}
        className={cn(
          // <a> is inline by default; centre its contents like the button.
          "chamfer w-full flex items-center justify-center font-medium tracking-tight",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary",
          sizes[size],
          variant === "primary" &&
          "forge-fill text-primary-foreground",
          variant === "secondary" &&
          "bg-foreground/[0.055] text-foreground hover:bg-foreground/[0.1] transition-colors duration-300",
          className
        )}
      >
        <Magnet padding={25} disabled={disabled} wrapperClassName={wrapperClassName} magnetStrength={8}>
          { icon || variant === "primary" ?  (
            <div className="flex justify-center items-center gap-2.5 w-full">
              <p>{label}</p>
              {/* CSS keyframes, not a motion `repeat: Infinity` tween. The
                  motion version ticked on the main thread for the life of the
                  page, once per button — and there are several per screen. */}
              <div className={icon ? undefined : "nudge-x"}>
                {icon || <ArrowRight size={size === "sm" ? 14 : 17} strokeWidth={2.25} />}
              </div>
            </div>
          ) : (
            <span>{label}</span>
          )}
        </Magnet>
      </Component>
    </Magnet>
  );
};

export default MagnetButton;
