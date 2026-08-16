import React from "react";

/**
 * Eyebrow pill above the hero title.
 *
 * CSS entrance rather than motion: this sits immediately above every page's
 * <h1>, and a motion `initial` would put `style="opacity:0"` on it in the
 * server-rendered HTML. See `.reveal-up` in `app/globals.css`.
 */
export default function Badge({
	                              children,
	                              delay = 0.2,
	                              className = "",
	                              icon: Icon,
                              }: any) {
	return (
		<div
			className={`reveal-up inline-flex items-center px-4 py-2 border border-primary/80 text-primary/80 text-sm font-medium rounded-full mb-6 ${className}`}
			style={{ "--reveal-delay": `${delay}s` } as React.CSSProperties}
		>
			{Icon && <Icon size={16} className="mr-2" />}
			{children}
		</div>
	);
}
