'use client';

import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {
	Code, Rocket, Layers, Smartphone, Globe, Database,
	Zap, Shield, TrendingUp, CheckCircle2, ArrowRight,
	Sparkles, Users, Settings, Palette, Search, BarChart,
	Lock, Cloud, Cpu, Package, MessagesSquare, Workflow,
	Brain, Target, Clock, Award, ThumbsUp, Star,
	FileCode, Layout, ShoppingCart, Boxes
} from 'lucide-react';
import {Separator} from "@/components/ui/separator";
import SpotlightCard from "@/components/SpotlightCard";
import {CTASection} from "@/components/CTASection";
import Pill from "@/components/Pill";
import Badge from "@/components/hero/Badge";
import {HeroTitle} from "@/components/hero/HeroTitle";
import {GradientText} from "@/components/hero/GradientText";

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
const ServicesHero = () => {
	return (
		<section className="scale-90 relative min-h-[70vh] flex items-center justify-center overflow-hidden">
			<div className="relative z-10 flex items-center justify-center min-h-screen px-6">
				<div className="max-w-6xl mx-auto text-center">

					<Badge icon={Sparkles}>
						Our Services
					</Badge>
					<HeroTitle
						mainText="Transforming Ideas"
						accentText="Into Digital Reality"
					/>
					<GradientText variant="subtle" size="xl" animate animationDelay={0.6}>
						From concept to deployment, we deliver custom software solutions that drive growth,
						streamline operations, and give you a competitive edge in the digital landscape.
					</GradientText>
				</div>
			</div>
			<motion.div
				className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl opacity-30"
			/>
		</section>
	);
};

