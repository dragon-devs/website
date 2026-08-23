'use client';

import React from 'react';
import {
	ArrowRight,
	Cloud,
	Code,
	Cpu,
	Database,
	Globe,
	Layers,
	Monitor,
	Palette,
	Rocket,
	Server,
	Smartphone,
	Target
} from 'lucide-react';
import {FaAndroid, FaApple} from "react-icons/fa6";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import SpotlightCard from "@/components/SpotlightCard";
import {CTASection} from "@/components/CTASection";
import Pill from "@/components/Pill";
import Badge from "@/components/hero/Badge";
import {HeroTitle} from "@/components/hero/HeroTitle";
import {GradientText} from "@/components/hero/GradientText";
import {Reveal, StaggerGroup, StaggerItem} from "@/components/motion";
import {useRouter} from "next/navigation";

const ServicesHero = () => (
	<section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
		<div className="relative z-10 flex items-center justify-center min-h-[60vh] px-6">
			<div className="max-w-4xl mx-auto text-center">
				<Badge>What we do</Badge>
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
		slug: "web-app",
		icon: Globe,
		title: "Web apps & websites",
		description: "Responsive, fast, search-friendly sites and web apps that load quickly and stay easy to change.",
		features: ["Web applications", "Marketing & landing sites", "E-commerce", "Content-managed sites"],
	},
	{
		slug: "custom-software",
		icon: Code,
		title: "Custom software",
		description: "Software built around your workflow rather than forcing you into someone else's.",
		features: ["APIs & integrations", "Database design", "Internal tools", "Automation"],
	},
	{
		slug: "mvp",
		icon: Rocket,
		title: "MVP development",
		description: "Get a real, usable version of your idea in front of users quickly — then iterate.",
		features: ["Rapid prototyping", "Proof of concept", "Scalable foundation", "Fast iteration"],
	},
	{
		slug: "management-system",
		icon: Layers,
		title: "Management systems",
		description: "Dashboards, CMS and admin systems that make day-to-day operations easier.",
		features: ["Admin dashboards", "Custom CMS", "Inventory & ops tools", "Reporting"],
	},
	{
		slug: "mobile",
		icon: Smartphone,
		title: "Mobile & desktop apps",
		description: "Apps that work where your users are, from a single, maintainable codebase.",
		features: ["iOS & Android", "Native desktop", "Offline-first", "Local sync"],
	},
	{
		slug: "support",
		icon: Cloud,
		title: "Deploy & maintain",
		description: "We don't disappear at launch. Deployment, monitoring and ongoing improvements.",
		features: ["Deployment & CI", "Performance", "Bug fixes & updates", "Long-term support"],
	}
];

