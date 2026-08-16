'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useTransform } from 'motion/react';
import { Zap } from 'lucide-react';
import MagnetButton from "@/components/custom/MagnetButton";
import { useRouter, usePathname } from "next/navigation";
import { goToContact } from "@/lib/contact-nav";
import { HeroTitle } from "@/components/hero/HeroTitle";
import { GradientText } from '@/components/hero/GradientText';
import Badge from "@/components/hero/Badge";
import { useFinePointer } from "@/lib/use-fine-pointer";

/**
 * Scroll cue at the foot of the hero.
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
			className="reveal-fade relative z-10 flex justify-center pb-4 md:pb-8"
			aria-hidden={!visible}
		>
			<button
				type="button"
				onClick={scrollToContent}
				tabIndex={visible ? 0 : -1}
				aria-label="Scroll to content"
				className="group flex flex-col items-center gap-1.5 p-1 rounded-xl cursor-pointer
					focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
			>
				<span className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.2em] leading-none
					text-muted-foreground group-hover:text-primary transition-colors">
					Scroll
				</span>
				<div className="w-5 h-8 rounded-full border-2 border-border flex justify-center pt-1.5
					group-hover:border-primary/60 transition-colors">
					<motion.div
						animate={reduceMotion ? undefined : { y: [0, 8, 0], opacity: [1, 0.3, 1] }}
						transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
						className="w-1 h-1.5 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors"
					/>
				</div>
			</button>
		</motion.div>
	);
};

/**
 * The two blurred background orbs.
 *
 * They live in their own `overflow-hidden` layer because `w-96` anchored at
 * `left: 10%` is wider than a phone viewport — unclipped, it stretched the
 * document to 423px on a 393px screen, which is what pushed the fixed nav and
 * theme buttons off the right edge and left the dead strip beside the content.
 *
 * The parallax follows the pointer through motion values rather than state, so
 * mousemove never re-renders the hero, and the listener is only attached on
 * devices that actually have a pointer to follow.
 */
const HeroOrbs = () => {
	const finePointer = useFinePointer();
	const reduceMotion = useReducedMotion();

	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const orb1X = useTransform(mouseX, v => v * 0.02);
	const orb1Y = useTransform(mouseY, v => v * 0.02);
	const orb2X = useTransform(mouseX, v => v * -0.015);
	const orb2Y = useTransform(mouseY, v => v * -0.015);

	useEffect(() => {
		if (!finePointer || reduceMotion) return;

		const onMouseMove = (e: MouseEvent) => {
			mouseX.set(e.clientX);
			mouseY.set(e.clientY);
		};

		window.addEventListener('mousemove', onMouseMove, { passive: true });
		return () => window.removeEventListener('mousemove', onMouseMove);
	}, [finePointer, reduceMotion, mouseX, mouseY]);

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
			<motion.div
				className="absolute w-96 h-96 rounded-full bg-gradient-to-r blur-3xl opacity-30
					from-blue-400/30 to-purple-400/30 dark:from-blue-500/20 dark:to-purple-500/20"
				style={{ left: '10%', top: '20%', x: orb1X, y: orb1Y }}
			/>
			<motion.div
				className="absolute w-80 h-80 rounded-full bg-gradient-to-r blur-3xl opacity-30
					from-emerald-400/25 to-cyan-400/25 dark:from-emerald-500/15 dark:to-cyan-500/15"
				style={{ right: '15%', bottom: '20%', x: orb2X, y: orb2Y }}
			/>
		</div>
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
			<HeroOrbs />

			{/* Main Content */}
			<div className="relative scale-90 z-10 flex flex-1 items-center justify-center px-6">
				<div className="max-w-7xl mx-auto text-center">
					{/* Badge */}
					<Badge icon={Zap}>
						Digital product engineering studio
					</Badge>
					<div className="max-w-4xl text-center mb-6">
						<HeroTitle
							mainText="From Idea to"
							accentText="Deployment"
						/>
						<GradientText variant="subtle" size="xl" animate animationDelay={0.6}>
							We're a small studio that designs and builds web apps and custom software —
							and our own products like BizStock. Tight team, direct communication, shipped work.
						</GradientText>
					</div>
					{/* CTA Buttons */}
					<div
						style={{ '--reveal-delay': '0.8s' } as React.CSSProperties}
						className="reveal-up flex flex-col sm:flex-row gap-6 justify-center items-center select-none"
					>
						<MagnetButton label="Start Your Project" onClick={() => goToContact(router, pathname)} size={'lg'} />
						<MagnetButton label="View Our Work" variant="secondary" onClick={() => router.push("/case-studies")}
							size={'lg'} />
					</div>
				</div>
			</div>

			<ScrollCue/>

			{/* Code-like decoration. `aria-hidden` because it is texture, not content —
			    and now that it is in the server-rendered HTML unhidden, it would
			    otherwise be read out and counted as page copy. */}
			<div
				aria-hidden="true"
				style={{ '--reveal-delay': '2s' } as React.CSSProperties}
				className="reveal-fade opacity-10 absolute top-1/4 left-8 text-green-600 dark:text-green-400 font-mono text-sm hidden lg:block"
			>
				<div>{'{'}</div>
				<div className="ml-4">"innovation": true,</div>
				<div className="ml-4">"quality": "premium",</div>
				<div className="ml-4">"delivery": "on-time"</div>
				<div>{'}'}</div>
			</div>

			<div
				aria-hidden="true"
				style={{ '--reveal-delay': '2.2s' } as React.CSSProperties}
				className="reveal-fade opacity-10 absolute bottom-1/4 right-8 text-blue-600 dark:text-blue-400 font-mono text-sm hidden lg:block"
			>
				<div>const future = () =&gt; {'{'}</div>
				<div className="ml-4">return innovation;</div>
				<div>{'}'}</div>
			</div>
		</div>
	);
};

export default HeroSection;