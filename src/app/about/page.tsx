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
					<div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
						<p>
							<span className="text-primary font-semibold">dragondevs</span> is a digital
							product engineering studio. We started out building software for other people
							and never stopped — but along the way we also began building products of our own,
							like <a href="https://bizstock.net" target="_blank" rel="noopener noreferrer"
							         className="text-primary underline underline-offset-4">BizStock</a>.
						</p>
						<p>
							Being small is the point. You talk directly to the people writing the code, decisions
							are quick, and nothing gets lost in layers of account management. We take on work we
							can do properly and say so when we're not the right fit.
						</p>
					</div>
				</Reveal>

				<Reveal delay={0.1}>
					<div className="border border-border p-8 h-full">
						<h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">How we work</h3>
						<p className="text-muted-foreground leading-relaxed mb-4">
							Short feedback loops, working software early, and honest estimates. Our client
							work informs the products we build, and the products keep our engineering sharp.
						</p>
						<p className="text-muted-foreground leading-relaxed">
							From idea to deployment — design, build, ship, and maintain.
						</p>
					</div>
				</Reveal>
			</div>
		</div>
	</section>
);

const values = [
	{icon: Target, title: "Mission-driven", description: "We build things that solve a real problem, not features for their own sake."},
	{icon: Heart, title: "Honest", description: "Clear estimates, clear trade-offs, and a straight answer when something won't work."},
	{icon: Lightbulb, title: "Pragmatic", description: "Modern tools, sensible architecture, and code we'd be happy to maintain later."},
	{icon: Award, title: "Quality over volume", description: "A few projects done well beats a pipeline of half-finished ones."},
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
						<SpotlightCard className="h-full">
							<div className="relative flex flex-col h-full overflow-hidden p-8">
								<value.icon size={180} className="absolute -right-8 -bottom-8 opacity-10 text-muted-foreground"/>
								<div className="w-12 h-12 border border-border rounded-full flex items-center justify-center mb-4">
									<value.icon size={22} className="text-primary"/>
								</div>
								<h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
								<p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
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
				<div className="border border-border p-10 md:p-12 relative overflow-hidden">
					<Users size={220} className="absolute -right-10 -bottom-10 opacity-[0.07] text-muted-foreground"/>
					<span className="text-primary font-semibold text-sm tracking-wider uppercase">The team</span>
					<h3 className="text-3xl font-bold text-foreground mt-4 mb-4">Small on purpose</h3>
					<p className="text-muted-foreground leading-relaxed max-w-3xl">
						We're a lean team of engineers. That means direct communication, fast iteration,
						and people who are personally invested in the work — without the overhead of a
						large agency. When a project needs a specialist we trust, we bring one in rather
						than pretend we do everything in-house.
					</p>
				</div>
			</Reveal>
		</div>
	</section>
);

const AboutPage = () => (
	<div className="min-h-screen">
		<AboutHero/>
		<Separator/>
		<WhoWeAre/>
		<Separator/>
		<ValuesSection/>
		<Separator/>
		<TeamNote/>
		<Separator/>
		<CTASection/>
	</div>
);

export default AboutPage;
