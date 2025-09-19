'use client';

import React, {useEffect, useState} from 'react';
import {motion, useScroll, useTransform} from 'motion/react';
import {ArrowRight, Code, Zap, Globe, Shield, Cpu} from 'lucide-react';
import Magnet from "@/components/Magnet";
import CountUp from './CountUp';

const HeroSection = () => {
	const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
	const {scrollY} = useScroll();
	const y = useTransform(scrollY, [0, 500], [0, 150]);

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({x: e.clientX, y: e.clientY});
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	const floatingIcons = [
		{icon: Code, delay: 0, x: '10%', y: '20%'},
		{icon: Zap, delay: 0.5, x: '80%', y: '15%'},
		{icon: Globe, delay: 1, x: '15%', y: '70%'},
		{icon: Shield, delay: 1.5, x: '75%', y: '65%'},
		{icon: Cpu, delay: 2, x: '50%', y: '10%'},
	];

	const gridPattern = Array.from({length: 20}, (_, i) => i);

	return (
		<div
			className="relative md:py-0 py-20 min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
			{/* Animated Grid Background */}
			<div className="absolute inset-0">
				<svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
							<path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#grid)" className="text-primary/30"/>
				</svg>
			</div>

			{/* Dynamic Gradient Orbs */}
			<motion.div
				className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
				animate={{
					x: mousePosition.x * 0.02,
					y: mousePosition.y * 0.02,
				}}
				style={{left: '10%', top: '20%'}}
			/>
			<motion.div
				className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 blur-3xl"
				animate={{
					x: mousePosition.x * -0.015,
					y: mousePosition.y * -0.015,
				}}
				style={{right: '15%', bottom: '20%'}}
			/>

			{/* Floating Tech Icons */}
			{floatingIcons.map((item, index) => (
				<motion.div
					key={index}
					className="absolute"
					initial={{opacity: 0, scale: 0}}
					animate={{
						opacity: 0.6,
						scale: 1,
						y: [-10, 10, -10],
					}}
					transition={{
						delay: item.delay,
						y: {
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut"
						}
					}}
					style={{left: item.x, top: item.y}}
				>
					<div className="p-3 rounded-xl opacity-50 bg-white/5 backdrop-blur-sm border border-white/10">
						<item.icon size={24} className="text-blue-400"/>
					</div>
				</motion.div>
			))}

			{/* Main Content */}
			<div className="relative z-10 flex items-center justify-center min-h-screen px-6">
				<div className="max-w-6xl mx-auto text-center">
					{/* Badge */}
					<motion.div
						initial={{opacity: 0, y: 30}}
						animate={{opacity: 1, y: 0}}
						transition={{delay: 0.2}}
						className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
					>
						<Zap size={16} className="mr-2"/>
						Next-Generation Software Solutions
					</motion.div>

					{/* Main Heading */}
					<motion.h1
						initial={{opacity: 0, y: 30}}
						animate={{opacity: 1, y: 0}}
						transition={{delay: 0.4}}
						className="text-5xl md:text-7xl tracking-tight lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
					>
						Code Beyond
						<br/>
						<span
							className="bg-gradient-to-r tracking-tight from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Boundaries
            </span>
					</motion.h1>

					{/* Subtitle */}
					<motion.p
						initial={{opacity: 0, y: 30}}
						animate={{opacity: 1, y: 0}}
						transition={{delay: 0.6}}
						className="text-xl tracking-tight md:text-2xl  text-gray-300 max-w-4xl mx-auto mb-12 md:leading-relaxed leading-tight"
					>
						We craft intelligent software solutions that transform ideas into reality.
						From AI-powered applications to scalable enterprise systems, we build the future.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						initial={{opacity: 0, y: 30}}
						animate={{opacity: 1, y: 0}}
						transition={{delay: 0.8}}
						className="flex flex-col sm:flex-row gap-6 justify-center items-center select-none"
					>
						<Magnet padding={25} disabled={false} magnetStrength={10}>
							<motion.div
								whileHover={{scale: 1.02, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"}}
								whileTap={{scale: 0.98}}
								className="md:w-auto w-full group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg flex items-center gap-3 shadow-xl"
							>
								<Magnet padding={25} disabled={false} magnetStrength={8}>
									<div className="flex justify-center items-center gap-2">
										<p>
											Start Your Project
										</p>
										<motion.div
											animate={{x: [0, 5, 0]}}
											transition={{duration: 1.5, repeat: Infinity}}
										>
											<ArrowRight size={20}/>
										</motion.div>
									</div>
								</Magnet>
							</motion.div>
						</Magnet>


						<Magnet padding={25} disabled={false} magnetStrength={10}>
							<motion.div
								whileHover={{scale: 1.02}}
								whileTap={{scale: 0.98}}
								className="md:w-auto w-full px-8 py-4 border border-white/20 rounded-full text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
							>
								<Magnet padding={25} disabled={false} magnetStrength={8}>
									View Our Work
								</Magnet>
							</motion.div>
						</Magnet>
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
								<div className="text-4xl md:text-5xl font-bold text-white mb-2">
									<CountUp
										from={-100}
										to={stat.number}
										separator=","
										direction="up"
										duration={1}
										className="count-up-text"
									/>{stat.segment}
								</div>
								<div className="text-gray-400">{stat.label}</div>
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
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
			>
				<motion.div
					animate={{y: [0, 10, 0]}}
					transition={{duration: 2, repeat: Infinity}}
					className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
				>
					<motion.div
						animate={{y: [0, 12, 0]}}
						transition={{duration: 2, repeat: Infinity}}
						className="w-1 h-3 bg-white/50 rounded-full mt-2"
					/>
				</motion.div>
			</motion.div>

			{/* Code-like decoration */}
			<motion.div
				initial={{opacity: 0}}
				animate={{opacity: 0.1}}
				transition={{delay: 2}}
				className="absolute top-1/4 left-8 text-green-400 font-mono text-sm hidden lg:block"
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
				className="absolute bottom-1/4 right-8 text-blue-400 font-mono text-sm hidden lg:block"
			>
				<div>const future = () =&gt; {'{'}</div>
				<div className="ml-4">return innovation;</div>
				<div>{'}'}</div>
			</motion.div>
		</div>
	);
};

export default HeroSection;