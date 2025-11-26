"use client";
import {motion} from "motion/react";
import React, {useEffect, useState} from "react";
import {useSearchParams, useRouter} from "next/navigation";
import SpotlightCard from "@/components/SpotlightCard";
import Pill from "@/components/Pill";
import {FaGithub} from "react-icons/fa6";

import {
	ArrowRight, Boxes, Brain, Building2, Calendar, CheckCircle2, Code, Database,
	ExternalLink, Heart, Icon, Layers, Lightbulb, Palette, Rocket, Shield,
	ShoppingCart, Target, TrendingUp, Workflow, Zap
} from "lucide-react";
import MagnetButton from "@/components/custom/MagnetButton";
import Image from "next/image";
import projectsData from "@/data/projects.json";


// 🔥 Icon Mapper (string → actual component)
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


export const WorkSection = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const category = searchParams?.get("category") ?? "all";

	const [projects, setProjects] = useState(projectsData.projects || []);

	const filteredProjects =
		category === "all"
			? projects
			: projects.filter((p) => p.type === category);

	const visibleProjects = filteredProjects.slice(0, 2);

	return (
		<section className="py-24 relative">
			<div className="max-w-7xl mx-auto md:px-6 px-4">
				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					className="mb-16 flex flex-col items-center justify-center text-center"
				>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
                Our Work
            </span>

					<h2 className="mt-4 mb-6 text-4xl md:text-5xl font-bold text-foreground">
						Featured Projects
					</h2>

					<p className="max-w-3xl text-lg text-muted-foreground">
						Explore our portfolio of projects that highlight our expertise, creativity, and dedication to delivering
						outstanding results for every client.
					</p>
				</motion.div>

				<div className="text-center mb-16">
					<CategoryTabs activeTab={category} router={router}/>
				</div>

				<div className="grid md:grid-cols-2 md:gap-8 gap-4">
					{visibleProjects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index}/>
					))}
				</div>

				{/* Centered MagnetButton */}
				<div className="mt-12 flex justify-center">
					<MagnetButton
						label="View All Projects"
						onClick={() => router.push(`/case-study?category=${category}`)}
					/>
				</div>
			</div>
		</section>
	);
};


// 🔥 Category Tabs — Updates URL Search Params
const CategoryTabs = ({activeTab, router}) => {
	const tabs = [
		{id: "all", label: "All Work", icon: Boxes},
		{id: "client", label: "Client Projects", icon: Building2},
		{id: "products", label: "Our Products", icon: Rocket},
		{id: "opensource", label: "Open Source", icon: Heart}
	];

	const updateCategory = (cat) => {
		router.push(`?category=${cat}`, {scroll: false});
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
					<tab.icon size={18}/>
					<span className="font-medium">{tab.label}</span>
				</button>
			))}
		</div>
	);
};


// 🔥 Project Card (Icons auto-converted)
const ProjectCard = ({project, index}: any) => {

	return (
		<SpotlightCard>
			<motion.div
				whileInView={{opacity: 1, y: 0}}
				transition={{delay: index * 0.1}}
				className="relative flex flex-col h-full overflow-hidden group"
			>
				<div className="relative h-52 md:h-72 bg-gradient-to-br from-primary/20 via-purple-500/10 to-emerald-500/10">
					<div className="absolute inset-0 flex items-center justify-center">
						{project.image ?
							<Image src={project.image} alt={project.name || "dragondevs work 01"} width={300} height={300}
							       className={"w-full h-full object-cover"}/> :
							<Boxes size={80} className="text-primary/30"/>}

					</div>

					<div className="absolute top-4 left-4">
						<Pill label={project.category} icon={CheckCircle2}/>
					</div>

					{project.status && (
						<div className="absolute top-4 right-4">
							<Pill label={project.status} icon={CheckCircle2}/>
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
							<Pill key={i} label={tech}/>
						))}
					</div>

					<div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
						{project.year && (
							<span className="flex items-center gap-1">
                <Calendar size={14}/>
								{project.year}
              </span>
						)}
						{project.metrics && (
							<span className="flex items-center gap-1">
                <TrendingUp size={14}/>
								{project.metrics}
              </span>
						)}
					</div>

					<div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3 mt-auto">
						{project.liveUrl && (
							<MagnetButton
								label="View Live"
								icon={<ExternalLink size={14}/>}
								size="sm"
								magnetStrength={0}
								className={"flex justify-center items-center"}
							/>
						)}

						{project.githubUrl && (
							<MagnetButton
								label="GitHub"
								icon={<FaGithub size={14}/>}
								size="sm"
								variant="secondary"
								magnetStrength={0}
								className={"flex justify-center items-center"}
							/>
						)}

						{project.caseStudy && (
							<MagnetButton
								label="Case Study"
								icon={<ArrowRight size={14}/>}
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
