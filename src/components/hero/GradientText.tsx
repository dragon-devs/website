'use client';

import React, {JSX, useMemo} from 'react';
import {useTheme} from 'next-themes';
import {motion} from 'motion/react';

interface GradientTextProps {
	/** The text content */
	children: React.ReactNode;
	/** Gradient type preset */
	variant?: 'primary' | 'accent' | 'subtle';
	/** Optional: Custom gradient colors for dark mode */
	darkGradient?: string;
	/** Optional: Custom gradient colors for light mode */
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

const gradientPresets = {
	primary: {
		dark: 'from-white via-blue-100 to-purple-100',
		light: 'from-gray-900 via-blue-900 to-purple-900'
	},
	accent: {
		dark: 'from-blue-400 via-purple-400 to-emerald-400',
		light: 'from-blue-600 via-purple-600 to-emerald-600'
	},
	subtle: {
		dark: 'from-gray-200 via-gray-100 to-white',
		light: 'from-gray-800 via-gray-700 to-gray-900'
	}
};

const sizeClasses = {
	sm: 'text-sm md:text-base',
	md: 'text-base md:text-lg',
	lg: 'text-lg md:text-xl',
	xl: 'text-xl md:text-2xl',
	'2xl': 'text-2xl md:text-4xl',
	'4-5': 'text-4xl md:text-5xl',
	'3xl': 'text-5xl md:text-7xl lg:text-8xl'
};

export const GradientText: React.FC<GradientTextProps> = ({
	                                                          children,
	                                                          variant = 'primary',
	                                                          darkGradient,
	                                                          lightGradient,
	                                                          className = '',
	                                                          animate = false,
	                                                          animationDelay = 0,
	                                                          tag = "span",
	                                                          size = 'xl'
                                                          }) => {
	const {theme, systemTheme} = useTheme();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	const currentTheme = theme === 'system' ? systemTheme : theme;
	const isDark = currentTheme === 'dark';

	const gradientClass = useMemo(() => {
		if (darkGradient && lightGradient) {
			return isDark ? darkGradient : lightGradient;
		}
		const preset = gradientPresets[variant];
		return isDark ? preset.dark : preset.light;
	}, [isDark, variant, darkGradient, lightGradient]);

	if (!mounted) {
		return null;
	}

	const Tag = tag as any;

	// @ts-ignore
	const content = (
		<Tag
			className={`bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent ${sizeClasses[size]} ${className}`}
		>
			{children}
		</Tag>
	);


	if (animate) {
		return (
			<motion.div
				initial={{opacity: 0, y: 30}}
				animate={{opacity: 1, y: 0}}
				transition={{delay: animationDelay}}
			>
				{content}
			</motion.div>
		);
	}

	return content;
};

