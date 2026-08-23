import React from "react";

interface BadgeProps {
	children: React.ReactNode;
	delay?: number;
	className?: string;
}

/**
 * Eyebrow above the hero title.
 *
 * A chamfered plate rather than a rounded pill, and mono rather than a bold
 * sans — this is a nameplate, not a marketing sticker. It carries no icon: the
 * sparkle every page used to open with says nothing about the studio, and the
 * tick is the same 45-degree cut the plate itself is made from.
 *
 * The fill is what draws the cut corner. A CSS border would be sheared away by
 * `clip-path` along the diagonal; a filled surface takes the shape cleanly,
 * which is why the chamfer is reserved for filled and pressable things.
 *
 * CSS entrance rather than motion: this sits immediately above every page's
 * <h1>, and a motion `initial` would put `style="opacity:0"` on it in the
 * server-rendered HTML. See `.reveal-up` in `app/globals.css`.
 */
export default function Badge({children, delay = 0.2, className = ""}: BadgeProps) {
	return (
		<div
			className={`reveal-up chamfer-sm inline-flex items-center gap-2.5 mb-8
				bg-foreground/[0.055] px-3.5 py-2.5 ${className}`}
			style={{"--reveal-delay": `${delay}s`} as React.CSSProperties}
		>
			<span aria-hidden="true" className="size-1.5 rotate-45 bg-primary"/>
			<span className="eyebrow">{children}</span>
		</div>
	);
}
