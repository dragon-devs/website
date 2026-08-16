'use client';

import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {motion, useInView, type Variants} from 'motion/react';

/**
 * Shared motion primitives.
 *
 * One easing curve, one set of variants, one reveal component — so every
 * section across the site animates identically. Import these instead of
 * re-declaring `initial/whileInView/transition` inline.
 *
 * ## Why these wrap motion instead of using it directly
 *
 * `<motion.div initial={{opacity: 0}} whileInView={{opacity: 1}}>` serialises
 * its `initial` state into the server-rendered HTML as `style="opacity:0"`.
 * That style is only cleared once the client bundle hydrates and the
 * IntersectionObserver fires, so any crawler that reads HTML without running
 * JavaScript sees the entire page as invisible. That is what made SEO audits
 * report "no H1 heading" and "no headings specified on the page" on pages
 * whose headings are right there in the markup, and it is why the homepage
 * word count came back as 53.
 *
 * These components invert the order: the server renders the *revealed* state,
 * and the hidden state is only ever applied on the client, to elements that
 * are already scrolled past the bottom of the viewport. The reader sees the
 * same animation; a crawler sees a fully populated document.
 */

// Soft "ease-out-expo" feel — calm, no overshoot.
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const VIEWPORT = {once: true, amount: 0.2} as const;

export const fadeUp: Variants = {
	hidden: {opacity: 0, y: 20},
	visible: {opacity: 1, y: 0, transition: {duration: 0.55, ease: EASE}},
};

export const staggerParent: Variants = {
	hidden: {},
	visible: {transition: {staggerChildren: 0.08, delayChildren: 0.05}},
};

/** Seconds between consecutive items in a `StaggerGroup`. */
const STAGGER_STEP = 0.08;

// useLayoutEffect warns when React renders on the server; useEffect is the
// no-op equivalent there. On the client the layout variant matters: arming the
// reveal has to happen before the browser paints, or an off-screen element
// would be painted visible for one frame before snapping hidden.
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

type Target = Record<string, string | number>;

/** Matches whatever option shape the installed `useInView` accepts. */
type ViewportOptions = NonNullable<Parameters<typeof useInView>[1]>;

/**
 * Tracks whether a reveal should currently be showing its content.
 *
 * Returns `true` during SSR and hydration so the markup starts out visible.
 * Once mounted, elements that are entirely below the fold are "armed": they
 * snap to the hidden state (off-screen, so the reader never sees it happen)
 * and animate in when scrolled to. Elements already on screen are left alone
 * rather than animated, because fading in content the reader is already
 * looking at is just a flash.
 */
function useRevealState(viewport: ViewportOptions = VIEWPORT) {
	const ref = useRef<HTMLElement>(null);
	const inView = useInView(ref as React.RefObject<Element>, viewport);
	const [armed, setArmed] = useState(false);

	useIsomorphicLayoutEffect(() => {
		const el = ref.current;
		if (!el) return;

		const box = el.getBoundingClientRect();
		const onScreen = box.top < window.innerHeight && box.bottom > 0;
		if (!onScreen) setArmed(true);
	}, []);

	return {ref, shown: !armed || inView};
}

type RevealTag = 'div' | 'span' | 'section' | 'article' | 'aside' | 'p' | 'a'
	| 'blockquote' | 'ul' | 'ol' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface InViewRevealProps {
	children?: React.ReactNode;
	className?: string;
	/** Element to render. Defaults to `div`. */
	as?: RevealTag;
	/** Hidden state to animate out of. */
	from?: Target;
	/** Revealed state — also what the server renders. */
	to?: Target;
	/** Extra delay in seconds before this element reveals. */
	delay?: number;
	duration?: number;
	viewport?: ViewportOptions;
	[key: string]: unknown;
}

/**
 * Reveal a block when it scrolls into view, without hiding it from crawlers.
 * Drop-in replacement for `<motion.x initial={…} whileInView={…}>`.
 */
export function InViewReveal({
	children,
	className,
	as = 'div',
	from = {opacity: 0, y: 20},
	to = {opacity: 1, y: 0},
	delay = 0,
	duration = 0.55,
	viewport = VIEWPORT,
	...rest
}: InViewRevealProps) {
	const {ref, shown} = useRevealState(viewport);
	// The motion proxy caches a component per tag, so this is a stable reference
	// across renders. Typed loosely because the union of every motion element's
	// props narrows to `never` under a polymorphic `as`.
	const Component = (motion as unknown as Record<RevealTag, React.ComponentType<any>>)[as];

	return (
		<Component
			ref={ref}
			className={className}
			// `false`, not a hidden target: this is what keeps the server-rendered
			// markup visible. Motion renders straight to `animate`.
			initial={false}
			animate={shown ? to : from}
			// Hiding is instantaneous and always happens off-screen, so there is
			// nothing to animate on the way out.
			transition={shown ? {duration, ease: EASE, delay} : {duration: 0}}
			{...rest}
		>
			{children}
		</Component>
	);
}

interface RevealProps {
	children: React.ReactNode;
	className?: string;
	/** Extra delay in seconds before this element reveals. */
	delay?: number;
}

/**
 * Reveal a block once it scrolls into view. Drop-in replacement for the
 * old per-page `SectionContainer`.
 */
export function Reveal({children, className, delay = 0}: RevealProps) {
	return (
		<InViewReveal className={className} delay={delay}>
			{children}
		</InViewReveal>
	);
}

// Backwards-compatible alias for the name pages already used.
export const SectionContainer = Reveal;

interface StaggerItemProps {
	children: React.ReactNode;
	className?: string;
	/**
	 * Position within the parent `StaggerGroup`, injected by the group itself.
	 * Drives the reveal delay; the old implementation got the same effect from
	 * motion's `staggerChildren`, which needed the parent to hold the children
	 * in a hidden variant — the thing that hid them from crawlers.
	 */
	index?: number;
}

/**
 * Wrap a group of `StaggerItem`s to reveal them one after another.
 */
export function StaggerGroup({children, className}: {children: React.ReactNode; className?: string}) {
	return (
		<div className={className}>
			{React.Children.map(children, (child, index) =>
				React.isValidElement<StaggerItemProps>(child)
					? React.cloneElement(child, {index})
					: child,
			)}
		</div>
	);
}

export function StaggerItem({children, className, index = 0, ...rest}: StaggerItemProps) {
	return (
		<InViewReveal className={className} delay={index * STAGGER_STEP} {...rest}>
			{children}
		</InViewReveal>
	);
}