const CoreServices = () => {
	const router = useRouter();
	return (
		<section className="py-24 relative">
			<div className="max-w-7xl mx-auto md:px-6 px-4">
				<Reveal className="text-center mb-16">
					<span className="eyebrow">Services</span>
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">What we can build for you</h2>
					<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
						End-to-end product engineering. Pick a piece or the whole thing — tap any card to start a project.
					</p>
				</Reveal>

				<StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
					{services.map((service) => (
						<StaggerItem key={service.slug}>
							<SpotlightCard className="h-full">
								<button
									type="button"
									onClick={() => router.push(`/contact?type=${service.slug}`)}
									aria-label={`Start a ${service.title} project`}
									className="group relative flex flex-col h-full w-full text-left overflow-hidden p-8 cursor-pointer
										transition-colors hover:bg-foreground/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
								>
									<div className="absolute inset-x-0 top-0 h-px bg-[image:var(--forge)]
										opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
									<div className="absolute -right-10 -bottom-10 opacity-10">
										<service.icon size={250} className="text-muted-foreground"/>
									</div>
									<div className="chamfer-sm w-11 h-11 flex items-center justify-center
										bg-foreground/[0.055] mb-5">
										<service.icon size={20} className="text-primary"/>
									</div>
									{/* Solid. Six cards in six unrelated hues is what made this grid
									    read as a colour chart; every card is the same kind of thing, so
									    every card is set the same way. */}
									<h3 className="text-2xl font-bold mb-3 text-foreground">
										{service.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
									<ul className="space-y-2">
										{service.features.map((feature) => (
											<li key={feature} className="flex items-start gap-2 text-sm">
												<ArrowRight size={15} className="text-primary flex-shrink-0 mt-0.5"/>
												<span className="text-foreground/70">{feature}</span>
											</li>
										))}
									</ul>
									<span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary
										opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
										Start a project <ArrowRight size={15}/>
									</span>
								</button>
							</SpotlightCard>
						</StaggerItem>
					))}
				</StaggerGroup>
			</div>
		</section>
	);
};

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
				<span className="eyebrow">How we work</span>
				<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">A simple, transparent process</h2>
			</Reveal>

			<StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
				{steps.map((step) => (
					<StaggerItem key={step.number} className="relative overflow-hidden">
						<div className="border border-border p-6 h-full hover:border-primary/50 duration-500 transition-all">
							{/* The numerals stay: these four are a real sequence — you cannot
							    ship before you build — so the numbering carries information
							    rather than decorating the grid. */}
							<div className="absolute leading-none -bottom-8 -z-10 -right-4 text-[12rem] font-black
								text-foreground/[0.055]">
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

const platforms = [
	{icon: Globe, name: "Web", detail: "Browsers & PWAs"},
	{icon: FaApple, name: "iOS", detail: "iPhone & iPad"},
	{icon: FaAndroid, name: "Android", detail: "Phone & tablet"},
	{icon: Monitor, name: "Desktop", detail: "Windows, macOS, Linux"},
	{icon: Cloud, name: "Cloud", detail: "APIs & services"},
];

const disciplines = [
	{
		icon: Palette,
		title: "Interface & experience",
		lead: "Interfaces people use without being taught. Correct on every screen size, and quick on the cheap phone your customer actually owns.",
		capabilities: [
			"Design systems",
			"Responsive layouts",
			"Motion & interaction",
			"Accessibility (WCAG)",
			"Bilingual & RTL",
			"Component libraries",
			"Prototyping",
		],
	},
	{
		icon: Server,
		title: "Backend & APIs",
		lead: "The half nobody sees and everybody feels. Systems that stay correct under load, fail predictably, and never quietly lose a record.",
		capabilities: [
			"API design & versioning",
			"Authentication & roles",
			"Payments & billing",
			"Third-party integrations",
			"Background jobs & queues",
			"Real-time & webhooks",
			"Caching strategies",
			"File & media pipelines",
			"Rate limiting & abuse control",
		],
	},
	{
		icon: Smartphone,
		title: "Mobile & desktop",
		lead: "One product across every device your users reach for — including the ones that spend half the day with no signal.",
		capabilities: [
			"iOS & Android",
			"Native desktop",
			"Offline-first sync",
			"Conflict resolution",
			"Push notifications",
			"Camera & barcode",
			"Store submission",
			"Auto-update & releases",
		],
	},
	{
		icon: Database,
		title: "Data & reporting",
		lead: "Schemas that still make sense three features from now, and numbers the business is willing to act on.",
		capabilities: [
			"Data modelling",
			"Zero-downtime migrations",
			"Dashboards & reporting",
			"Full-text search",
			"Import & export",
			"Audit trails",
			"Backup & recovery",
		],
	},
	{
		icon: Cpu,
		title: "AI & automation",
		lead: "Models wired into real workflows rather than bolted on for the demo — in the cloud, or entirely on-device when the data shouldn't leave.",
		capabilities: [
			"LLM integration",
			"On-device inference",
			"Document processing",
			"Structured extraction",
			"Recommendations",
			"Chat assistants",
			"Workflow automation",
		],
	},
	{
		icon: Cloud,
		title: "Cloud & reliability",
		lead: "Deploy on a Friday without flinching. Pipelines, monitoring and headroom put in place before you need them, not after an outage.",
		capabilities: [
			"Deployment pipelines",
			"Horizontal scaling",
			"Monitoring & alerting",
			"Performance budgets",
			"Encryption & secrets",
			"Zero-downtime releases",
			"Cost control",
		],
	},
];

const Expertise = () => (
	<section className="py-24 relative">
		<div className="max-w-7xl mx-auto md:px-6 px-4">
			<Reveal className="text-center mb-16">
				<span className="eyebrow">Expertise</span>
				<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">Every layer, every platform</h2>
				<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
					We don't lead with framework logos. There are hundreds of them and they turn over every
					couple of years — what carries across is the engineering underneath. So this is what we
					actually do, rather than what we happen to have installed.
				</p>
			</Reveal>

			<StaggerGroup className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-6 gap-4 mb-16">
				{platforms.map((platform) => (
					<StaggerItem key={platform.name}>
						<div className="group relative border border-border p-6 h-full flex flex-col items-center text-center gap-2
							overflow-hidden hover:border-primary/50 duration-500 transition-all">
							<div className="absolute inset-x-0 top-0 h-px bg-[image:var(--forge)]
								opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"/>
							<platform.icon size={28} className="relative text-primary mb-1 group-hover:scale-110 transition-transform duration-500"/>
							<h3 className="relative text-lg font-bold text-foreground leading-none">{platform.name}</h3>
							<p className="relative text-muted-foreground text-xs">{platform.detail}</p>
						</div>
					</StaggerItem>
				))}
			</StaggerGroup>

			<StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
				{disciplines.map((discipline) => (
					<StaggerItem key={discipline.title}>
						<SpotlightCard className="h-full group transition-colors duration-500 hover:border-primary/50">
							<div className="relative h-full flex flex-col p-7">
								{/* the forge edge, lighting up along the top on hover */}
								<div className="absolute inset-x-0 top-0 h-px bg-[image:var(--forge)]
									opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>

								{/* oversized watermark of the discipline's own icon */}
								<discipline.icon
									size={150}
									className="absolute -right-8 -bottom-8 text-foreground opacity-[0.04] pointer-events-none
										group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700"
								/>

								<h3 className="relative text-2xl font-bold mb-3 w-fit text-foreground">
									{discipline.title}
								</h3>

								<p className="relative text-muted-foreground text-sm leading-relaxed mb-6">{discipline.lead}</p>

								<div className="relative mt-auto">
									<div className="flex items-center gap-3 mb-3">
										<span className="eyebrow text-muted-foreground/70">
											{discipline.capabilities.length} capabilities
										</span>
										<div className="h-px flex-1 bg-border group-hover:bg-primary/40
											transition-colors duration-500"/>
									</div>
									<div className="flex flex-wrap gap-2">
										{discipline.capabilities.map((capability) => (
											<Pill key={capability} label={capability}/>
										))}
									</div>
								</div>
							</div>
						</SpotlightCard>
					</StaggerItem>
				))}
			</StaggerGroup>

			<Reveal className="text-center mt-16">
				<p className="text-muted-foreground text-lg">
					Working on something that isn't on this list? That's usually the interesting kind of problem.{" "}
					<Link href="/contact" className="text-primary font-semibold hover:underline underline-offset-4">
						Tell us about it
					</Link>
					.
				</p>
			</Reveal>
		</div>
	</section>
);

const ServicesPage = () => (
	<main className="min-h-screen">
		<ServicesHero/>
		<Separator/>
		<CoreServices/>
		<Separator/>
		<ProcessSection/>
		<Separator/>
		<Expertise/>
		<Separator/>
		<CTASection/>
	</main>
);

export default ServicesPage;
