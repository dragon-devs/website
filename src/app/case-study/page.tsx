'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
	Code, Rocket, Layers, Smartphone, Globe, Database,
	Zap, Shield, TrendingUp, CheckCircle2, ArrowRight,
	Sparkles, Users, Settings, Palette, Search, BarChart,
	Lock, Cloud, Cpu, Package, MessagesSquare, Workflow,
	Brain, Target, Clock, Award, ThumbsUp, Star,
	FileCode, Layout, ShoppingCart, Boxes, ExternalLink,
	Github, Heart, Building2, Lightbulb,
	LineChart, Calendar, Tag, ArrowUpRight
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import SpotlightCard from '@/components/SpotlightCard';
import Pill from "@/components/Pill";
import {CTASection} from "@/components/CTASection";
import {FaGithub} from "react-icons/fa6";
import Badge from "@/components/hero/Badge";
import {HeroTitle} from "@/components/hero/HeroTitle";
import {GradientText} from "@/components/hero/GradientText";

// Animated Section Container
const SectionContainer = ({ children, className = "" }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};


// Hero Section
const WorkHero = () => {
	return (
		<section className="scale-90 relative min-h-[70vh] flex items-center justify-center overflow-hidden">
			<div className="relative z-10 flex items-center justify-center min-h-screen px-6">
				<div className="max-w-6xl mx-auto text-center">
						<Badge icon={Sparkles}>
							Our Work
						</Badge>
						<HeroTitle
							mainText="Building The Future"
							accentText="One Project at a Time"
						/>
						<GradientText variant="subtle" size="xl" animate animationDelay={0.6}>
							From enterprise solutions to open source contributions, explore the work
							we've delivered for clients and the products we're building for the world.
						</GradientText>
				</div>
			</div>
			<motion.div
				className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl opacity-30"
			/>
		</section>
	);
};

// Stats Overview Section
const StatsOverviewSection = () => {
	const stats = [
		{ number: "28+", label: "Projects Completed", icon: Boxes },
		{ number: "15+", label: "Happy Clients", icon: Users },
		{ number: "5+", label: "Open Source Projects", icon: Heart },
		{ number: "2", label: "Products in Development", icon: Rocket }
	];

	return (
		<section className="py-24 relative overflow-hidden">
			<div className="max-w-7xl mx-auto md:px-6 px-4">
				<div className="grid md:grid-cols-4 gap-6">
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="border border-border p-8 text-center hover:border-primary/50 duration-700 transition-all relative overflow-hidden"
						>
							<stat.icon size={150} className="text-muted-foreground absolute -right-4 -bottom-4 opacity-10" />
							<stat.icon size={40} className="text-primary mx-auto mb-4" />
							<div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.number}</div>
							<div className="text-muted-foreground text-sm">{stat.label}</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

// Category Tabs
const CategoryTabs = ({ activeTab, setActiveTab }) => {
	const tabs = [
		{ id: 'all', label: 'All Work', icon: Boxes },
		{ id: 'client', label: 'Client Projects', icon: Building2 },
		{ id: 'products', label: 'Our Products', icon: Rocket },
		{ id: 'opensource', label: 'Open Source', icon: Heart }
	];

	return (
		<div className="flex flex-wrap justify-center gap-4 mb-16">
			{tabs.map((tab) => (
				<button
					key={tab.id}
					onClick={() => setActiveTab(tab.id)}
					className={`px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-2 ${
						activeTab === tab.id
							? 'bg-primary text-foreground border-primary'
							: 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
					}`}
				>
					<tab.icon size={18} />
					<span className="font-medium">{tab.label}</span>
				</button>
			))}
		</div>
	);
};

// Project Card Component
const ProjectCard = ({ project, index }) => {
	return (
		<SpotlightCard>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: index * 0.1 }}
				className="relative flex flex-col h-full overflow-hidden group"
			>
				<div className="relative h-64 bg-gradient-to-br from-primary/20 via-purple-500/10 to-emerald-500/10 overflow-hidden">
					<div className="absolute inset-0 flex items-center justify-center">
						<project.icon size={80} className="text-primary/30" />
					</div>
					<div className="absolute top-4 left-4">
						<Pill label={project.category} icon={project.statusIcon}/>
					</div>
					{project.status && (
						<div className="absolute top-4 right-4">
							<Pill label={project.status}  icon={project.statusIcon}/>
						</div>
					)}
				</div>

				<div className="p-6 flex flex-col flex-grow">
					<h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
						{project.title}
					</h3>
					<p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
						{project.description}
					</p>

					<div className="flex flex-wrap gap-2 mb-4">
						{project.technologies.map((tech, idx) => (
							<Pill key={idx} label={tech} />
						))}
					</div>

					<div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
						{project.year && (
							<span className="flex items-center gap-1">
                <Calendar size={14} />
								{project.year}
              </span>
						)}
						{project.metrics && (
							<span className="flex items-center gap-1">
                <TrendingUp size={14} />
								{project.metrics}
              </span>
						)}
					</div>

					<div className="flex gap-3 mt-auto">
						{project.liveUrl && (
							<button className="flex-1 px-4 py-2 bg-primary text-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm font-medium">
								View Live <ExternalLink size={14} />
							</button>
						)}
						{project.githubUrl && (
							<button className="flex-1 px-4 py-2 border border-border rounded-lg hover:border-primary/50 transition-all flex items-center justify-center gap-2 text-sm font-medium">
								GitHub <FaGithub size={14} />
							</button>
						)}
						{project.caseStudy && (
							<button className="flex-1 px-4 py-2 border border-border rounded-lg hover:border-primary/50 transition-all flex items-center justify-center gap-2 text-sm font-medium">
								Case Study <ArrowRight size={14} />
							</button>
						)}
					</div>
				</div>
			</motion.div>
		</SpotlightCard>
	);
};

