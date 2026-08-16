import React from 'react';

interface GradientTextProps {
	/** The text content */
	children: React.ReactNode;
	/** Gradient type preset */
	variant?: 'primary' | 'accent' | 'subtle';
	/** Optional: Custom gradient classes for dark mode (must include the `dark:` prefix) */
	darkGradient?: string;
	/** Optional: Custom gradient classes for light mode */
	lightGradient?: string;
	/** Optional: Additional CSS classes */
	className?: string;
	/** Optional: Animation props */
	animate?: boolean;
	animationDelay?: number;
	tag?: string;
	/** Optional: Text size */
	size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4-5';
}

/**
 * Gradient classes are expressed with Tailwind `dark:` variants so the correct
 * colours are chosen by CSS from the `class` attribute next-themes writes on
 * <html>. This is deliberate: the previous implementation read the theme from
 * `useTheme()` and returned `null` until mounted, which meant the heading text
 * (including every page's <h1>) was absent from the server-rendered HTML and
 * only appeared after client hydration. Crawlers and SEO audits saw a page with
 * no <h1>. Rendering plain markup on the server fixes that and removes the
 * hydration flash.
 *
 * The entrance animation is CSS (`.reveal-up`) for the same reason. The motion
 * wrapper this replaced emitted `style="opacity:0"` into the server HTML, which
 * put the heading text back out of a crawler's reach even though the element
 * itself was present. See `app/globals.css`.
 */
const gradientPresets = {
	primary:
		'from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100',
	accent:
		'from-blue-600 via-purple-600 to-emerald-600 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400',
	subtle:
		'from-gray-800 via-gray-700 to-gray-900 dark:from-gray-200 dark:via-gray-100 dark:to-white',
};

const sizeClasses = {
	sm: 'text-sm md:text-base',
	md: 'text-base md:text-lg',
	lg: 'text-lg md:text-xl',
	xl: 'text-xl md:text-2xl',
	'2xl': 'text-2xl md:text-4xl',
	'4-5': 'text-4xl md:text-5xl',
	'3xl': 'text-5xl md:text-7xl lg:text-8xl',
};

export const GradientText: React.FC<GradientTextProps> = ({
	children,
	variant = 'primary',
	darkGradient,
	lightGradient,
	className = '',
	animate = false,
	animationDelay = 0,
	tag = 'span',
	size = 'xl',
}) => {
	const gradientClass =
		darkGradient && lightGradient
			? `${lightGradient} ${darkGradient}`
			: gradientPresets[variant];

	const Tag = tag as any;

	const content = (
		<Tag
			className={`bg-gradient-to-r pb-2 ${gradientClass} bg-clip-text text-transparent ${sizeClasses[size]} ${className}`}
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
