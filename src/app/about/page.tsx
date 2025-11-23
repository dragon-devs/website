'use client';

import React, {useState} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import Image from 'next/image';
import {
	Target, Heart, Users, Zap, Shield, TrendingUp, Award,
	Lightbulb, Code, Rocket, Globe, CheckCircle2, ArrowRight,
	Sparkles, Clock, ThumbsUp, MessageSquare, Workflow,
	Brain, Palette, Database, Settings, Coffee, Star
} from 'lucide-react';
import {Footer} from "@/components/Footer";
import SpotlightCard from "@/components/SpotlightCard";
import MagnetButton from "@/components/custom/MagnetButton";
import {useRouter} from "next/navigation";
import {CTASection} from "@/components/CTASection";
import {Separator} from "@/components/ui/separator";
import CountUp from "@/components/CountUp";
import Badge from "@/components/hero/Badge";
import {HeroTitle} from "@/components/hero/HeroTitle";
import {GradientText} from "@/components/hero/GradientText";
import {SpotlightLogo} from "@/components/hero/SpotLightLog";

// Animated Section Container
const SectionContainer = ({children, className = ""}) => {
	return (
		<motion.div
			initial={{opacity: 0, y: 30}}
			whileInView={{opacity: 1, y: 0}}
			viewport={{once: true, margin: "-100px"}}
			transition={{duration: 0.6}}
			className={className}
		>

			{children}
		</motion.div>
	);
};

// Hero Section
const AboutHero = () => {
	const {scrollY} = useScroll();
	const y = useTransform(scrollY, [0, 300], [0, 100]);

	return (
		<section className="scale-90 relative min-h-[70vh] flex items-center justify-center overflow-hidden">
			{/* Gradient Orbs */}
			<div className="relative z-10 flex items-center justify-center min-h-screen px-6">
				<div className="max-w-6xl mx-auto text-center">
					<Badge icon={Sparkles}>
						About dragondevs
					</Badge>
					<HeroTitle
						mainText="Empowering Innovation"
						accentText="Through Technology"
					/>
					<GradientText variant="subtle" size="xl" animate animationDelay={0.6}>
						We're more than just developers. We're architects of digital transformation,
						building the future one innovative solution at a time.
					</GradientText>
				</div>
			</div>
			<motion.div
				style={{y}}
				className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl opacity-30"
			/>
		</section>
	);
};