// Projects Section
const ProjectsSection = () => {
	const [activeTab, setActiveTab] = useState('all');

	const projects = [
		{
			id: 1,
			type: 'client',
			category: 'E-commerce',
			title: 'ShopFlow Platform',
			description: 'A complete e-commerce solution for a retail chain with 10K+ products, real-time inventory management, and seamless payment integration. Reduced checkout time by 40%.',
			technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
			icon: ShoppingCart,
			year: '2024',
			metrics: '40% faster checkout',
			status: 'Live',
			statusIcon: CheckCircle2,
			liveUrl: true,
			caseStudy: true
		},
		{
			id: 2,
			type: 'client',
			category: 'Healthcare',
			title: 'MediTrack CRM',
			description: 'Custom patient management system for a healthcare provider. Features appointment scheduling, medical records, billing integration, and HIPAA-compliant data storage.',
			technologies: ['React', 'Python', 'MongoDB', 'AWS'],
			icon: Heart,
			year: '2024',
			metrics: '500+ daily users',
			status: 'Live',
			statusIcon: CheckCircle2,
			caseStudy: true
		},
		{
			id: 3,
			type: 'client',
			category: 'SaaS',
			title: 'ProjectHub Pro',
			description: 'Project management platform built for remote teams. Includes task tracking, time management, collaboration tools, and advanced analytics dashboard.',
			technologies: ['Vue.js', 'Node.js', 'Redis', 'Docker'],
			icon: Workflow,
			year: '2023',
			metrics: '1K+ case-study managed',
			status: 'Live',
			statusIcon: CheckCircle2,
			liveUrl: true
		},
		{
			id: 4,
			type: 'client',
			category: 'Education',
			title: 'LearnSpace LMS',
			description: 'Learning management system for an online education platform. Features course creation, video streaming, quizzes, certificates, and student progress tracking.',
			technologies: ['Next.js', 'Firebase', 'Tailwind'],
			icon: Brain,
			year: '2023',
			metrics: '5K+ students',
			status: 'Live',
			statusIcon: CheckCircle2,
			liveUrl: true,
			caseStudy: true
		},
		{
			id: 5,
			type: 'products',
			category: 'SaaS Product',
			title: 'CodeSnap AI',
			description: 'AI-powered code snippet manager that helps developers organize, search, and share code snippets across teams. Smart tagging and context-aware search.',
			technologies: ['Next.js', 'OpenAI', 'PostgreSQL', 'Vercel'],
			icon: Code,
			year: '2024',
			status: 'Beta',
			statusIcon: Zap,
			liveUrl: true,
			githubUrl: true
		},
		{
			id: 6,
			type: 'products',
			category: 'Developer Tool',
			title: 'APIHub',
			description: 'Comprehensive API testing and documentation platform. Test endpoints, generate docs automatically, monitor API health, and collaborate with your team.',
			technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
			icon: Database,
			year: '2024',
			status: 'In Development',
			statusIcon: Rocket,
			githubUrl: true
		},
		{
			id: 7,
			type: 'products',
			category: 'Productivity',
			title: 'FocusFlow',
			description: 'Minimalist productivity app combining Pomodoro technique, task management, and habit tracking. Beautiful UI with deep focus mode and analytics.',
			technologies: ['React Native', 'Firebase', 'TypeScript'],
			icon: Target,
			year: '2025',
			status: 'Planning',
			statusIcon: Lightbulb,
			githubUrl: true
		},
		{
			id: 8,
			type: 'opensource',
			category: 'Open Source',
			title: 'react-spotlight-cards',
			description: 'Beautiful React component library for creating interactive spotlight card effects. Lightweight, customizable, and fully typed with TypeScript.',
			technologies: ['React', 'TypeScript', 'Tailwind'],
			icon: Palette,
			year: '2024',
			status: 'Maintained',
			statusIcon: Heart,
			githubUrl: true,
			liveUrl: true
		},
		{
			id: 9,
			type: 'opensource',
			category: 'Open Source',
			title: 'nextjs-starter-kit',
			description: 'Production-ready Next.js starter template with authentication, database setup, API routes, testing, and deployment configs. Save weeks of setup time.',
			technologies: ['Next.js', 'Prisma', 'NextAuth', 'Jest'],
			icon: Rocket,
			year: '2024',
			status: 'Active',
			statusIcon: Heart,
			githubUrl: true
		},
		{
			id: 10,
			type: 'opensource',
			category: 'Open Source',
			title: 'api-rate-limiter',
			description: 'Flexible rate limiting middleware for Node.js APIs. Supports multiple storage backends, custom rules, and detailed analytics. Used by 500+ developers.',
			technologies: ['Node.js', 'Redis', 'TypeScript'],
			icon: Shield,
			year: '2023',
			status: 'Maintained',
			statusIcon: Heart,
			githubUrl: true
		},
		{
			id: 11,
			type: 'opensource',
			category: 'Open Source',
			title: 'webhook-gateway',
			description: 'Open source webhook management system. Receive, validate, retry, and monitor webhooks with a simple dashboard. Self-hosted and privacy-focused.',
			technologies: ['Go', 'PostgreSQL', 'React'],
			icon: Zap,
			year: '2024',
			status: 'Active',
			statusIcon: Heart,
			githubUrl: true,
			liveUrl: true
		},
		{
			id: 12,
			type: 'opensource',
			category: 'Open Source',
			title: 'cli-toolkit',
			description: 'Modern CLI framework for Node.js with beautiful prompts, progress bars, and colors. Makes building command-line tools enjoyable.',
			technologies: ['Node.js', 'TypeScript'],
			icon: Code,
			year: '2023',
			status: 'Maintained',
			statusIcon: Heart,
			githubUrl: true
		}
	];

	const filteredProjects = activeTab === 'all'
		? projects
		: projects.filter(p => p.type === activeTab);

	return (
		<section className="py-24 relative">
			<div className="max-w-7xl mx-auto md:px-6 px-4">
				<SectionContainer>
					<div className="text-center mb-16">
						<span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Portfolio</span>
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
							Projects We're Proud Of
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
							Every project tells a story of challenges overcome, solutions delivered,
							and impact created. Here's a glimpse of what we've built.
						</p>

						<CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
					</div>
				</SectionContainer>

				<div className="grid md:grid-cols-2 md:gap-8 gap-4">
					{filteredProjects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

// Testimonials Section
const TestimonialsSection = () => {
	const testimonials = [
		{
			quote: "dragondevs transformed our entire business workflow. The custom CRM they built has saved us countless hours and improved our customer satisfaction dramatically.",
			author: "Sarah Johnson",
			role: "CEO, HealthFirst Medical",
			company: "Healthcare",
			rating: 5
		},
		{
			quote: "Working with dragondevs was a breath of fresh air. They understood our vision immediately and delivered beyond expectations. The e-commerce platform they built handles our peak traffic with ease.",
			author: "Michael Chen",
			role: "Founder, StyleHub Retail",
			company: "E-commerce",
			rating: 5
		},
		{
			quote: "I've worked with many development teams, but dragondevs stands out. Their communication, technical expertise, and commitment to quality are unmatched.",
			author: "Emily Rodriguez",
			role: "CTO, EduLearn Platform",
			company: "Education Tech",
			rating: 5
		}
	];

	return (
		<section className="py-24 relative overflow-hidden">
			<div className="max-w-7xl mx-auto md:px-6 px-4">
				<SectionContainer>
					<div className="text-center mb-16">
						<span className="text-primary font-semibold text-sm tracking-wider uppercase">Client Feedback</span>
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
							What Our Clients Say
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							Don't just take our word for it. Here's what our clients have to say about working with us.
						</p>
					</div>
				</SectionContainer>

				<div className="grid md:grid-cols-3 md:gap-8 gap-4">
					{testimonials.map((testimonial, index) => (
						<SpotlightCard key={index}>
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="relative flex flex-col h-full overflow-hidden p-8"
							>
								<div className="flex gap-1 mb-4">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
									))}
								</div>
								<p className="text-muted-foreground leading-relaxed mb-6 flex-grow italic">
									"{testimonial.quote}"
								</p>
								<div className="border-t border-border pt-4">
									<p className="font-bold text-foreground">{testimonial.author}</p>
									<p className="text-sm text-muted-foreground mb-2">{testimonial.role}</p>
									<Pill label={testimonial.company}  />
								</div>
							</motion.div>
						</SpotlightCard>
					))}
				</div>
			</div>
		</section>
	);
};

