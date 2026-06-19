'use client';

import React from 'react';
import {
	ArrowRight,
	Cloud,
	Code,
	Database,
	Globe,
	Layers,
	Palette,
	Rocket,
	Smartphone,
	Sparkles,
	Target
} from 'lucide-react';
import {Separator} from "@/components/ui/separator";
import SpotlightCard from "@/components/SpotlightCard";
import {CTASection} from "@/components/CTASection";
import Pill from "@/components/Pill";
import Badge from "@/components/hero/Badge";
import {HeroTitle} from "@/components/hero/HeroTitle";
import {GradientText} from "@/components/hero/GradientText";
import {Reveal, StaggerGroup, StaggerItem} from "@/components/motion";

const ServicesHero = () => (
	<section className="scale-90 relative min-h-[60vh] flex items-center justify-center overflow-hidden">
		<div className="relative z-10 flex items-center justify-center min-h-[60vh] px-6">
			<div className="max-w-4xl mx-auto text-center">
				<Badge icon={Sparkles}>What we do</Badge>
				<HeroTitle mainText="From idea to" accentText="deployment"/>
				<GradientText variant="subtle" size="xl" animate animationDelay={0.6}>
					Design, build and ship web apps and custom software. We work end to end —
					and we keep maintaining what we launch.
				</GradientText>
			</div>
		</div>
	</section>
);

const services = [
	{
		icon: Globe,
		title: "Web apps & websites",
		description: "Responsive, fast, SEO-friendly sites and web apps built with Next.js, React and Tailwind.",
		features: ["Web applications", "Marketing & landing sites", "E-commerce", "Content-managed sites"],
		color: "from-blue-500 to-cyan-500"
	},
	{
		icon: Code,
		title: "Custom software",
		description: "Software built around your workflow rather than forcing you into someone else's.",
		features: ["APIs & integrations", "Database design", "Internal tools", "Automation"],
		color: "from-violet-500 to-purple-500"
	},
	{
		icon: Rocket,
		title: "MVP development",
		description: "Get a real, usable version of your idea in front of users quickly — then iterate.",
		features: ["Rapid prototyping", "Proof of concept", "Scalable foundation", "Fast iteration"],
		color: "from-orange-500 to-red-500"
	},
	{
		icon: Layers,
		title: "Management systems",
		description: "Dashboards, CMS and admin systems that make day-to-day operations easier.",
		features: ["Admin dashboards", "Custom CMS", "Inventory & ops tools", "Reporting"],
		color: "from-emerald-500 to-teal-500"
	},
	{
		icon: Smartphone,
		title: "Cross-platform apps",
		description: "Apps that work where your users are, from a single, maintainable codebase.",
		features: ["Android", "Offline-first", "Web + mobile", "Local sync"],
		color: "from-pink-500 to-rose-500"
	},
	{
		icon: Cloud,
		title: "Deploy & maintain",
		description: "We don't disappear at launch. Deployment, monitoring and ongoing improvements.",
		features: ["Deployment & CI", "Performance", "Bug fixes & updates", "Long-term support"],
		color: "from-yellow-500 to-orange-500"
	}
];

