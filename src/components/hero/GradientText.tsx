import React from 'react';

interface GradientTextProps {
	/** The text content */
	children: React.ReactNode;
	/** Which of the three type finishes to use */
	variant?: 'primary' | 'accent' | 'subtle';
	/** Optional: escape hatch for a one-off finish, as Tailwind classes */
	className?: string;
	/** Optional: Animation props */
	animate?: boolean;
	animationDelay?: number;
	tag?: string;
	/** Optional: Text size */
	size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4-5';
}

/**
 * Three type finishes, all struck from the same material.
 *
 * The three-stop hue-travelling gradients this replaces — blue via purple to
 * emerald, grey via blue to purple — are the reason the headings read as
 * decoration rather than as type. A gradient earns its place on a letterform
 * when it describes a *surface*: one hue, lit from above, brighter at the top
 * edge and shadowed at the foot, the way a struck or foil-stamped letter
 * actually catches the light. That is `--forge-vertical`; see globals.css.
 *
 * - `primary` — steel. Near-solid foreground with a slight fall-off, for the
 *   part of a headline that carries the sentence.
 * - `accent`  — copper. The one word per page that is allowed to be coloured.
 * - `subtle`  — no finish at all. Standing body copy set in the body face, on
 *   `--muted-foreground`. Running a gradient through a paragraph was costing
 *   contrast for nothing; sub-headline copy should be read, not looked at.
 *
 * Everything renders as plain markup on the server. This is deliberate: the
 * previous implementation read the theme from `useTheme()` and returned `null`
 * until mounted, which meant the heading text (including every page's <h1>)
 * was absent from the server-rendered HTML and only appeared after client
 * hydration. Crawlers and SEO audits saw a page with no <h1>.
 *
 * The entrance animation is CSS (`.reveal-up`) for the same reason. The motion
 * wrapper it replaced emitted `style="opacity:0"` into the server HTML, which
 * put the heading text back out of a crawler's reach even though the element
 * itself was present. See `app/globals.css`.
 */
const variantClasses = {
	primary: 'steel-type',
	accent: 'metal-type',
	subtle: 'text-muted-foreground font-normal',
} as const;

const sizeClasses = {
	sm: 'text-sm md:text-base',
	md: 'text-base md:text-lg',
	lg: 'text-lg md:text-xl',
	xl: 'text-lg md:text-xl leading-relaxed',
	'2xl': 'text-2xl md:text-4xl',
	'4-5': 'text-4xl md:text-5xl',
	'3xl': 'text-[3.25rem] leading-[0.88] md:text-7xl lg:text-[5.5rem]',
};

export const GradientText: React.FC<GradientTextProps> = ({
	children,
	variant = 'primary',
	className = '',
	animate = false,
	animationDelay = 0,
	tag = 'span',
	size = 'xl',
}) => {
	const Tag = tag as any;

	const content = (
		<Tag
			// `pb-2` gives background-clip: text a box to paint descenders into —
			// without it the tail of a `g` or `y` loses its finish. Harmless on the
			// `subtle` variant, which paints no background at all.
			className={`pb-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
		>
			{children}
		</Tag>
	);

	if (animate) {
		return (
			<div
				className="reveal-up"
				style={{ '--reveal-delay': `${animationDelay}s` } as React.CSSProperties}
			>
				{content}
			</div>
		);
	}

	return content;
};
