'use client';

import React, {Suspense} from 'react';
import {Sparkles} from 'lucide-react';
import {Separator} from '@/components/ui/separator';
import {CTASection} from "@/components/CTASection";
import Badge from "@/components/hero/Badge";
import {HeroTitle} from "@/components/hero/HeroTitle";
import {GradientText} from "@/components/hero/GradientText";
import {useRouter, useSearchParams} from "next/navigation";
import projectsData from "@/data/projects.json";
import {ProjectCard} from "@/components/ProjectCard";
import {CategoryTabs} from "@/components/CategoryTabs";
import {Reveal} from "@/components/motion";

const WorkHero = () => (
	<section className="scale-90 relative min-h-[60vh] flex items-center justify-center overflow-hidden">
		<div className="relative z-10 flex items-center justify-center min-h-[60vh] px-6">
			<div className="max-w-4xl mx-auto text-center">
				<Badge icon={Sparkles}>Our work</Badge>
				<HeroTitle mainText="Things we've" accentText="designed and built"/>
				<GradientText variant="subtle" size="xl" animate animationDelay={0.6}>
					A look at the products we build and the work we ship. We'd rather show a few
					things properly than pad this page out.
				</GradientText>
			</div>
		</div>
	</section>
);

/**
 * The portfolio grid, filtered by an explicit category rather than by reading
 * the URL itself — so it can be rendered both inside and outside the Suspense
 * boundary below. See `WorkPage`.
 */
const ProjectsSection = ({category}: {category: string}) => {
	const router = useRouter();
	const projects = projectsData.projects || [];

	const filteredProjects =
		category === "all" ? projects : projects.filter((p) => p.type === category);

	return (
		<section className="py-24 relative">
			<div className="max-w-7xl mx-auto md:px-6 px-4">
				<Reveal className="text-center mb-12">
					<span className="text-primary font-semibold text-sm tracking-wider uppercase">Portfolio</span>
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">Selected work</h2>
					<CategoryTabs activeTab={category} router={router}/>
				</Reveal>

				<div className="grid md:grid-cols-2 md:gap-8 gap-4">
					{filteredProjects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index}/>
					))}
				</div>

				{filteredProjects.length === 0 && (
					<p className="text-center text-muted-foreground py-12">
						Nothing here yet in this category — check back soon.
					</p>
				)}
			</div>
		</section>
	);
};

/** Reads the category off the URL. Isolated so only this reads search params. */
const FilteredProjectsSection = () => {
	const searchParams = useSearchParams();
	return <ProjectsSection category={searchParams?.get("category") ?? "all"}/>;
};

const WorkPage = () => (
	<main className="min-h-screen">
		<WorkHero/>
		<Separator/>
		{/*
		  The fallback is the full, unfiltered grid rather than a spinner.
		  `useSearchParams` opts its subtree out of static prerendering, so
		  whatever the fallback renders is exactly what ends up in the HTML a
		  crawler reads. With a spinner there, this page — the portfolio — served
		  126 words and not one project title. The unfiltered grid is also the
		  right thing for a crawler to index: /case-studies is canonical without
		  a category, so every project belongs in it.
		*/}
		<Suspense fallback={<ProjectsSection category="all"/>}>
			<FilteredProjectsSection/>
		</Suspense>
		<Separator/>
		<CTASection/>
	</main>
);

export default WorkPage;
