'use client';

import React, {Suspense, useState} from 'react';
import {motion} from 'motion/react';
import {Boxes, Clock, Heart, Rocket, Sparkles, Star, TrendingUp, Users} from 'lucide-react';
import {Separator} from '@/components/ui/separator';
import SpotlightCard from '@/components/SpotlightCard';
import Pill from "@/components/Pill";
import {CTASection} from "@/components/CTASection";
import Badge from "@/components/hero/Badge";
import {HeroTitle} from "@/components/hero/HeroTitle";
import {GradientText} from "@/components/hero/GradientText";
import {useRouter, useSearchParams} from "next/navigation";
import projectsData from "@/data/projects.json";
import Loading from "@/app/loading";
import {ProjectCard} from "@/components/ProjectCard";
import {CategoryTabs} from "@/components/CategoryTabs";
import {TestimonialsSection} from "@/components/TestimonialsSection";

// Animated Section Container
const SectionContainer = ({children, className = ""}: any) => {
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
        {number: "28+", label: "Projects Completed", icon: Boxes},
        {number: "15+", label: "Happy Clients", icon: Users},
        {number: "5+", label: "Open Source Projects", icon: Heart},
        {number: "2", label: "Products in Development", icon: Rocket}
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
                            className="border border-border p-8 text-center hover:border-primary/50 duration-700 transition-all relative overflow-hidden"
                        >
                            <stat.icon size={150}
                                       className="text-muted-foreground absolute -right-4 -bottom-4 opacity-10"/>
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

const ProjectsSection = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const category = searchParams?.get("category") ?? "all";

    const [projects] = useState(projectsData.projects || []);

    const filteredProjects =
        category === "all"
            ? projects
            : projects.filter((p) => p.type === category);

    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto md:px-6 px-4">
                <SectionContainer>
                    <div className="text-center mb-16">
                        <span
                            className="text-primary font-semibold text-sm tracking-wider uppercase">Our Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                            Projects We're Proud Of
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
                            Every project tells a story of challenges overcome, solutions delivered,
                            and impact created. Here's a glimpse of what we've built.
                        </p>
                        <CategoryTabs activeTab={category} router={router}/>

                    </div>
                </SectionContainer>
                <div className="grid md:grid-cols-2 md:gap-8 gap-4">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index}/>
                    ))}
                </div>

            </div>
        </section>
    );
};

// Testimonials Section

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
                            initial={{opacity: 0, scale: 0.9}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{delay: index * 0.1}}
                            className="border border-border p-6 text-center hover:border-primary/50 duration-700 transition-all"
                        >
                            <impact.icon size={40} className="text-primary mx-auto mb-4"/>
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
            <WorkHero/>
            <Separator/>
            <StatsOverviewSection/>
            <Separator/>
            <Suspense fallback={<Loading/>}>
                <ProjectsSection/>
            </Suspense>
            <Separator/>
            <TestimonialsSection/>
            <Separator/>
            <ImpactSection/>
            <Separator/>
            <CTASection/>
        </div>
    );
};

export default WorkPage;