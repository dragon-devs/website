'use client';

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import MagnetButton from "@/components/custom/MagnetButton";
import { useRouter, usePathname } from "next/navigation";
import { goToContact } from "@/lib/contact-nav";
import { HeroTitle } from "@/components/hero/HeroTitle";
import { GradientText } from '@/components/hero/GradientText';

/**
 * Scroll cue at the foot of the hero.
 *
 * A spark travelling down a wire, rather than the scroll-wheel pictogram it
 * replaces — the same single-hue luminance ramp the rest of the site is built
 * from, and a shape that belongs to this studio rather than to every template.
 *
 * Sits in the flex column rather than absolutely positioned, so it can never
 * land on top of the CTA buttons on a short phone screen. It fades out once
 * the reader has started scrolling — a cue that persists after it's been
 * acted on is just clutter.
 */
const ScrollCue = () => {
	const [visible, setVisible] = useState(true);
	const reduceMotion = useReducedMotion();

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY < 80);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const scrollToContent = () => {
		const hero = document.getElementById('hero');
		window.scrollTo({
			top: hero?.offsetHeight ?? window.innerHeight,
			behavior: reduceMotion ? 'auto' : 'smooth',
		});
	};

	return (
		<motion.div
			// `initial={false}` keeps the server-rendered markup visible; the CSS
			// class below supplies the delayed fade-in that `initial` used to.
			initial={false}
			animate={{ opacity: visible ? 1 : 0 }}
			transition={{ duration: 0.4 }}
			style={{ '--reveal-delay': '1.4s' } as React.CSSProperties}
			className="reveal-fade relative z-10 flex justify-center pb-6 md:pb-10"
			aria-hidden={!visible}
		>
			<button
				type="button"
				onClick={scrollToContent}
				tabIndex={visible ? 0 : -1}
				aria-label="Scroll to content"
				className="group flex flex-col items-center gap-3 p-1
					focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
			>
				<span className="eyebrow hidden sm:block text-muted-foreground
					group-hover:text-primary transition-colors">
					Scroll
				</span>
				{/* CSS keyframes, not a motion `repeat: Infinity` tween — that would
				    keep a main-thread animation alive for the life of the page even
				    once the cue has faded out. `spark-fall` runs on the compositor. */}
				<div className="relative h-12 w-px bg-border overflow-hidden">
					<div className="spark-fall absolute inset-x-0 top-0 h-3
						bg-[linear-gradient(180deg,transparent,var(--primary),transparent)]"/>
				</div>
			</button>
		</motion.div>
	);
};

const HeroSection = () => {
	const router = useRouter();
	const pathname = usePathname();

	return (
		// 100svh, not 100vh: on mobile browsers vh is measured against the viewport
		// with the URL bar hidden, so a 100vh hero is always taller than what the
		// reader can actually see and the scroll cue sits below the fold.
		<div id="hero" className="relative flex flex-col min-h-[100svh] md:py-0 py-10">
			{/*
			  The two blurred pastel orbs that used to sit here, and the two blocks
			  of fake JSON set at 10% opacity, are both gone. The orbs were wider
			  than a phone viewport, which is what pushed the fixed nav off the
			  right edge; the fake code said "innovation: true" about a studio whose
			  actual argument is on the page in plain words. The single overhead
			  light behind everything now comes from `.atmosphere` in the layout.
			*/}
			<div className="relative z-10 flex flex-1 items-center justify-center px-6">
				<div className="max-w-5xl mx-auto text-center">
					<div className="max-w-4xl mx-auto text-center mb-10">
						<HeroTitle
							lead="Digital Product Engineering Studio"
							mainText="From Idea to"
							accentText="Deployment"
							// Was 0.4s with the eyebrow revealing separately at 0.2s. The
							// eyebrow is part of the heading now, so the block reveals once,
							// on the beat the eyebrow used to.
							animationDelay={0.2}
						/>
						<GradientText variant="subtle" size="xl" animate animationDelay={0.6}>
							We're a small studio that designs and builds web apps and custom software —
							and our own products like BizStock. Tight team, direct communication, shipped work.
						</GradientText>
					</div>
					{/* CTA Buttons */}
					<div
						style={{ '--reveal-delay': '0.8s' } as React.CSSProperties}
						className="reveal-up flex flex-col sm:flex-row gap-4 justify-center items-center select-none"
					>
						<MagnetButton label="Start Your Project" href="/#contact" onClick={(e) => { e.preventDefault(); goToContact(router, pathname); }} size={'lg'} />
						<MagnetButton label="View Our Work" variant="secondary" href="/case-studies"
							size={'lg'} />
					</div>
				</div>
			</div>

			<ScrollCue/>
		</div>
	);
};

export default HeroSection;