const CoreServices = () => (
	<section className="py-24 relative">
		<div className="max-w-7xl mx-auto md:px-6 px-4">
			<Reveal className="text-center mb-16">
				<span className="text-primary font-semibold text-sm tracking-wider uppercase">Services</span>
				<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">What we can build for you</h2>
				<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
					End-to-end product engineering. Pick a piece or the whole thing.
				</p>
			</Reveal>

			<StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
				{services.map((service) => (
					<StaggerItem key={service.title}>
						<SpotlightCard className="h-full">
							<div className="relative flex flex-col h-full overflow-hidden p-8">
								<div className="absolute -right-10 -bottom-10 opacity-10">
									<service.icon size={250} className="text-muted-foreground"/>
								</div>
								<div className="w-12 h-12 rounded-full flex items-center justify-center border border-border mb-4">
									<service.icon size={24} className="text-primary"/>
								</div>
								<h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
									{service.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
								<ul className="space-y-2 mt-auto">
									{service.features.map((feature) => (
										<li key={feature} className="flex items-start gap-2 text-sm">
											<ArrowRight size={15} className="text-primary flex-shrink-0 mt-0.5"/>
											<span className="text-foreground/70">{feature}</span>
										</li>
									))}
								</ul>
							</div>
						</SpotlightCard>
					</StaggerItem>
				))}
			</StaggerGroup>
		</div>
	</section>
);

const steps = [
	{number: "01", title: "Discovery", description: "We talk through what you need, map requirements, and agree on scope and an honest estimate.", icon: Target},
	{number: "02", title: "Design", description: "Wireframes and prototypes so you can see and react to the product before we build it.", icon: Palette},
	{number: "03", title: "Build", description: "Iterative development with regular check-ins — you see working software early, not at the end.", icon: Code},
	{number: "04", title: "Ship & support", description: "We deploy, hand over cleanly, and stick around for fixes, updates and what comes next.", icon: Rocket},
];

const ProcessSection = () => (
	<section className="py-24 relative">
		<div className="max-w-7xl mx-auto md:px-6 px-4">
			<Reveal className="text-center mb-16">
				<span className="text-primary font-semibold text-sm tracking-wider uppercase">How we work</span>
				<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">A simple, transparent process</h2>
			</Reveal>

			<StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
				{steps.map((step) => (
					<StaggerItem key={step.number} className="relative overflow-hidden">
						<div className="border border-border p-6 h-full hover:border-primary/50 duration-500 transition-all">
							<div className="absolute leading-none -bottom-8 -z-10 -right-4 text-[12rem] font-black text-primary/10">
								{step.number}
							</div>
							<step.icon size={32} className="text-primary mb-4"/>
							<h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
							<p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
						</div>
					</StaggerItem>
				))}
			</StaggerGroup>
		</div>
	</section>
);

const techCategories = [
	{category: "Frontend", technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]},
	{category: "Backend", technologies: ["Node.js", "PostgreSQL", "REST APIs", "Prisma"]},
	{category: "Mobile", technologies: ["Android", "Offline-first", "Local sync"]},
	{category: "Infra", technologies: ["Vercel", "Docker", "CI/CD", "Cloud hosting"]},
];

const TechStack = () => (
	<section className="py-24 relative">
		<div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto md:px-6 px-4">
			<Reveal>
				<span className="text-primary font-semibold text-sm tracking-wider uppercase">Our tools</span>
				<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">Tech stack</h2>
				<p className="text-muted-foreground text-lg">
					Proven, modern tools we know well. We pick what fits the problem, not what's trendy.
				</p>
			</Reveal>

			<StaggerGroup className="grid md:gap-6 gap-4">
				{techCategories.map((category) => (
					<StaggerItem key={category.category}>
						<div className="relative border border-border p-6 hover:border-primary/50 duration-500 transition-all overflow-hidden">
							<Database size={100} className="absolute right-0 top-0 text-muted-foreground opacity-[0.07]"/>
							<h3 className="text-2xl tracking-tight font-bold text-foreground mb-4">{category.category}</h3>
							<div className="flex flex-wrap gap-2">
								{category.technologies.map((tech) => (
									<Pill key={tech} label={tech}/>
								))}
							</div>
						</div>
					</StaggerItem>
				))}
			</StaggerGroup>
		</div>
	</section>
);

const ServicesPage = () => (
	<div className="min-h-screen">
		<ServicesHero/>
		<Separator/>
		<CoreServices/>
		<Separator/>
		<ProcessSection/>
		<Separator/>
		<TechStack/>
		<Separator/>
		<CTASection/>
	</div>
);

export default ServicesPage;
