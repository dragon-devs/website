"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import Magnet from "@/components/Magnet";
import { useFinePointer } from "@/lib/use-fine-pointer";
import { cn } from "@/lib/utils";

/**
 * Which icon is showing is decided by CSS, not by `resolvedTheme`. The old
 * version returned `null` until it had mounted and the theme had resolved, so
 * the button popped into an already-painted page on every single load.
 */
const ThemeIcon = () => (
    <>
        <Sun size={18} className="dark:hidden" />
        <Moon size={18} className="hidden dark:block" />
    </>
);

const CIRCLE =
    "fixed top-4 md:top-6 z-50 w-12 h-12 rounded-full items-center justify-center " +
    "backdrop-blur-sm border bg-black/5 dark:bg-white/5 border-black/20 dark:border-white/20";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const finePointer = useFinePointer();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <>
            {/* Desktop Button — Right Side */}
            <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle colour theme"
                className={cn(
                    "hidden lg:flex right-4 md:right-6",
                    CIRCLE,
                    "transition-opacity duration-700 hover:bg-black/10 dark:hover:bg-white/10",
                    isLoaded ? "opacity-100" : "opacity-0"
                )}
            >
                {finePointer ? (
                    <Magnet padding={25} magnetStrength={6}>
                        <ThemeIcon />
                    </Magnet>
                ) : (
                    <ThemeIcon />
                )}
            </button>

            {/* Mobile Button — LEFT SIDE */}
            <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle colour theme"
                className={cn(
                    "flex lg:hidden left-4 md:left-6",
                    CIRCLE,
                    "transition-opacity duration-300",
                    isLoaded ? "opacity-100" : "opacity-0"
                )}
            >
                <ThemeIcon />
            </button>
        </>
    );
}
