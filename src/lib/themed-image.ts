"use client";

import {useTheme} from "next-themes";
import {useSyncExternalStore} from "react";

import themedImages from "@/data/themed-images.generated.json";

/**
 * Screenshots that exist in both themes, so a light-mode reader is never shown
 * a dark screenshot of the product.
 *
 * The pairs are discovered at build time by scripts/sync-themed-images.mjs —
 * anything not in that manifest is left exactly as it was given, which is what
 * makes this safe to apply to every image on the site rather than only the
 * ones we remembered to mark up.
 */

const THEMED = new Set<string>(themedImages.dark);

const DARK_SUFFIX = /-dark(\.[a-z0-9]+)$/i;

/**
 * The light counterpart of a dark asset, or the original when there isn't one.
 * Pure, so it can be called inside a `.map()` where a hook could not.
 */
export function themedSrc(src: string, isLight: boolean): string {
    if (!isLight || !THEMED.has(src)) return src;
    return src.replace(DARK_SUFFIX, "-light$1");
}

/** Server render always resolves to dark; the client corrects after hydration. */
const subscribeNever = () => () => {};

export function useIsLightTheme(): boolean {
    const {resolvedTheme} = useTheme();
    const mounted = useSyncExternalStore(
        subscribeNever,
        () => true,
        () => false,
    );
    return mounted && resolvedTheme === "light";
}
