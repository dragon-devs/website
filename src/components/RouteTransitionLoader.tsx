"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatedLogoLoader } from "@/components/hero/AnimatedLogoLoader";

/**
 * Route-transition overlay. This replaces `app/loading.tsx`.
 *
 * A `loading.tsx` file wraps the page segment in a Suspense boundary, which
 * lets React flush the shell before the page has rendered. That meant the
 * *initial* HTML carried this spinner where `<main>` belongs, the footer and
 * navbar rendered above it, and every heading and paragraph was appended at
 * the very end of the document inside a `<div hidden>` that only JavaScript
 * un-hides. Crawlers that don't run JS saw no H1, no headings, and 55 words.
 *
 * Driving the overlay from the client keeps the animation on navigation while
 * leaving the server-rendered document complete: this renders nothing until a
 * navigation is actually pending.
 */

// Static pages navigate in well under this on a warm connection; waiting
// avoids a spinner that flashes for one frame and reads as a glitch.
const SHOW_AFTER_MS = 150;

export default function RouteTransitionLoader() {
  const pathname = usePathname();
  const [pending, setPending] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clear = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  // Arrival at the new route ends the transition. `pathname` is the trigger
  // rather than a value read in the body, which is why it looks redundant here.
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the signal
  useEffect(() => {
    clear();
    setPending(false);
  }, [pathname, clear]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Modified clicks open a new tab; the current document never changes.
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      const href = anchor?.getAttribute("href");
      if (!anchor || !href) return;
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      // Cross-origin leaves the app; same-pathname links (hash jumps and the
      // category filters) re-render in place without suspending.
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;

      clear();
      timer.current = setTimeout(() => setPending(true), SHOW_AFTER_MS);
    };

    // Capture phase: still runs if a handler calls stopPropagation.
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      clear();
    };
  }, [clear]);

  if (!pending) return null;

  return (
    <div className="fixed inset-0 z-[51] flex items-center justify-center bg-background/10 backdrop-blur-sm">
      <AnimatedLogoLoader
        scale={"scale-60"}
        loop={true}
        duration={1000}
        pathDelay={100}
        showFilled={true}
      />
    </div>
  );
}
