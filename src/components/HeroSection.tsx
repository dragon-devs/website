'use client';

import React, {useEffect, useState} from 'react';
import {motion, useScroll, useTransform} from 'motion/react';
import {Zap} from 'lucide-react';
import CountUp from './CountUp';
import MagnetButton from "@/components/custom/MagnetButton";


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

	return (
		<div className="relative md:py-0 py-20 min-h-screen  ">
			{/* Logo with Spotlight Effect */}
			<div className=" mx-auto">
				{/* High opacity layer - revealed by mouse */}
				<div
					className="absolute md:p-14 p-4 justify-center z-20 w-full h-full pointer-events-none"
					style={{
						maskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
						WebkitMaskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
					}}
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442.4 442.42" className="w-full h-full scale-110 opacity-70">
						<defs>
							<style>{`.cls-1{fill:none;stroke:#fff;stroke-miterlimit:10;}`}</style>
						</defs>
						<g id="Layer_2" data-name="Layer 2">
							<g id="Layer_1-2" data-name="Layer 1">
								<path className="cls-1" d="M441.9,221.22A220.66,220.66,0,0,1,435,276c-.15.59-.29,1.18-.46,1.77a211.58,211.58,0,0,1-6.65,20.94,219.59,219.59,0,0,1-22.38,43.89,208.44,208.44,0,0,1-12.61,17.24c-.94,1.18-1.9,2.36-2.92,3.52A214.31,214.31,0,0,1,363.33,390c-1.16,1-2.34,2-3.52,2.92a213.38,213.38,0,0,1-17.24,12.63,219.51,219.51,0,0,1-43.89,22.36,216.6,216.6,0,0,1-21,6.67c-.59.17-1.18.31-1.77.46a220.6,220.6,0,0,1-54.75,6.86c-1.57,0-3.13,0-4.7-.06A219.66,219.66,0,0,1,79.07,390a215.07,215.07,0,0,1-26.7-26.69A219.73,219.73,0,0,1,.56,225.92c0-1.57-.06-3.13-.06-4.7a221.33,221.33,0,0,1,4.59-45,5.53,5.53,0,0,1,9.32-2.74l31.67,31.67a5.51,5.51,0,0,1,1.59,4.29q-.39,5.82-.4,11.74a174.21,174.21,0,0,0,5.1,41.94q1.83,7.41,4.3,14.58c.77,2.29,1.6,4.53,2.47,6.76a174.51,174.51,0,0,0,98.77,98.78c2.23.86,4.48,1.69,6.77,2.47q7.11,2.46,14.49,4.27a173.35,173.35,0,0,0,42,5.13c4.79,0,9.55-.2,14.25-.59a169.26,169.26,0,0,0,25.81-4.06c.66-.14,1.31-.31,2-.48q7.38-1.81,14.49-4.27a172.2,172.2,0,0,0,30.9-14.14,168.87,168.87,0,0,0,17.88-12,174.08,174.08,0,0,0,33.14-33.11,169.9,169.9,0,0,0,11.95-17.9,172,172,0,0,0,14.14-30.88q2.46-7.17,4.29-14.58c.17-.65.34-1.27.47-1.92a169.58,169.58,0,0,0,4.05-25.77c.39-4.7.59-9.46.59-14.25A173.72,173.72,0,0,0,390,179.28q-1.81-7.41-4.29-14.58c-.77-2.31-1.62-4.57-2.49-6.82a174.57,174.57,0,0,0-98.7-98.7c-2.25-.87-4.51-1.72-6.82-2.49q-7.16-2.46-14.58-4.3a174.21,174.21,0,0,0-41.94-5.1q-5.91,0-11.74.4a5.51,5.51,0,0,1-4.29-1.59L173.49,14.41a5.53,5.53,0,0,1,2.74-9.32A221.21,221.21,0,0,1,221.2.5c1.59,0,3.15,0,4.72.06A220.47,220.47,0,0,1,441.84,216.48Q441.9,218.84,441.9,221.22Z"/>
								<path className="cls-1" d="M296.57,266.08l-5.25,47A5,5,0,0,1,282.9,316l-12.17-12.17-106-106L131.57,164.7l-48.8-48.8L52.62,85.75a4.87,4.87,0,0,1-.27-6.63l0,0a218.63,218.63,0,0,1,26.7-26.7l0,0a4.91,4.91,0,0,1,6.67.28L197.83,164.7,295.15,262A4.91,4.91,0,0,1,296.57,266.08Z"/>
								<path className="cls-1" d="M222.9,95.93v50.63a5.53,5.53,0,0,1-9.44,3.91L104.72,41.74a5.54,5.54,0,0,1,1-8.64,216.77,216.77,0,0,1,34.65-17.32A5.52,5.52,0,0,1,146.29,17l75,75A5.58,5.58,0,0,1,222.9,95.93Z"/>
								<path className="cls-1" d="M268.27,205.29l-23.16-23.16a5.52,5.52,0,0,1-1.62-3.91V127.59a5.53,5.53,0,0,1,9.44-3.91l23.17,23.17a5.52,5.52,0,0,1,1.62,3.91v50.62A5.53,5.53,0,0,1,268.27,205.29Z"/>
								<path className="cls-1" d="M201.4,277.74H150.78a5.53,5.53,0,0,1-3.91-1.62l-94.5-94.5-.46-.46L35.45,164.7,17,146.29a5.51,5.51,0,0,1-1.25-5.92A217.89,217.89,0,0,1,33.1,105.73a5.54,5.54,0,0,1,8.63-1l10.64,10.65L70.81,133.8l30.9,30.9,63,63,40.63,40.63A5.53,5.53,0,0,1,201.4,277.74Z"/>
							</g>
						</g>
					</svg>
				</div>

				{/* Base layer - always visible at low opacity */}
				<div className="absolute md:p-14 p-4 justify-center z-10 w-full h-full pointer-events-none">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442.4 442.42" className="w-full h-full scale-110 md:opacity-5 opacity-10">
						<defs>
							<style>{`.cls-1{fill:none;stroke:#fff;stroke-miterlimit:10;}`}</style>
						</defs>
						<g id="Layer_2" data-name="Layer 2">
							<g id="Layer_1-2" data-name="Layer 1">
								<path className="cls-1" d="M441.9,221.22A220.66,220.66,0,0,1,435,276c-.15.59-.29,1.18-.46,1.77a211.58,211.58,0,0,1-6.65,20.94,219.59,219.59,0,0,1-22.38,43.89,208.44,208.44,0,0,1-12.61,17.24c-.94,1.18-1.9,2.36-2.92,3.52A214.31,214.31,0,0,1,363.33,390c-1.16,1-2.34,2-3.52,2.92a213.38,213.38,0,0,1-17.24,12.63,219.51,219.51,0,0,1-43.89,22.36,216.6,216.6,0,0,1-21,6.67c-.59.17-1.18.31-1.77.46a220.6,220.6,0,0,1-54.75,6.86c-1.57,0-3.13,0-4.7-.06A219.66,219.66,0,0,1,79.07,390a215.07,215.07,0,0,1-26.7-26.69A219.73,219.73,0,0,1,.56,225.92c0-1.57-.06-3.13-.06-4.7a221.33,221.33,0,0,1,4.59-45,5.53,5.53,0,0,1,9.32-2.74l31.67,31.67a5.51,5.51,0,0,1,1.59,4.29q-.39,5.82-.4,11.74a174.21,174.21,0,0,0,5.1,41.94q1.83,7.41,4.3,14.58c.77,2.29,1.6,4.53,2.47,6.76a174.51,174.51,0,0,0,98.77,98.78c2.23.86,4.48,1.69,6.77,2.47q7.11,2.46,14.49,4.27a173.35,173.35,0,0,0,42,5.13c4.79,0,9.55-.2,14.25-.59a169.26,169.26,0,0,0,25.81-4.06c.66-.14,1.31-.31,2-.48q7.38-1.81,14.49-4.27a172.2,172.2,0,0,0,30.9-14.14,168.87,168.87,0,0,0,17.88-12,174.08,174.08,0,0,0,33.14-33.11,169.9,169.9,0,0,0,11.95-17.9,172,172,0,0,0,14.14-30.88q2.46-7.17,4.29-14.58c.17-.65.34-1.27.47-1.92a169.58,169.58,0,0,0,4.05-25.77c.39-4.7.59-9.46.59-14.25A173.72,173.72,0,0,0,390,179.28q-1.81-7.41-4.29-14.58c-.77-2.31-1.62-4.57-2.49-6.82a174.57,174.57,0,0,0-98.7-98.7c-2.25-.87-4.51-1.72-6.82-2.49q-7.16-2.46-14.58-4.3a174.21,174.21,0,0,0-41.94-5.1q-5.91,0-11.74.4a5.51,5.51,0,0,1-4.29-1.59L173.49,14.41a5.53,5.53,0,0,1,2.74-9.32A221.21,221.21,0,0,1,221.2.5c1.59,0,3.15,0,4.72.06A220.47,220.47,0,0,1,441.84,216.48Q441.9,218.84,441.9,221.22Z"/>
								<path className="cls-1" d="M296.57,266.08l-5.25,47A5,5,0,0,1,282.9,316l-12.17-12.17-106-106L131.57,164.7l-48.8-48.8L52.62,85.75a4.87,4.87,0,0,1-.27-6.63l0,0a218.63,218.63,0,0,1,26.7-26.7l0,0a4.91,4.91,0,0,1,6.67.28L197.83,164.7,295.15,262A4.91,4.91,0,0,1,296.57,266.08Z"/>
								<path className="cls-1" d="M222.9,95.93v50.63a5.53,5.53,0,0,1-9.44,3.91L104.72,41.74a5.54,5.54,0,0,1,1-8.64,216.77,216.77,0,0,1,34.65-17.32A5.52,5.52,0,0,1,146.29,17l75,75A5.58,5.58,0,0,1,222.9,95.93Z"/>
								<path className="cls-1" d="M268.27,205.29l-23.16-23.16a5.52,5.52,0,0,1-1.62-3.91V127.59a5.53,5.53,0,0,1,9.44-3.91l23.17,23.17a5.52,5.52,0,0,1,1.62,3.91v50.62A5.53,5.53,0,0,1,268.27,205.29Z"/>
								<path className="cls-1" d="M201.4,277.74H150.78a5.53,5.53,0,0,1-3.91-1.62l-94.5-94.5-.46-.46L35.45,164.7,17,146.29a5.51,5.51,0,0,1-1.25-5.92A217.89,217.89,0,0,1,33.1,105.73a5.54,5.54,0,0,1,8.63-1l10.64,10.65L70.81,133.8l30.9,30.9,63,63,40.63,40.63A5.53,5.53,0,0,1,201.4,277.74Z"/>
							</g>
						</g>
					</svg>
				</div>
			</div>

			{/* Dynamic Gradient Orbs */}
			<motion.div
				className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl opacity-30"
				animate={{
					x: mousePosition.x * 0.02,
					y: mousePosition.y * 0.02,
				}}
				style={{left: '10%', top: '20%'}}
			/>
			<motion.div
				className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 blur-3xl opacity-30"
				animate={{
					x: mousePosition.x * -0.015,
					y: mousePosition.y * -0.015,
				}}
				style={{right: '15%', bottom: '20%'}}
			/>


			{/* Floating Tech Icons */}
			{/*{floatingIcons.map((item, index) => (*/}
			{/*	<motion.div*/}
			{/*		key={index}*/}
			{/*		className="absolute"*/}
			{/*		initial={{opacity: 0, scale: 0}}*/}
			{/*		animate={{*/}
			{/*			opacity: 0.6,*/}
			{/*			scale: 1,*/}
			{/*			y: [-10, 10, -10],*/}
			{/*		}}*/}
			{/*		transition={{*/}
			{/*			delay: item.delay,*/}
			{/*			y: {*/}
			{/*				duration: 4,*/}
			{/*				repeat: Infinity,*/}
			{/*				ease: "easeInOut"*/}
			{/*			}*/}
			{/*		}}*/}
			{/*		style={{left: item.x, top: item.y}}*/}
			{/*	>*/}
			{/*		<div className="p-3 rounded-xl opacity-50 backdrop-blur-sm border border-border">*/}
			{/*			<item.icon size={24} className="text-primary/80"/>*/}
			{/*		</div>*/}
			{/*	</motion.div>*/}
			{/*))}*/}

			{/* Main Content */}
			<div className="relative scale-90 z-10 flex items-center justify-center min-h-screen px-6">
				<div className="max-w-6xl mx-auto text-center">
					{/* Badge */}
					<motion.div
						initial={{opacity: 0, y: 30}}
						animate={{opacity: 1, y: 0}}
						transition={{delay: 0.2}}
						className="inline-flex items-center px-4 py-2  border border-primary/80 text-primary/80 text-sm font-medium mb-8"
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
						className="text-xl tracking-tight md:text-2xl  text-foreground/80 max-w-4xl mx-auto mb-12 md:leading-relaxed leading-tight"
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
            <MagnetButton label="Start Your Project"  onClick={() => router.push("/contact")} size={'lg'} />
            <MagnetButton label="View Our Work" variant="secondary" onClick={() => router.push("/projects") } size={'lg'} />
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
								<div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
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
				className="absolute md:bottom-6 bottom-10 left-1/2 transform -translate-x-1/2 z-20"
			>
				<motion.div
					animate={{y: [0, 10, 0]}}
					transition={{duration: 2, repeat: Infinity}}
					className="w-6 h-10 border-2 rounded-full border-border  flex justify-center"
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