'use client';

import React from 'react';
import {Award, Heart, Lightbulb, Sparkles, Target, Users} from 'lucide-react';
import SpotlightCard from "@/components/SpotlightCard";
import {CTASection} from "@/components/CTASection";
import {Separator} from "@/components/ui/separator";
import Badge from "@/components/hero/Badge";
import {HeroTitle} from "@/components/hero/HeroTitle";
import {GradientText} from "@/components/hero/GradientText";
import {Reveal, StaggerGroup, StaggerItem} from "@/components/motion";

const AboutHero = () => (
	<section className="scale-90 relative min-h-[60vh] flex items-center justify-center overflow-hidden">
		<div className="relative z-10 flex items-center justify-center min-h-[60vh] px-6">
			<div className="max-w-5xl mx-auto text-center">
				<Badge icon={Sparkles}>About dragondevs</Badge>
				<HeroTitle mainText="A small studio that" accentText="ships real products"/>
				<GradientText variant="subtle" size="xl" animate animationDelay={0.6}>
					We're a tight team of engineers. We build software for clients and our own
					products — and we'd rather do a few things well than promise everything.
				</GradientText>
			</div>
		</div>
	</section>
);

const WhoWeAre = () => (
	<section className="py-24 relative">
		<div className="max-w-7xl mx-auto md:px-6 px-4">
			<Reveal className="mb-12">
				<span className="text-primary font-semibold text-sm tracking-wider uppercase">Who we are</span>
				<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
					Engineers first, agency second
				</h2>
			</Reveal>

			<div className="grid lg:grid-cols-2 gap-8">
				<Reveal>
					<div className="space-y-6 text-muted-foreground leading-relaxed">
						{/* opening paragraph set larger — it carries the definition, the rest qualifies it */}
						<p className="text-xl md:text-2xl leading-relaxed text-foreground/80 font-light">
							<span className="text-primary font-semibold">dragondevs</span> is a digital
							product engineering studio. We started out building software for other people
							and never stopped — but along the way we also began building products of our own,
							like <a href="https://bizstock.net" target="_blank" rel="noopener noreferrer"
							         className="text-primary underline underline-offset-4 decoration-primary/40
							         hover:decoration-primary transition-colors">BizStock</a>.
						</p>
						<p className="text-lg border-l-2 border-primary/30 pl-6">
							Being small is the point. You talk directly to the people writing the code, decisions
							are quick, and nothing gets lost in layers of account management. We take on work we
							can do properly and say so when we're not the right fit.
						</p>
					</div>
				</Reveal>

				<Reveal delay={0.1}>
					<SpotlightCard className="h-full group transition-colors duration-500 hover:border-primary/50">
						<div className="relative h-full p-8">
							<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-blue-500 to-cyan-400
								opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
							<div className="absolute -right-20 -top-20 w-48 h-48 rounded-full blur-3xl pointer-events-none
								bg-gradient-to-br from-blue-500/20 to-cyan-400/5 opacity-60
								group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"/>

							<h3 className="relative text-2xl font-bold mb-4 tracking-tight w-fit
								bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
								How we work
							</h3>
							<p className="relative text-muted-foreground leading-relaxed mb-4">
								Short feedback loops, working software early, and honest estimates. Our client
								work informs the products we build, and the products keep our engineering sharp.
							</p>
							<p className="relative text-muted-foreground leading-relaxed">
								From idea to deployment — design, build, ship, and maintain.
							</p>
						</div>
					</SpotlightCard>
				</Reveal>
			</div>
		</div>
	</section>
);

