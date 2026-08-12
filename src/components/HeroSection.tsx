'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Sparkles, Zap } from 'lucide-react';
import { useTheme } from 'next-themes';
import MagnetButton from "@/components/custom/MagnetButton";
import { useRouter, usePathname } from "next/navigation";
import { goToContact } from "@/lib/contact-nav";
import Image from "next/image";
import { HeroTitle } from "@/components/hero/HeroTitle";
import { GradientText } from '@/components/hero/GradientText';
import { SpotlightLogo } from "@/components/hero/SpotLightLog";
import Badge from "@/components/hero/Badge";

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
			initial={{ opacity: 0 }}
			animate={{ opacity: visible ? 1 : 0 }}
			transition={{ delay: visible ? 1.4 : 0, duration: 0.4 }}
			className="relative z-10 flex justify-center pb-4 md:pb-8"
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

const HeroSection = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const { theme, systemTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const router = useRouter();
	const pathname = usePathname();

	// Get current theme
	const currentTheme = theme === 'system' ? systemTheme : theme;
	const isDark = currentTheme === 'dark';

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);


	// Memoize gradient colors
	const gradientColors = useMemo(() => ({
		badge: isDark ? 'text-primary/80' : 'text-primary',
		heading: isDark
			? 'from-white via-blue-100 to-purple-100'
			: 'from-gray-900 via-blue-900 to-purple-900',
		accent: isDark
			? 'from-blue-400 via-purple-400 to-emerald-400'
			: 'from-blue-600 via-purple-600 to-emerald-600',
		subtitle: isDark ? 'text-foreground/80' : 'text-foreground/70',
		stats: isDark ? 'text-foreground' : 'text-foreground',
		orb1: isDark ? 'from-blue-500/20 to-purple-500/20' : 'from-blue-400/30 to-purple-400/30',
		orb2: isDark ? 'from-emerald-500/15 to-cyan-500/15' : 'from-emerald-400/25 to-cyan-400/25',
	}), [isDark]);

	// Prevent hydration mismatch
	if (!mounted) {
		return null;
	}

	return (
		// 100svh, not 100vh: on mobile browsers vh is measured against the viewport
		// with the URL bar hidden, so a 100vh hero is always taller than what the
		// reader can actually see and the scroll cue sits below the fold.
		<div id="hero" className="relative flex flex-col min-h-[100svh] md:py-0 py-10">
			{/* Dynamic Gradient Orbs */}
			<motion.div
				className={`absolute w-96 h-96 rounded-full bg-gradient-to-r ${gradientColors.orb1} blur-3xl opacity-30`}
				animate={{
					x: mousePosition.x * 0.02,
					y: mousePosition.y * 0.02,
				}}
				style={{ left: '10%', top: '20%' }}
			/>
			<motion.div
				className={`absolute w-80 h-80 rounded-full bg-gradient-to-r ${gradientColors.orb2} blur-3xl opacity-30`}
				animate={{
					x: mousePosition.x * -0.015,
					y: mousePosition.y * -0.015,
				}}
				style={{ right: '15%', bottom: '20%' }}
			/>

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
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}
						className="flex flex-col sm:flex-row gap-6 justify-center items-center select-none"
					>
						<MagnetButton label="Start Your Project" onClick={() => goToContact(router, pathname)} size={'lg'} />
						<MagnetButton label="View Our Work" variant="secondary" onClick={() => router.push("/case-studies")}
							size={'lg'} />
					</motion.div>
				</div>
			</div>

			<ScrollCue/>

			{/* Code-like decoration */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.1 }}
				transition={{ delay: 2 }}
				className={`absolute top-1/4 left-8 ${isDark ? 'text-green-400' : 'text-green-600'} font-mono text-sm hidden lg:block`}
			>
				<div>{'{'}</div>
				<div className="ml-4">"innovation": true,</div>
				<div className="ml-4">"quality": "premium",</div>
				<div className="ml-4">"delivery": "on-time"</div>
				<div>{'}'}</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.1 }}
				transition={{ delay: 2.2 }}
				className={`absolute bottom-1/4 right-8 ${isDark ? 'text-blue-400' : 'text-blue-600'} font-mono text-sm hidden lg:block`}
			>
				<div>const future = () =&gt; {'{'}</div>
				<div className="ml-4">return innovation;</div>
				<div>{'}'}</div>
			</motion.div>
		</div>
	);
};

export default HeroSection;