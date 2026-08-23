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

    // Light & dark default colours, resolved by CSS rather than by reading the
    // `dark` class during render. The `typeof window` branch this replaces made
    // the server emit the light glow and the client the dark one, so every page
    // with a card on it hydrated with a mismatch and React threw the tree away
    // and re-rendered it.
    //
    // The glow is ember-tinted (see --spotlight-glow), so the cursor reads as a
    // heat source moving across the plate. It is also why the static blurred
    // corner blooms these cards used to carry are gone: two answers to "light
    // up on hover", one of which cost a full blur layer per card.
    const defaultColor = spotlightColor ?? "var(--spotlight-glow)";

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
            className={`relative border border-border overflow-hidden
                transition-colors duration-500 hover:border-foreground/20 ${className}`}
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
