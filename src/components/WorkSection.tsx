"use client";
import React from "react";
import {InViewReveal} from "@/components/motion";
import {useRouter, useSearchParams} from "next/navigation";
import MagnetButton from "@/components/custom/MagnetButton";
import projectsData from "@/data/projects.json";
import {ProjectCard} from "@/components/ProjectCard";
import {CategoryTabs} from "@/components/CategoryTabs";

/**
 * Featured work, filtered by an explicit `category` rather than by reading the
 * URL itself. `FilteredWorkSection` is the only part that touches search
 * params; keeping the two separate lets the homepage prerender this section
 * unfiltered instead of prerendering a spinner. See `app/page.tsx`.
 */
export const WorkSection = ({category = "all"}: {category?: string}) => {
    const router = useRouter();
    const projects = projectsData.projects || [];

    const filteredProjects =
        category === "all"
            ? projects
            : projects.filter((p) => p.type === category);

    const visibleProjects = filteredProjects.slice(0, 2);

    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto md:px-6 px-4">
                <InViewReveal
                    className="mb-16 flex flex-col items-center justify-center text-center"
                >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
                Our Work
            </span>

                    <h2 className="mt-4 mb-6 text-4xl md:text-5xl font-bold text-foreground">
                        Featured Projects
                    </h2>

                    <p className="max-w-3xl text-lg text-muted-foreground">
                        Explore our portfolio of projects that highlight our expertise, creativity, and dedication to
                        delivering
                        outstanding results for every client.
                    </p>
                </InViewReveal>

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
                        onClick={() => router.push(`/case-studies?category=${category}`)}
                    />
                </div>
            </div>
        </section>
    );
};

/** Reads the category off the URL. Isolated so only this reads search params. */
export const FilteredWorkSection = () => {
    const searchParams = useSearchParams();
    return <WorkSection category={searchParams?.get("category") ?? "all"}/>;
};


