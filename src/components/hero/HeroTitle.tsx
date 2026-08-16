import React from 'react';
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
 *
 * This is the only <h1> on the homepage, /about, /services, /case-studies and
 * /contact, so it is also the element that has to survive a crawler that does
 * not run JavaScript. It used to be a `motion.h1` with
 * `initial={{opacity: 0, y: 30}}`, which Motion writes into the server HTML as
 * `style="opacity:0;transform:translateY(30px)"` — present in the DOM, but read
 * as hidden by SEO auditors, hence the recurring "Add a H1 heading to this
 * page" finding. The entrance is now a CSS animation whose resting state is
 * visible; see `.reveal-up` in `app/globals.css`.
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
		<h1
			className={`reveal-up tracking-tight font-bold mb-4 leading-[0.95] ${alignClass} ${className}`}
			style={{ '--reveal-delay': `${animationDelay}s` } as React.CSSProperties}
		>
			{/*
			  GradientText hardcodes `pb-2` so bg-clip-text has box to paint descenders
			  into — without it the tail of a `g` or `y` loses its gradient. That padding
			  also opened a gap between the two lines. `-mb-2` pulls the accent line back
			  up without shrinking the padding box, so descenders stay painted on both.
			*/}
			<GradientText tag="span" variant="primary" size="3xl" className="block -mb-2">
				{mainText}
			</GradientText>
			{/*
			  A real space, not JSX whitespace. The two lines are block-level, so
			  this renders as nothing — but without it `textContent` reads
			  "From Idea toDeployment", which is what a crawler or a screen reader
			  extracting the heading actually gets.
			*/}
			{' '}
			<GradientText tag="span" variant="accent" size="3xl" className="block">
				{accentText}
			</GradientText>
		</h1>
	);
};