// Impact Section
const ImpactSection = () => {
	const impacts = [
		{
			icon: Users,
			metric: "50K+",
			label: "End Users Served",
			description: "Our solutions reach thousands of users daily"
		},
		{
			icon: TrendingUp,
			metric: "85%",
			label: "Average Efficiency Gain",
			description: "Clients report significant productivity improvements"
		},
		{
			icon: Clock,
			metric: "99.9%",
			label: "Uptime Average",
			description: "Reliable systems that your business can count on"
		},
		{
			icon: Heart,
			metric: "2K+",
			label: "GitHub Stars",
			description: "Community support for our open source work"
		}
	];

	return (
		<section className="py-24 relative">
			<div className="max-w-7xl mx-auto md:px-6 px-4">
				<SectionContainer>
					<div className="text-center mb-16">
						<span className="text-primary font-semibold text-sm tracking-wider uppercase">Real Impact</span>
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
							The Numbers Behind Our Work
						</h2>
					</div>
				</SectionContainer>

				<div className="grid md:grid-cols-4 gap-6">
					{impacts.map((impact, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="border border-border p-6 text-center hover:border-primary/50 duration-700 transition-all"
						>
							<impact.icon size={40} className="text-primary mx-auto mb-4" />
							<div className="text-3xl font-bold text-foreground mb-2">{impact.metric}</div>
							<div className="text-sm font-semibold text-foreground mb-2">{impact.label}</div>
							<div className="text-xs text-muted-foreground">{impact.description}</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

// Main Work Page Component
const WorkPage = () => {
	return (
		<div className="min-h-screen">
			<WorkHero />
			<Separator />
			<StatsOverviewSection />
			<Separator />
			<ProjectsSection />
			<Separator />
			<TestimonialsSection />
			<Separator />
			<ImpactSection />
			<Separator />
			<CTASection />
		</div>
	);
};

export default WorkPage;