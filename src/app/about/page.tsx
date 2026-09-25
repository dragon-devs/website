'use client';

import React from 'react';
import Image from 'next/image';
import {ArrowUpRight, Award, Globe, Heart, Lightbulb, Target, Users} from 'lucide-react';
import {FaGithub, FaLinkedinIn, FaXTwitter} from 'react-icons/fa6';
import SpotlightCard from "@/components/SpotlightCard";
import {CTASection} from "@/components/CTASection";
import {Separator} from "@/components/ui/separator";
import Badge from "@/components/hero/Badge";
import {HeroTitle} from "@/components/hero/HeroTitle";
import {GradientText} from "@/components/hero/GradientText";
import {Reveal, StaggerGroup, StaggerItem} from "@/components/motion";
import {FOUNDER} from "@/lib/seo";

const AboutHero = () => (
	<section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
		<div className="relative z-10 flex items-center justify-center min-h-[60vh] px-6">
			<div className="max-w-5xl mx-auto text-center">
				<Badge>About dragondevs</Badge>
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
				<span className="eyebrow">Who we are</span>
				<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
					Engineers first, agency second
				</h2>
			</Reveal>

			<div className="grid lg:grid-cols-2 gap-8">
				<Reveal>
					<div className="space-y-6 text-muted-foreground leading-relaxed">
						{/* opening paragraph set larger — it carries the definition, the rest qualifies it */}
						<p className="text-xl md:text-2xl leading-relaxed text-foreground/80 font-light">
							<span className="text-primary font-semibold">dragondevs</span> is a <strong className="font-semibold text-foreground">digital
							product engineering studio</strong>. We started out building software for other people
							and never stopped — but along the way we also began building products of our own,
							like <a href="https://bizstock.net" target="_blank" rel="noopener noreferrer"
							         className="text-primary underline underline-offset-4 decoration-primary/40
							         hover:decoration-primary transition-colors">Bizstock</a>.
						</p>
						<p className="text-lg border-l-2 border-primary/30 pl-6">
							<strong className="font-semibold text-foreground">Being small is the point</strong>. You talk <strong className="font-semibold text-foreground">directly to the people writing the code</strong>, decisions
							are quick, and nothing gets lost in layers of account management. We take on work we
							can do properly and say so when we're not the right fit.
						</p>
					</div>
				</Reveal>

				<Reveal delay={0.1}>
					<SpotlightCard className="h-full group transition-colors duration-500 hover:border-primary/50">
						<div className="relative h-full p-8">
							{/* The forge edge: one hairline, one hue, brightest at its centre.
							    It replaces a blue-to-cyan ramp, and the blurred corner bloom
							    that sat under it is gone — SpotlightCard already lights the
							    plate under the cursor, so the bloom was a second, static
							    answer to the same question at the cost of a full blur layer. */}
							<div className="absolute inset-x-0 top-0 h-px bg-[image:var(--forge)]
								opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>

							<h3 className="relative text-2xl font-bold mb-4 w-fit text-foreground">
								How we work
							</h3>
							<p className="relative text-muted-foreground leading-relaxed mb-4">
								<strong className="font-semibold text-foreground">Short feedback loops</strong>, working software early, and <strong className="font-semibold text-foreground">honest estimates</strong>. Our client
								work informs the products we build, and the products keep our engineering sharp.
							</p>
							<p className="relative text-muted-foreground leading-relaxed">
								<strong className="font-semibold text-foreground">From idea to deployment</strong> — design, build, ship, and maintain.
							</p>
						</div>
					</SpotlightCard>
				</Reveal>
			</div>
		</div>
	</section>
);

// Each link shows where it goes rather than a platform name, so no two links
// on the page share an anchor text with the footer's icon row.
const founderLinks = [
	{icon: Globe, label: "skdrh.dragondevs.co", title: "Portfolio", href: FOUNDER.url},
	{icon: FaXTwitter, label: "@skdrh_", title: "X", href: FOUNDER.profiles.x},
	{icon: FaLinkedinIn, label: "in/skdrh", title: "LinkedIn", href: FOUNDER.profiles.linkedin},
	{icon: FaGithub, label: "github.com/skdrh", title: "GitHub", href: FOUNDER.profiles.github},
];

