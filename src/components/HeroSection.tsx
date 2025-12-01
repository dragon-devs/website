'use client';

import React, {useEffect, useState, useMemo} from 'react';
import {motion, useScroll, useTransform} from 'motion/react';
import {Sparkles, Zap} from 'lucide-react';
import {useTheme} from 'next-themes';
import CountUp from './CountUp';
import MagnetButton from "@/components/custom/MagnetButton";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {HeroTitle} from "@/components/hero/HeroTitle";
import {GradientText} from '@/components/hero/GradientText';
import {SpotlightLogo} from "@/components/hero/SpotLightLog";
import Badge from "@/components/hero/Badge";

const HeroSection = () => {
	const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
	const {scrollY} = useScroll();
	const y = useTransform(scrollY, [0, 500], [0, 150]);
	const {theme, systemTheme} = useTheme();
	const [mounted, setMounted] = useState(false);

	const router = useRouter();

	// Get current theme
	const currentTheme = theme === 'system' ? systemTheme : theme;
	const isDark = currentTheme === 'dark';

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({x: e.clientX, y: e.clientY});
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
		<div className="relative md:py-0 py-10 min-h-screen">
			{/* Dynamic Gradient Orbs */}
			<motion.div
				className={`absolute w-96 h-96 rounded-full bg-gradient-to-r ${gradientColors.orb1} blur-3xl opacity-30`}
				animate={{
					x: mousePosition.x * 0.02,
					y: mousePosition.y * 0.02,
				}}
				style={{left: '10%', top: '20%'}}
			/>
			<motion.div
				className={`absolute w-80 h-80 rounded-full bg-gradient-to-r ${gradientColors.orb2} blur-3xl opacity-30`}
				animate={{
					x: mousePosition.x * -0.015,
					y: mousePosition.y * -0.015,
				}}
				style={{right: '15%', bottom: '20%'}}
			/>

			{/* Main Content */}
			<div className="relative scale-90 z-10 flex items-center justify-center min-h-screen px-6">
				<div className="max-w-7xl mx-auto text-center">
					{/* Badge */}
					<Badge icon={Zap}>
						Next-Generation Software Solutions
					</Badge>
					<div className="max-w-4xl text-center mb-6">
						<HeroTitle
							mainText="From Idea to"
							accentText="Deployment"
						/>
						<GradientText variant="subtle" size="xl" animate animationDelay={0.6}>
								From idea to deployment We craft intelligent software solutions that transform ideas into reality.
								From AI-powered applications to scalable enterprise systems, we build the future.
						</GradientText>
					</div>
					{/* CTA Buttons */}
					<motion.div
						initial={{opacity: 0, y: 30}}
						animate={{opacity: 1, y: 0}}
						transition={{delay: 0.8}}
						className="flex flex-col sm:flex-row gap-6 justify-center items-center select-none"
					>
						<MagnetButton label="Start Your Project" onClick={() => router.push("/#contact")} size={'lg'}/>
						<MagnetButton label="View Our Work" variant="secondary" onClick={() => router.push("/case-study")}
						              size={'lg'}/>
					</motion.div>

					{/* Stats */}
					<motion.div
						initial={{opacity: 0, y: 30}}
						animate={{opacity: 1, y: 0}}
						transition={{delay: 1}}
						className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
					>
						{[
							{number: 28, segment: "+", label: "Projects Delivered"},
							{number: 19, segment: "+", label: "Happy Clients"},
							{number: 98, segment: "%", label: "Success Rate"}
						].map((stat, index) => (
							<motion.div
								key={index}
								initial={{opacity: 0, scale: 0.8}}
								animate={{opacity: 1, scale: 1}}
								transition={{delay: 1.2 + index * 0.1}}
								className="text-center"
							>
								<div className={`text-4xl md:text-5xl font-bold ${gradientColors.stats} mb-2`}>
									<CountUp
										from={-100}
										to={stat.number}
										separator=","
										direction="up"
										duration={1}
										className="count-up-text"
									/>{stat.segment}
								</div>
								<div className="text-muted-foreground">{stat.label}</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{delay: 1.5}}
				className="absolute md:bottom-0 bottom-10 left-1/2 transform -translate-x-1/2 z-20"
			>
				<motion.div
					animate={{y: [0, 10, 0]}}
					transition={{duration: 2, repeat: Infinity}}
					className="w-6 h-10 border-2 rounded-full border-border flex justify-center"
				>
					<motion.div
						animate={{y: [0, 12, 0]}}
						transition={{duration: 2, repeat: Infinity}}
						className={`w-1 h-3 ${isDark ? 'bg-white/50' : 'bg-black/50'} rounded-full mt-2`}
					/>
				</motion.div>
			</motion.div>

			{/* Code-like decoration */}
			<motion.div
				initial={{opacity: 0}}
				animate={{opacity: 0.1}}
				transition={{delay: 2}}
				className={`absolute top-1/4 left-8 ${isDark ? 'text-green-400' : 'text-green-600'} font-mono text-sm hidden lg:block`}
			>
				<div>{'{'}</div>
				<div className="ml-4">"innovation": true,</div>
				<div className="ml-4">"quality": "premium",</div>
				<div className="ml-4">"delivery": "on-time"</div>
				<div>{'}'}</div>
			</motion.div>

			<motion.div
				initial={{opacity: 0}}
				animate={{opacity: 0.1}}
				transition={{delay: 2.2}}
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