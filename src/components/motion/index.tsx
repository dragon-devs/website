'use client';

import React from 'react';
import {motion, type Variants} from 'motion/react';

/**
 * Shared motion primitives.
 *
 * One easing curve, one set of variants, one reveal component — so every
 * section across the site animates identically. Import these instead of
 * re-declaring `initial/whileInView/transition` inline.
 */

// Soft "ease-out-expo" feel — calm, no overshoot.
export const EASE = [0.22, 1, 0.36, 1];

export const VIEWPORT = {once: true, amount: 0.2} as const;

export const fadeUp: Variants = {
	hidden: {opacity: 0, y: 20},
	visible: {opacity: 1, y: 0, transition: {duration: 0.55, ease: EASE}},
};

export const staggerParent: Variants = {
	hidden: {},
	visible: {transition: {staggerChildren: 0.08, delayChildren: 0.05}},
};

type DivProps = React.ComponentProps<typeof motion.div>;

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
		<motion.div
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={VIEWPORT}
			variants={{
				hidden: {opacity: 0, y: 20},
				visible: {opacity: 1, y: 0, transition: {duration: 0.55, ease: EASE, delay}},
			}}
		>
			{children}
		</motion.div>
	);
}

// Backwards-compatible alias for the name pages already used.
export const SectionContainer = Reveal;

/**
 * Wrap a group of `StaggerItem`s to reveal them one after another.
 */
export function StaggerGroup({children, className}: {children: React.ReactNode; className?: string}) {
	return (
		<motion.div
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={VIEWPORT}
			variants={staggerParent}
		>
			{children}
		</motion.div>
	);
}

export function StaggerItem({children, className, ...rest}: DivProps & {children: React.ReactNode}) {
	return (
		<motion.div className={className} variants={fadeUp} {...rest}>
			{children}
		</motion.div>
	);
}