const Founder = () => (
	<section id="founder" className="py-24 relative scroll-mt-24">
		<div className="max-w-7xl mx-auto md:px-6 px-4">
			<div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-center">
				<Reveal>
					<figure className="max-w-md mx-auto lg:max-w-none">
						<div className="relative border border-border overflow-hidden bg-foreground/[0.04]">
							{/* The forge edge, as on the cards: this is the plate the
							    page is about. */}
							<div className="absolute inset-x-0 top-0 h-px z-10 bg-[image:var(--forge)]"/>
							<Image
								src={FOUNDER.photo.src}
								alt={FOUNDER.photo.alt}
								width={FOUNDER.photo.width}
								height={FOUNDER.photo.height}
								sizes="(min-width: 1280px) 480px, (min-width: 1024px) 38vw, (min-width: 480px) 448px, 100vw"
								// Square, anchored to the top: the face leads and the
								// bottom of the chair is what gets cropped.
								className="block aspect-square w-full h-auto object-cover object-top"
							/>
						</div>
						<figcaption className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
							<span aria-hidden="true" className="size-1 rotate-45 bg-primary"/>
							{FOUNDER.name} · {FOUNDER.alias} — founder of dragondevs
						</figcaption>
					</figure>
				</Reveal>

				<Reveal delay={0.1}>
					<span className="eyebrow">The founder</span>
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-3">
						{FOUNDER.name} <span className="font-light text-muted-foreground">({FOUNDER.alias})</span>
					</h2>
					<p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground mb-8">
						{FOUNDER.role}
					</p>

					<p className="text-lg text-muted-foreground leading-relaxed">
						Salman founded dragondevs and still writes the code. A <strong className="font-semibold text-foreground">software
						architect and product builder</strong> with 8+ years and 30+ projects shipped end to end, and the
						sole builder of <strong className="font-semibold text-foreground">Bizstock</strong>, our
						offline-first inventory and POS.
					</p>

					<blockquote className="mt-8 border-l-2 border-primary/30 pl-6 text-xl md:text-2xl leading-relaxed text-foreground/80 font-light">
						&ldquo;I build products end to end: the idea, the architecture, the UI, the API, the database, the
						AI, even the deploy script. Bring me a real problem and I&apos;ll hand you back a real
						product, fast.&rdquo;
					</blockquote>

					<ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
						{founderLinks.map(({icon: Icon, label, title, href}) => (
							<li key={href}>
								<a
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									title={`${FOUNDER.name} on ${title}`}
									className="group inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									<Icon size={15}/>
									{label}
									<ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-px group-hover:translate-x-px"/>
								</a>
							</li>
						))}
					</ul>
				</Reveal>
			</div>
		</div>
	</section>
);

const values = [
	{
		icon: Target,
		title: "Mission-driven",
		description: "We build things that solve a real problem, not features for their own sake.",
	},
	{
		icon: Heart,
		title: "Honest",
		description: "Clear estimates, clear trade-offs, and a straight answer when something won't work.",
	},
	{
		icon: Lightbulb,
		title: "Pragmatic",
		description: "Modern tools, sensible architecture, and code we'd be happy to maintain later.",
	},
	{
		icon: Award,
		title: "Quality over volume",
		description: "A few projects done well beats a pipeline of half-finished ones.",
	},
];

const ValuesSection = () => (
	<section className="py-24 relative">
		<div className="max-w-7xl mx-auto md:px-6 px-4">
			<Reveal className="mb-12">
				<span className="eyebrow">What we value</span>
				<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
					The way we like to work
				</h2>
			</Reveal>

			<StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
				{values.map((value) => (
					<StaggerItem key={value.title}>
						<SpotlightCard className="h-full group transition-colors duration-500 hover:border-primary/50">
							<div className="relative flex flex-col h-full p-8">
								<div className="absolute inset-x-0 top-0 h-px bg-[image:var(--forge)]
									opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
								<value.icon
									size={180}
									className="absolute -right-8 -bottom-8 text-foreground opacity-[0.05] pointer-events-none
										group-hover:opacity-[0.09] group-hover:scale-110 transition-all duration-700"
								/>

								{/* Solid, not coloured. Four cards in four different hues is what
								    made this row read as a colour swatch rather than as a set of
								    four related ideas; the accent is spent on the eyebrow above
								    them and on the edge that lights up under the cursor. */}
								<h3 className="relative text-xl font-bold mb-2 w-fit text-foreground">
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
						<div className="absolute inset-x-0 top-0 h-px bg-[image:var(--forge)]
							opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
						<Users
							size={220}
							className="absolute -right-10 -bottom-10 text-foreground opacity-[0.05] pointer-events-none
								group-hover:opacity-[0.09] group-hover:scale-105 transition-all duration-700"
						/>

						<span className="eyebrow relative">The team</span>
						<h3 className="relative text-3xl font-bold mt-4 mb-4 w-fit text-foreground">
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
		<Founder/>
		<Separator/>
		<ValuesSection/>
		<Separator/>
		<TeamNote/>
		<Separator/>
		<CTASection/>
	</main>
);

export default AboutPage;
