import React, { useRef, useState } from 'react';

interface Position {
    x: number;
    y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
    className?: string;
    spotlightColor?: string; // allow override
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
                                                         children,
                                                         className = '',
                                                         spotlightColor
                                                     }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    // ✅ Light & dark default colors
    const defaultColor = spotlightColor
        ? spotlightColor
        : typeof window !== "undefined" &&
        document.documentElement.classList.contains("dark")
            ? "rgba(255, 255, 255, 0.15)" // dark mode glow
            : "rgba(0, 0, 0, 0.15)";      // light mode glow

    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
        if (!divRef.current || isFocused) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(0.5);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={() => setOpacity(0.5)}
            onMouseLeave={() => setOpacity(0)}
            className={`relative border border-border overflow-hidden ${className}`}
        >
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{
                    opacity,
                    background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${defaultColor}, transparent 80%)`
                }}
            />
            {children}
        </div>
    );
};

export default SpotlightCard;