// Core Services Section
const CoreServicesSection = () => {
	const services = [
		{
			icon: Code,
			title: "Custom Software Development",
			description: "Tailored software solutions built from the ground up to meet your unique business needs. We architect, develop, and deploy applications that scale with your ambitions.",
			features: [
				"Full-stack web applications",
				"Enterprise software solutions",
				"Legacy system modernization",
				"API development & integration"
			],
			color: "from-blue-500 to-cyan-500"
		},
		{
			icon: Rocket,
			title: "MVP Development",
			description: "Validate your idea quickly with a Minimum Viable Product. We help startups and entrepreneurs bring their concepts to life fast, without breaking the bank.",
			features: [
				"Rapid prototyping",
				"Market validation tools",
				"User feedback integration",
				"Iterative development"
			],
			color: "from-purple-500 to-pink-500"
		},
		{
			icon: Layers,
			title: "Management Systems",
			description: "Streamline your operations with custom management systems designed for your workflow. From CRM to inventory management, we build tools that work the way you do.",
			features: [
				"CRM & ERP systems",
				"Inventory management",
				"Project management tools",
				"Business intelligence dashboards"
			],
			color: "from-emerald-500 to-teal-500"
		},
		{
			icon: Globe,
			title: "Custom Website Development",
			description: "More than just a website we create digital experiences that engage visitors and convert them into customers. Fast, beautiful, and built to perform.",
			features: [
				"Responsive web design",
				"E-commerce platforms",
				"Content management systems",
				"Progressive web apps"
			],
			color: "from-orange-500 to-red-500"
		},
		{
			icon: Smartphone,
			title: "Mobile App Development",
			description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android. Your business, in your customers' pockets.",
			features: [
				"iOS & Android apps",
				"Cross-platform solutions",
				"Mobile-first design",
				"App store optimization"
			],
			color: "from-violet-500 to-purple-500"
		},
		{
			icon: Database,
			title: "Database Design & Optimization",
			description: "Robust database architecture that ensures your data is secure, accessible, and performing at peak efficiency. We make your data work harder for you.",
			features: [
				"Database architecture",
				"Performance optimization",
				"Data migration services",
				"Backup & recovery solutions"
			],
			color: "from-yellow-500 to-orange-500"
		}
	];

	return (
		<section className="py-24 relative">
			<div className="max-w-7xl mx-auto md:px-6 px-4">
				<SectionContainer>
					<div className="text-center mb-16">
						<span className="text-primary font-semibold text-sm tracking-wider uppercase">What We Offer</span>
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
							Our Core Services
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							Comprehensive software development services designed to bring your vision to life
							and keep your business running at peak performance.
						</p>
					</div>
				</SectionContainer>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
					{services.map((service, index) => (
						<SpotlightCard key={index}>
							<motion.div
								initial={{opacity: 0, y: 30}}
								whileInView={{opacity: 1, y: 0}}
								viewport={{once: true}}
								transition={{delay: index * 0.1}}
								className="relative flex flex-col h-full overflow-hidden p-8"
							>
								<div className="absolute -right-10 -bottom-10 opacity-10">
									<service.icon size={250} className="text-muted-foreground"/>
								</div>
								<div className="flex gap-4 items-center mb-4">
									<div className="w-12 h-12 rounded-full flex items-center justify-center border border-border">
										<service.icon size={24} className="text-primary"/>
									</div>
								</div>
								<h3
									className={`text-2xl font-bold mb-3 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
									{service.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed mb-6">
									{service.description}
								</p>
								<ul className="space-y-2 mt-auto">
									{service.features.map((feature, idx) => (
										<li key={idx} className="flex items-start gap-2 text-sm">
											<CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5"/>
											<span className="text-foreground/70">{feature}</span>
										</li>
									))}
								</ul>
							</motion.div>
						</SpotlightCard>
					))}
				</div>
			</div>
		</section>
	);
};

// Specialized Services Section
const SpecializedServicesSection = () => {
	const specialServices = [
		{
			icon: Search,
			title: "SEO & Performance Optimization",
			description: "Get found online and load lightning-fast. We optimize your digital presence for search engines and user experience."
		},
		{
			icon: Cloud,
			title: "Cloud Solutions & DevOps",
			description: "Modern cloud infrastructure that scales automatically. We handle deployment, monitoring, and maintenance so you can focus on growth."
		},
		{
			icon: Lock,
			title: "Security Audits & Implementation",
			description: "Protect your business with enterprise-grade security. From vulnerability assessments to GDPR compliance, we've got you covered."
		},
		{
			icon: MessagesSquare,
			title: "Technical Consulting",
			description: "Not sure where to start? Our experts provide strategic guidance on technology choices, architecture, and roadmap planning."
		},
		{
			icon: Workflow,
			title: "Process Automation",
			description: "Eliminate repetitive tasks and human error. We automate your workflows so your team can focus on what matters most."
		},
		{
			icon: BarChart,
			title: "Analytics & Reporting",
			description: "Make data-driven decisions with custom dashboards and analytics tools that give you real-time insights into your business."
		}
	];

	return (
		<section className="py-24 relative overflow-hidden">
			<div className="max-w-7xl mx-auto md:px-6 px-4 relative z-10">
				<SectionContainer>
					<div className="text-center mb-16">
						<span className="text-primary font-semibold text-sm tracking-wider uppercase">Extended Capabilities</span>
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
							Specialized Services
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							Beyond development, we offer specialized services to optimize, secure,
							and scale your digital infrastructure.
						</p>
					</div>
				</SectionContainer>

				<div className="grid md:grid-cols-2 md:gap-6 gap-4">
					{specialServices.map((service, index) => (
						<SpotlightCard key={index}>
							<motion.div
								initial={{opacity: 0, y: 30}}
								whileInView={{opacity: 1, y: 0}}
								viewport={{once: true}}
								transition={{delay: index * 0.1}}
								className="relative flex flex-col h-full overflow-hidden p-6 group"
							>
								<div className="absolute -right-10 -bottom-10 opacity-10">
									<service.icon size={200} className="text-muted-foreground"/>
								</div>
								<div className="w-12 h-12 border border-border rounded-full flex items-center justify-center mb-4">
									<service.icon size={24} className="text-primary"/>
								</div>
								<h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
								<p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
							</motion.div>
						</SpotlightCard>
					))}
				</div>
			</div>
		</section>
	);
};

// Process Section
const ProcessSection = () => {
	const steps = [
		{
			number: "01",
			title: "Discovery & Planning",
			description: "We start by understanding your goals, challenges, and vision. Through detailed discussions, we map out requirements and create a strategic roadmap.",
			icon: Target
		},
		{
			number: "02",
			title: "Design & Prototyping",
			description: "Our team creates wireframes and prototypes to visualize the solution. You'll see and interact with your product before a single line of code is written.",
			icon: Palette
		},
		{
			number: "03",
			title: "Development & Testing",
			description: "Using agile methodology, we build your solution iteratively. Regular updates keep you in the loop, and rigorous testing ensures quality at every stage.",
			icon: Code
		},
		{
			number: "04",
			title: "Deployment & Support",
			description: "We handle the launch and provide ongoing support. From training your team to monitoring performance, we ensure your success doesn't end at deployment.",
			icon: Rocket
		}
	];

	return (
		<section className="py-24 relative">
			<div className="max-w-7xl mx-auto md:px-6 px-4">
				<SectionContainer>
					<div className="text-center mb-16">
						<span className="text-primary font-semibold text-sm tracking-wider uppercase">How We Work</span>
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
							Our Development Process
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							A transparent, collaborative approach that keeps you informed and involved
							every step of the way.
						</p>
					</div>
				</SectionContainer>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
					{steps.map((step, index) => (
						<motion.div
							key={index}
							initial={{opacity: 0, y: 30}}
							whileInView={{opacity: 1, y: 0}}
							viewport={{once: true}}
							transition={{delay: index * 0.1}}
							className="relative overflow-hidden"
						>
							<div className="border border-border p-6 h-full hover:border-primary/50 duration-700 transition-all">
								<div
									className="absolute leading-none -bottom-8 -z-10 -right-4 text-[12rem] font-black text-primary/10">{step.number}</div>
								<step.icon size={32} className="text-primary mb-4"/>
								<h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
								<p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
							</div>
							{index < steps.length - 1 ? (
								<div className="hidden lg:block absolute top-0 right-0 z-10">
									<ArrowRight className="opacity-10 text-muted-foreground" size={70}/>
								</div>
							) : <div className="hidden lg:block absolute top-0 right-0 z-10">
								<Target className="opacity-10 text-muted-foreground" size={70}/>
							</div>}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

// Technology Stack Section
const TechnologyStackSection = () => {
	const techCategories = [
		{
			category: "Frontend",
			icon: Layout,
			technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"]
		},
		{
			category: "Backend",
			icon: Database,
			technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"]
		},
		{
			category: "Mobile",
			icon: Smartphone,
			technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
		},
		{
			category: "Cloud & DevOps",
			icon: Cloud,
			technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"]
		}
	];

	return (
		<section className="py-24 relative overflow-hidden">
			<div className="grid md:grid-cols-2 max-w-7xl mx-auto md:px-6 px-4">
				<SectionContainer>
					<div className=" mb-16">
						<span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Tools</span>
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
							Technology Stack
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl ">
							We leverage cutting-edge technologies and proven frameworks to build
							robust, scalable solutions that stand the test of time.
						</p>
					</div>
				</SectionContainer>

				<div className="grid  md:gap-6 gap-4">
					{techCategories.map((category, index) => (
						<motion.div
							key={index}
							initial={{opacity: 0, y: 30}}
							whileInView={{opacity: 1, y: 0}}
							viewport={{once: true}}
							transition={{delay: index * 0.1}}
							className="relative border border-border p-6 hover:border-primary/50 duration-700 transition-all overflow-hidden"
						>
							<category.icon size={100} className="absolute right-0 text-muted-foreground opacity-10 mb-4"/>
							<h3 className="text-2xl tracking-tight font-bold text-foreground mb-4">{category.category}</h3>
							<div className="flex flex-wrap gap-2">
								{category.technologies.map((tech, idx) => (
									<Pill key={idx} label={tech}/>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

// Why Choose Our Services Section
const WhyChooseSection = () => {
	const benefits = [
		{
			icon: Clock,
			title: "Fast Turnaround",
			description: "We respect your timeline. Our agile process ensures rapid delivery without sacrificing quality."
		},
		{
			icon: Award,
			title: "Quality Guaranteed",
			description: "Every line of code is crafted with precision. We don't just meet standards we set them."
		},
		{
			icon: ThumbsUp,
			title: "Transparent Communication",
			description: "No surprises. You'll always know what's happening, what's next, and why it matters."
		},
		{
			icon: Users,
			title: "Dedicated Support",
			description: "Our relationship doesn't end at launch. We're hero for updates, maintenance, and growth."
		},
		{
			icon: TrendingUp,
			title: "Scalable Solutions",
			description: "Built for today, ready for tomorrow. Our solutions grow as your business grows."
		},
		{
			icon: Shield,
			title: "Security First",
			description: "Your data is sacred. We implement best practices to keep your systems secure and compliant."
		}
	];

	return (
		<section className="py-24 relative">
			<div className="max-w-7xl mx-auto md:px-6 px-4">
				<SectionContainer>
					<div className="text-center mb-16">
						<span
							className="text-primary font-semibold text-sm tracking-wider uppercase">The dragondevs Advantage</span>
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
							Why Work With Us?
						</h2>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							We're not just service providers we're your partners in digital transformation.
							Here's what makes us different.
						</p>
					</div>
				</SectionContainer>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
					{benefits.map((benefit, index) => (
						<SpotlightCard key={index}>
							<motion.div
								initial={{opacity: 0, y: 30}}
								whileInView={{opacity: 1, y: 0}}
								viewport={{once: true}}
								transition={{delay: index * 0.1}}
								className="relative flex flex-col h-full overflow-hidden p-8"
							>
								<div className="absolute -right-10 -bottom-10 opacity-10">
									<benefit.icon size={200} className="text-muted-foreground"/>
								</div>
								<div className="w-14 h-14 border border-border rounded-full flex items-center justify-center mb-6">
									<benefit.icon size={28} className="text-primary"/>
								</div>
								<h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
								<p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
							</motion.div>
						</SpotlightCard>
					))}
				</div>
			</div>
		</section>
	);
};

// Stats Section
const StatsSection = () => {
	const stats = [
		{number: "28+", label: "Projects Delivered", icon: Boxes},
		{number: "98%", label: "Client Satisfaction", icon: Star},
		{number: "24/7", label: "Support Available", icon: Clock},
		{number: "10+", label: "Technologies Mastered", icon: Cpu}
	];

	return (
		<section className="py-24 relative overflow-hidden">
			<div className="max-w-7xl mx-auto md:px-6 px-4">
				<div className="grid md:grid-cols-4 gap-6">
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{opacity: 0, scale: 0.9}}
							whileInView={{opacity: 1, scale: 1}}
							viewport={{once: true}}
							transition={{delay: index * 0.1}}
							className="border border-border p-8 text-center hover:border-primary/50 duration-700 transition-all"
						>
							<stat.icon size={40} className="text-primary mx-auto mb-4"/>
							<div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.number}</div>
							<div className="text-muted-foreground text-sm">{stat.label}</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

// Main Services Page Component
const ServicesPage = () => {
	return (
		<div className="min-h-screen">
			<ServicesHero/>
			<Separator/>
			<CoreServicesSection/>
			<Separator/>
			<SpecializedServicesSection/>
			<Separator/>
			<ProcessSection/>
			<Separator/>
			<TechnologyStackSection/>
			<Separator/>
			<WhyChooseSection/>
			<Separator/>
			<StatsSection/>
			<Separator/>
			<CTASection/>
		</div>
	);
};

export default ServicesPage;