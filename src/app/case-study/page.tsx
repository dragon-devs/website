'use client';

import React, {useEffect, useState} from 'react';
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
import {useRouter, useSearchParams} from "next/navigation";
import MagnetButton from "@/components/custom/MagnetButton";

const ICONS = {
    ShoppingCart,
    Heart,
    Workflow,
    Brain,
    Code,
    Database,
    Target,
    Palette,
    Rocket,
    Shield,
    Zap,
    Lightbulb,
    CheckCircle2
};

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
const CategoryTabs = ({ activeTab, router }) => {
    const tabs = [
        { id: "all", label: "All Work", icon: Boxes },
        { id: "client", label: "Client Projects", icon: Building2 },
        { id: "products", label: "Our Products", icon: Rocket },
        { id: "opensource", label: "Open Source", icon: Heart }
    ];

    const updateCategory = (cat) => {
        router.push(`?category=${cat}`, { scroll: false });
    };

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => updateCategory(tab.id)}
                    className={`px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                        activeTab === tab.id
                            ? "bg-primary/20 text-primary border-primary/40"
                            : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
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
    const Icon = ICONS[project.icon] ?? Boxes;
    const StatusIcon = ICONS[project.statusIcon] ?? CheckCircle2;

    return (
        <SpotlightCard>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col h-full overflow-hidden group"
            >
                <div className="relative h-64 bg-gradient-to-br from-primary/20 via-purple-500/10 to-emerald-500/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Icon size={80} className="text-primary/30" />
                    </div>

                    <div className="absolute top-4 left-4">
                        <Pill label={project.category} icon={StatusIcon} />
                    </div>

                    {project.status && (
                        <div className="absolute top-4 right-4">
                            <Pill label={project.status} icon={StatusIcon} />
                        </div>
                    )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                            <Pill key={i} label={tech} />
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

                    <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3 mt-auto">
                        {project.liveUrl && (
                            <MagnetButton
                                label="View Live"
                                icon={<ExternalLink size={14} />}
                                size="sm"
                                magnetStrength={0}
                                className={"flex justify-center items-center"}
                            />
                        )}

                        {project.githubUrl && (
                            <MagnetButton
                                label="GitHub"
                                icon={<FaGithub size={14} />}
                                size="sm"
                                variant="secondary"
                                magnetStrength={0}
                                className={"flex justify-center items-center"}
                            />
                        )}

                        {project.caseStudy && (
                            <MagnetButton
                                label="Case Study"
                                icon={<ArrowRight size={14} />}
                                size="sm"
                                variant="secondary"
                                magnetStrength={0}
                                className={"flex justify-center items-center"}
                            />
                        )}
                    </div>
                </div>
            </motion.div>
        </SpotlightCard>
    );
};

// Projects Section
const ProjectsSection = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const category = searchParams.get("category") || "all";

    const [projects, setProjects] = useState([]);

    // 🔥 Fetch from JSON file
    useEffect(() => {
        fetch("/data/projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data.projects || []));
    }, []);

    // 🔥 Filtering
    const filteredProjects =
        category === "all"
            ? projects
            : projects.filter((p) => p.type === category);

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
                        <CategoryTabs activeTab={category} router={router} />

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