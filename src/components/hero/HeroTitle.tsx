'use client';

import React from 'react';
import {GradientText} from './GradientText';

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

export const HeroTitle: React.FC<HeroTitleProps> = ({
	                                                    mainText,
	                                                    accentText,
	                                                    className = '',
	                                                    animationDelay = 0.4,
	                                                    align = 'center'
                                                    }) => {
	const alignClass = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right'
	}[align];

	return (
		<div className={`tracking-tight font-bold mb-6 ${alignClass} ${className}`}>
			<GradientText
				variant="primary"
				size="3xl"
				animate
				animationDelay={animationDelay}
			>
				<h1>
					{mainText}
				</h1>
				<br />
				<span className="inline-block mt-2">
					<GradientText variant="accent" size="3xl">
						{accentText}
					</GradientText>
				</span>
			</GradientText>
		</div>
	);
};
