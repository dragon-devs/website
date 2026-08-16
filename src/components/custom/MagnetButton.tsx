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
  // Size variants
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
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
        whileHover={{
          scale: 1.02,
          ...(variant === "primary" && {
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
          }),
        }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        {...navProps}
        className={cn(
          // <a> is inline by default; centre its contents like the button.
          "w-full rounded-full font-semibold flex items-center justify-center",
          sizes[size],
          variant === "primary" &&
          "bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white/80 dark:text-white shadow-xl flex items-center gap-3",
          variant === "secondary" &&
          "border border-border text-foreground backdrop-blur-sm hover:bg-muted transition-all duration-300",
          className
        )}
      >
        <Magnet padding={25} disabled={disabled} wrapperClassName={wrapperClassName} magnetStrength={8}>
          { icon || variant === "primary" ?  (
            <div className="flex justify-center items-center gap-2 w-full">
              <p>{label}</p>
              {/* CSS keyframes, not a motion `repeat: Infinity` tween. The
                  motion version ticked on the main thread for the life of the
                  page, once per button — and there are several per screen. */}
              <div className={icon ? undefined : "nudge-x"}>
                {icon || <ArrowRight size={size === "sm" ? 16 : size === "md" ? 20 : 24} />}
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