const values = [
	{
		icon: Target,
		title: "Mission-driven",
		color: "from-blue-500 to-cyan-400",
		tint: "from-blue-500/25 to-cyan-400/5",
		description: "We build things that solve a real problem, not features for their own sake.",
	},
	{
		icon: Heart,
		title: "Honest",
		color: "from-pink-500 to-rose-400",
		tint: "from-pink-500/25 to-rose-400/5",
		description: "Clear estimates, clear trade-offs, and a straight answer when something won't work.",
	},
	{
		icon: Lightbulb,
		title: "Pragmatic",
		color: "from-amber-500 to-orange-400",
		tint: "from-amber-500/25 to-orange-400/5",
		description: "Modern tools, sensible architecture, and code we'd be happy to maintain later.",
	},
	{
		icon: Award,
		title: "Quality over volume",
		color: "from-emerald-500 to-teal-400",
		tint: "from-emerald-500/25 to-teal-400/5",
		description: "A few projects done well beats a pipeline of half-finished ones.",
	},
];

const ValuesSection = () => (
	<section className="py-24 relative">
		<div className="max-w-7xl mx-auto md:px-6 px-4">
			<Reveal className="mb-12">
				<span className="text-primary font-semibold text-sm tracking-wider uppercase">What we value</span>
				<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
					The way we like to work
				</h2>
			</Reveal>

			<StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
				{values.map((value) => (
					<StaggerItem key={value.title}>
						<SpotlightCard className="h-full group transition-colors duration-500 hover:border-primary/50">
							<div className="relative flex flex-col h-full p-8">
								<div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${value.color}
									opacity-0 group-hover:opacity-100 transition-opacity duration-500`}/>
								<div className={`absolute -right-20 -top-20 w-48 h-48 rounded-full blur-3xl pointer-events-none
									bg-gradient-to-br ${value.tint} opacity-60 group-hover:opacity-100
									group-hover:scale-125 transition-all duration-700`}/>
								<value.icon
									size={180}
									className="absolute -right-8 -bottom-8 text-foreground opacity-[0.05] pointer-events-none
										group-hover:opacity-[0.09] group-hover:scale-110 transition-all duration-700"
								/>

								<h3 className={`relative text-xl font-bold mb-2 w-fit
									bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
									{value.title}
								</h3>
								<p className="relative text-muted-foreground leading-relaxed text-sm">{value.description}</p>
							</div>
						</SpotlightCard>
					</StaggerItem>
				))}
			</StaggerGroup>
		</div>
	</section>
);

const TeamNote = () => (
	<section className="py-24 relative">
		<div className="max-w-7xl mx-auto md:px-6 px-4">
			<Reveal>
				<SpotlightCard className="group transition-colors duration-500 hover:border-primary/50">
					<div className="relative p-10 md:p-12">
						<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-violet-500 via-primary to-cyan-400
							opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
						<div className="absolute -right-24 -top-24 w-72 h-72 rounded-full blur-3xl pointer-events-none
							bg-gradient-to-br from-violet-500/20 to-cyan-400/5 opacity-60
							group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"/>
						<Users
							size={220}
							className="absolute -right-10 -bottom-10 text-foreground opacity-[0.05] pointer-events-none
								group-hover:opacity-[0.09] group-hover:scale-105 transition-all duration-700"
						/>

						<span className="relative text-primary font-semibold text-sm tracking-wider uppercase">The team</span>
						<h3 className="relative text-3xl font-bold mt-4 mb-4 w-fit
							bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
							Small on purpose
						</h3>
						<p className="relative text-muted-foreground leading-relaxed max-w-3xl">
							We're a lean team of engineers. That means direct communication, fast iteration,
							and people who are personally invested in the work — without the overhead of a
							large agency. When a project needs a specialist we trust, we bring one in rather
							than pretend we do everything in-house.
						</p>
					</div>
				</SpotlightCard>
			</Reveal>
		</div>
	</section>
);

const AboutPage = () => (
	<main className="min-h-screen">
		<AboutHero/>
		<Separator/>
		<WhoWeAre/>
		<Separator/>
		<ValuesSection/>
		<Separator/>
		<TeamNote/>
		<Separator/>
		<CTASection/>
	</main>
);

export default AboutPage;
