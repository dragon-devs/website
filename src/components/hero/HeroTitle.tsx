'use client';

import React from 'react';
import { motion } from 'motion/react';
import { GradientText } from './GradientText';

interface HeroTitleProps {
	/** Main title text (before accent) */
	mainText: string | React.ReactNode;
	/** Accent text (highlighted part) */
	accentText: string;
	/** Optional: Custom className */
	className?: string;
	/** Optional: Animation delay */
	animationDelay?: number;
	/** Optional: Text alignment */
	align?: 'left' | 'center' | 'right';
}

/**
 * Renders a SINGLE <h1> per page. The two coloured lines used to be two
 * separate <h1> elements, which gave every page two H1s — a recurring SEO
 * warning. They are now gradient <span>s inside one <h1>, so the document
 * outline has exactly one top-level heading.
 */
export const HeroTitle: React.FC<HeroTitleProps> = ({
	mainText,
	accentText,
	className = '',
	animationDelay = 0.4,
	align = 'center',
}) => {
	const alignClass = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right',
	}[align];

	return (
		<motion.h1
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: animationDelay }}
			className={`tracking-tight font-bold mb-4 ${alignClass} ${className}`}
		>
			<GradientText tag="span" variant="primary" size="3xl" className="block">
				{mainText}
			</GradientText>
			<span className="inline-block mt-2">
				<GradientText tag="span" variant="accent" size="3xl">
					{accentText}
				</GradientText>
			</span>
		</motion.h1>
	);
};
