"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import Magnet from "@/components/Magnet";

export default function ThemeToggle() {
    const { resolvedTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setMounted(true);
        setTimeout(() => setIsLoaded(true), 50);
    }, []);

    if (!mounted) return null;

    // Theme styling
    const themeStyles = {
        bg: resolvedTheme === "dark" ? "bg-foreground/5" : "bg-black/5",
        hoverBg: resolvedTheme === "dark" ? "hover:bg-foreground/10" : "hover:bg-black/10",
        border: resolvedTheme === "dark" ? "border-foreground/20" : "border-black/20",
        labelBg: resolvedTheme === "dark" ? "bg-foreground/5" : "bg-black/5",
    };

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <>
            {/* Desktop Button — Right Side */}
            <button
                onClick={toggleTheme}
                className={`
                    hidden lg:flex
                    fixed top-4 md:top-6 right-4 md:right-6
                    z-50 w-12 h-12 rounded-full
                    items-center justify-center
                    backdrop-blur-sm border
                    transition-all duration-700
                    ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}
                    ${themeStyles.bg} ${themeStyles.border} ${themeStyles.hoverBg}
                `}
            >
                <Magnet padding={25} magnetStrength={6}>
                    {resolvedTheme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
                </Magnet>
            </button>

            {/* Mobile Button — LEFT SIDE (your exact styling) */}
            <button
                onClick={toggleTheme}
                className={`
                    fixed top-4 md:top-6 left-4 md:left-6
                    z-50 w-12 h-12 rounded-full
                    flex items-center justify-center
                    backdrop-blur-sm border
                    transition-all duration-700
                    ${isLoaded ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-full"}
                    ${themeStyles.bg} ${themeStyles.border}
                    lg:hidden
                `}
            >
                {resolvedTheme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
        </>
    );
}