// What is dragondevs Section
const WhatIsdragondevs = () => {
	const highlights = [
		{icon: Users, text: "Expert Team of Developers"},
		{icon: Globe, text: "Global Client Base"},
		{icon: Award, text: "Award-Winning Solutions"},
		{icon: Rocket, text: "Fast-Growing Startup"}
	];

	return (
		<section className="py-24 relative">
			<div className="max-w-7xl mx-auto md:px-6 px-4">
				<SectionContainer>
					<div className="text-center mb-16">
						<span className="text-primary font-semibold text-sm tracking-wider uppercase">Who We Are</span>
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
							What is dragondevs?
						</h2>
					</div>
				</SectionContainer>

				<div className="grid lg:grid-cols-2 gap-12 ">
					{/*<SectionContainer>*/}
					{/*  <div className="relative">*/}
					{/*    <div className="absolute opacity-30 -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20  blur-2xl"></div>*/}
					{/*    <div className="relative border border-border  overflow-hidden h-[400px] flex items-center justify-center">*/}
					{/*      <div className="text-center text-gray-500">*/}
					{/*        <Code size={64} className="mx-auto mb-4 opacity-50"/>*/}
					{/*        <p className="text-sm">Company Image / Team Photo</p>*/}
					{/*        <p className="text-xs mt-2">Replace with: /images/about/team-photo.jpg</p>*/}
					{/*      </div>*/}
					{/*    </div>*/}
					{/*  </div>*/}
					{/*</SectionContainer>*/}

					<SectionContainer>
						<div className="space-y-6">
							<p className="text-muted-foreground text-lg leading-relaxed">
								<span className="text-primary font-semibold">dragondevs</span> is a dynamic software development company
								founded with a singular vision: to transform innovative ideas into powerful digital realities. We're a
								team
								of passionate developers, designers, and strategists who believe technology should solve real problems
								and
								create tangible value.
							</p>

							<p className="text-muted-foreground text-lg leading-relaxed">
								Born from the fusion of technical expertise and entrepreneurial spirit, we operate at the intersection
								of
								agency work and product development. While we help businesses achieve their digital goals through custom
								software solutions, we're simultaneously building our own suite of innovative products that will shape
								the future of technology.
							</p>

							<p className="text-muted-foreground text-lg leading-relaxed">
								Our name, <span className="text-primary font-semibold">dragondevs</span>, symbolizes power, wisdom, and
								transformation qualities we bring to every project we undertake. Like a dragon, we're fierce in our
								commitment to excellence, protective of our clients' interests, and capable of breathing fire into ideas
								that might otherwise remain dormant.
							</p>
						</div>
					</SectionContainer>
					<div className="grid grid-cols-1 gap-4 ">
						{highlights.map((item, index) => (
							<motion.div
								key={index}
								initial={{opacity: 0, x: -20}}
								whileInView={{opacity: 1, x: 0}}
								viewport={{once: true}}
								transition={{delay: index * 0.1}}
								className="relative overflow-hidden flex items-center md:p-6 p-4  gap-4 border border-border hover:border-primary/50 duration-700 transition-all"
							>
								<item.icon size={80} className="absolute -right-4 opacity-10 -bottom-8  mx-auto mb-4"/>
								{/*<item.icon size={20} className="text-primary"/>*/}
								<span
									className="text-foreground/80 md:text-4xl text-2xl font-medium tracking-tight md:px-6 p-4 leading-none">{item.text}</span>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

// Mission Section
const MissionSection = () => {
	return (
		<section className="py-24 relative overflow-hidden">
			<div className="absolute inset-0"></div>

			<div className="max-w-7xl mx-auto md:px-6 px-4 relative z-10">


				<div className="grid lg:grid-cols-3 gap-12 ">
					<SectionContainer className="col-span-1">
						<div className=" mb-16">
							<span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Purpose</span>
							<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
								Our Mission
							</h2>
						</div>
					</SectionContainer>
					<SectionContainer className="col-span-2">
						<div className="space-y-6">
							<div className=" border border-border p-8 relative overflow-hidden">
								<div className="absolute -right-10 -bottom-10  opacity-10">
									<Target size={250} className="text-muted-foreground"/>
								</div>
								<h3 className="text-2xl font-bold text-foreground mb-4">
									Empowering Businesses Through Technology
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									Our mission is to democratize access to cutting-edge technology by delivering enterprise-grade
									software
									solutions that are accessible, scalable, and transformative. We believe every business, regardless of
									size, deserves the power to compete in the digital age.
								</p>
							</div>

							<div className=" border border-border p-8">
								<h4 className="text-xl font-bold text-foreground mb-4">We are committed to:</h4>
								<ul className="space-y-4">
									{[
										"Building software that solves real business problems, not just technical challenges",
										"Maintaining the highest standards of code quality, security, and performance",
										"Fostering long-term partnerships built on trust, transparency, and mutual success",
										"Staying at the forefront of technological innovation to deliver future-proof solutions",
										"Creating products that make a meaningful impact on how people work and live"
									].map((item, index) => (
										<motion.li
											key={index}
											initial={{opacity: 0, x: -20}}
											whileInView={{opacity: 1, x: 0}}
											viewport={{once: true}}
											transition={{delay: index * 0.1}}
											className="flex items-start gap-3"
										>
											<CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-1"/>
											<span className="text-foreground/80">{item}</span>
										</motion.li>
									))}
								</ul>
							</div>
						</div>
					</SectionContainer>

					{/*<SectionContainer>*/}
					{/*  <div className="relative">*/}
					{/*    <div className="absolute -inset-4 blur-2xl"></div>*/}
					{/*    <div className="relative border border-border overflow-hidden h-[500px] flex items-center justify-center">*/}
					{/*      <div className="text-center text-muted-foreground">*/}
					{/*        <Target size={64} className="mx-auto mb-4 opacity-50"/>*/}
					{/*        <p className="text-sm">Mission Visualization</p>*/}
					{/*        <p className="text-xs mt-2">Replace with: /images/about/mission.jpg</p>*/}
					{/*      </div>*/}
					{/*    </div>*/}
					{/*  </div>*/}
					{/*</SectionContainer>*/}
				</div>
			</div>
		</section>
	);
};

// Core Values Section
const CoreValuesSection = () => {
	const values = [
		{
			icon: Heart,
			title: "Passion",
			description: "We love what we do, and it shows in every line of code we write. Our enthusiasm for technology drives us to go above and beyond for our clients.",
			color: "from-red-500 to-pink-500"
		},
		{
			icon: Shield,
			title: "Integrity",
			description: "Honesty and transparency are the foundations of our relationships. We deliver on our promises and always put our clients' interests first.",
			color: "from-blue-500 to-cyan-500"
		},
		{
			icon: Lightbulb,
			title: "Innovation",
			description: "We embrace change and continuously explore new technologies. Our curiosity fuels our ability to deliver cutting-edge solutions.",
			color: "from-yellow-500 to-orange-500"
		},
		{
			icon: Users,
			title: "Collaboration",
			description: "Great things happen when brilliant minds work together. We foster a culture of teamwork, both internally and with our clients.",
			color: "from-purple-500 to-indigo-500"
		},
		{
			icon: Award,
			title: "Excellence",
			description: "Good enough is never good enough. We strive for perfection in every aspect of our work, from code quality to customer service.",
			color: "from-emerald-500 to-teal-500"
		},
		{
			icon: TrendingUp,
			title: "Growth",
			description: "We believe in continuous improvement. We invest in our team's development and stay updated with the latest industry trends.",
			color: "from-violet-500 to-purple-500"
		}
	];

	return (
		<section className="py-24  relative">
			<div className="max-w-7xl mx-auto md:px-6 px-4">
				<SectionContainer>
					<div className=" mb-16">
						<span className="text-primary font-semibold text-sm tracking-wider uppercase">What Drives Us</span>
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
							Our Core Values
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl ">
							These fundamental principles guide every decision we make and every solution we deliver.
							They're not just words on a page they're the DNA of dragondevs.
						</p>
					</div>
				</SectionContainer>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
					{values.map((value, index) => (
						<SpotlightCard key={index}>
							<motion.div
								key={index}
								initial={{opacity: 0, y: 30}}
								whileInView={{opacity: 1, y: 0}}
								viewport={{once: true}}
								transition={{delay: index * 0.1}}
								className="relative flex flex-col h-full overflow-hidden p-8"
							>
								<div className="absolute -right-10 -bottom-10  opacity-10">
									<value.icon size={250} className="text-muted-foreground"/>
								</div>
								<div className="flex gap-4 items-center mb-4">
									<div className="w-10 h-10  hover:border-primary/50 rounded-full flex items-center justify-center">
										<value.icon size={25} className={`text-muted-foreground`}/>
									</div>
									<h3
										className={`text-2xl font-bold bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>{value.title}</h3>
								</div>
								<p className="text-muted-foreground leading-relaxed ">{value.description}</p>
							</motion.div>
						</SpotlightCard>
					))}
				</div>
			</div>
		</section>
	);
};

// Vision Section
const VisionSection = () => {
	const milestones = [
		{year: "2024", title: "Foundation", desc: "dragondevs is born with a clear mission"},
		{year: "2025", title: "Growth", desc: "Expanding team and client portfolio"},
		{year: "2026", title: "Products", desc: "Launch of our first SaaS products"},
		{year: "2027+", title: "Innovation", desc: "Leading the future of software development"}
	];

	return (
		<section className="py-24 relative overflow-hidden">
			<div className="absolute inset-0"></div>

			<div className=" max-w-7xl mx-auto md:px-6 px-4 relative z-10">
				<div className="grid lg:grid-cols-3 gap-12">
					<SectionContainer className="col-span-1">
						<div className=" mb-16">
							<span className="text-primary font-semibold text-sm tracking-wider uppercase">Looking Ahead</span>
							<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
								Our Vision
							</h2>
						</div>
					</SectionContainer>
					{/*<SectionContainer>*/}
					{/*  <div className="relative">*/}
					{/*    <div className="absolute -inset-4 blur-2xl"></div>*/}
					{/*    <div className="relative  border border-border overflow-hidden h-[400px] flex items-center justify-center">*/}
					{/*      <div className="text-center text-muted-foreground">*/}
					{/*        <Rocket size={64} className="mx-auto mb-4 opacity-50"/>*/}
					{/*        <p className="text-sm">Vision Concept Image</p>*/}
					{/*        <p className="text-xs mt-2">Replace with: /images/about/vision.jpg</p>*/}
					{/*      </div>*/}
					{/*    </div>*/}
					{/*  </div>*/}
					{/*</SectionContainer>*/}

					<SectionContainer className="col-span-2">
						<div className="space-y-6">
							<div className="relative p-8 border border-border overflow-hidden">
								<div className="absolute -right-10 -bottom-10  opacity-10">
									<Rocket size={250} className="text-muted-foreground"/>
								</div>
								<h3 className="text-2xl font-bold text-foreground mb-4">
									Building the Future of Software
								</h3>
								<p className="text-muted-foreground leading-relaxed mb-4">
									Our vision is to become a leading force in the global software industry, recognized not just for the
									quality of our client work, but for the innovative products we create that solve universal challenges.
								</p>
								<p className="text-muted-foreground leading-relaxed">
									We envision a future where dragondevs is synonymous with innovation, reliability, and transformative
									technology. We're building a company that doesn't just follow trends we set them.
								</p>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div
									className=" border border-border p-6 text-center hover:border-primary/50 duration-700 transition-all">
									<div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
									<div className="text-muted-foreground text-sm">Products in Pipeline</div>
								</div>
								<div
									className=" border border-border  p-6 text-center hover:border-primary/50 duration-700 transition-all">
									<div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
									<div className="text-muted-foreground text-sm">Team Members (Target)</div>
								</div>
							</div>
						</div>
					</SectionContainer>
				</div>

				{/* Timeline */}
				{/*<SectionContainer>*/}
				{/*  <div className="bg-slate-900/50 border border-border  p-8 md:p-12">*/}
				{/*    <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Our Journey</h3>*/}
				{/*    <div className="grid md:grid-cols-4 gap-8">*/}
				{/*      {milestones.map((milestone, index) => (*/}
				{/*        <motion.div*/}
				{/*          key={index}*/}
				{/*          initial={{ opacity: 0, y: 20 }}*/}
				{/*          whileInView={{ opacity: 1, y: 0 }}*/}
				{/*          viewport={{ once: true }}*/}
				{/*          transition={{ delay: index * 0.1 }}*/}
				{/*          className="relative"*/}
				{/*        >*/}
				{/*          <div className="text-center">*/}
				{/*            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-foreground font-bold mb-4 mx-auto">*/}
				{/*              {index + 1}*/}
				{/*            </div>*/}
				{/*            <div className="text-blue-400 font-bold text-lg mb-2">{milestone.year}</div>*/}
				{/*            <div className="text-foreground font-semibold mb-2">{milestone.title}</div>*/}
				{/*            <div className="text-muted-foreground text-sm">{milestone.desc}</div>*/}
				{/*          </div>*/}
				{/*          {index < milestones.length - 1 && (*/}
				{/*            <div className="hidden md:block absolute top-6 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>*/}
				{/*          )}*/}
				{/*        </motion.div>*/}
				{/*      ))}*/}
				{/*    </div>*/}
				{/*  </div>*/}
				{/*</SectionContainer>*/}
			</div>
		</section>
	);
};


// Team Section
const TeamSection = () => {
	const stats = [
		{icon: Users, number: "2+", label: "Core Team"},
		{icon: Globe, number: "28+", label: "Projects Delivered"},
		{icon: Star, number: "4.9", label: "Client Rating"},
		{icon: Coffee, number: "1K+", label: "Cups of Tea"}
	];

	return (
		<section className="py-24 relative">
			<div className="max-w-7xl mx-auto md:px-6 px-4">
				<SectionContainer>
					<div className="flex flex-col gap-6 items-end mb-16">
						<span
							className="text-primary font-semibold text-sm tracking-wider uppercase">The People Behind dragondevs</span>
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
							Small Team, Big Vision
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl text-end">
							We're a lean, agile team focused on delivering quality over quantity.
							Every project gets our full attention and expertise.
						</p>
					</div>
				</SectionContainer>

				<div className="grid md:grid-cols-4 md:gap-6 gap-4 mb-16">
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{opacity: 0, scale: 0.9}}
							whileInView={{opacity: 1, scale: 1}}
							viewport={{once: true}}
							transition={{delay: index * 0.1}}
							className="border border-border p-6 text-center hover:border-primary/50 duration-700 transition-all"
						>
							<stat.icon size={32} className="text-primary mx-auto mb-4"/>
							<div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
							<div className="text-muted-foreground">{stat.label}</div>
						</motion.div>
					))}
				</div>

				<SectionContainer>
					<div className="border border-border p-12">
						<div className="text-center max-w-3xl mx-auto">
							<h3 className="text-2xl font-bold text-foreground mb-4">Quality Over Quantity</h3>
							<p className="text-muted-foreground leading-relaxed mb-6">
								Currently, we're a dedicated duo: a founder with vision and a skilled developer bringing ideas to life.
								We're actively expanding our team with a marketer and additional specialists who share our commitment
								to excellence. Being small means we're nimble, focused, and personally invested in every project we take
								on.
							</p>
							<p className="text-muted-foreground leading-relaxed mb-6">
								Our lean structure allows us to maintain direct communication with clients, iterate quickly,
								and deliver personalized solutions without the overhead of a large agency.
							</p>
							<div className="relative h-64 flex items-center justify-center border border-border bg-muted/20">
								<div className="text-center text-muted-foreground">
									<Users size={48} className="mx-auto mb-3 opacity-50"/>
									<p className="text-sm font-medium">Growing Together</p>
									<p className="text-xs mt-2 opacity-70">Team photo coming soon</p>
								</div>
							</div>
						</div>
					</div>
				</SectionContainer>
			</div>
		</section>
	);
};
// Why Choose Us Section
const WhyChooseUsSection = () => {
	const reasons = [
		{
			icon: Zap,
			title: "Lightning-Fast Delivery",
			description: "We pride ourselves on efficient project execution without compromising quality. Our agile methodology ensures rapid turnaround times."
		},
		{
			icon: ThumbsUp,
			title: "Client-Centric Approach",
			description: "Your success is our success. We work as an extension of your team, maintaining transparent communication throughout the project."
		},
		{
			icon: Award,
			title: "Proven Track Record",
			description: "With 28+ successfully delivered case-study and a 98% client satisfaction rate, our results speak for themselves."
		},
		{
			icon: Shield,
			title: "Enterprise-Grade Security",
			description: "We implement industry-leading security practices to protect your data and ensure compliance with international standards."
		},
		{
			icon: TrendingUp,
			title: "Scalable Solutions",
			description: "We build with growth in mind. Our solutions are architected to scale seamlessly as your business expands."
		},
		{
			icon: Clock,
			title: "24/7 Support",
			description: "Technical issues don't follow business hours. Our dedicated support team is available whenever you need us."
		}
	];

	return (
		<section className="py-24 overflow-hidden">


			<div className="max-w-7xl mx-auto md:px-6 px-4 relative z-10">
				<SectionContainer>
					<div className="text-center mb-16">
						<span className="text-primary font-semibold text-sm tracking-wider uppercase">Why dragondevs</span>
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
							Why Choose Us?
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							We're not just another software agency. Here's what sets us apart from the competition.
						</p>
					</div>
				</SectionContainer>

				<div className="grid md:grid-cols-2 lg:grid-cols-2 md:gap-8 gap-4">
					{reasons.map((reason, index) => (
						<SpotlightCard key={index}>
							<motion.div
								key={index}
								initial={{opacity: 0, y: 30}}
								whileInView={{opacity: 1, y: 0}}
								viewport={{once: true}}
								transition={{delay: index * 0.1}}
								className="relative flex flex-col h-full overflow-hidden p-8 group"
							>
								<div
									className="w-14 h-14 border border-border hover:border-primary/50 rounded-full flex items-center justify-center mb-6 ">
									<reason.icon size={28} className="text-primary"/>
								</div>
								<div className="absolute -right-10 -bottom-10  opacity-10">
									<reason.icon size={250} className="text-muted-foreground"/>
								</div>
								<h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
								<p className="text-muted-foreground leading-relaxed">{reason.description}</p>
							</motion.div>
						</SpotlightCard>
					))}
				</div>
			</div>
		</section>
	);
};


const AboutPage = () => {
	return (
		<div className="min-h-screen">
			<AboutHero/>
			<Separator/>
			<WhatIsdragondevs/>
			<Separator/>
			<MissionSection/>
			<Separator/>
			<VisionSection/>
			<Separator/>
			<CoreValuesSection/>
			<Separator/>
			<WhyChooseUsSection/>
			<Separator/>
			<TeamSection/>
			<Separator/>
			<CTASection/>
		</div>
	);
};

export default AboutPage;