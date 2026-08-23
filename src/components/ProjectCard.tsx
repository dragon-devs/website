"use client";
import SpotlightCard from "@/components/SpotlightCard";
import Image from "next/image";
import {ArrowRight, Boxes, Calendar, ExternalLink, TrendingUp} from "lucide-react";
import Pill from "@/components/Pill";
import MagnetButton from "@/components/custom/MagnetButton";
import {FaGithub} from "react-icons/fa6";
import React from "react";
import {InViewReveal} from "@/components/motion";
import {themedSrc, useIsLightTheme} from "@/lib/themed-image";

export const ProjectCard = ({project, index}: any) => {
    const isLight = useIsLightTheme();

    return (
        <SpotlightCard>
            <InViewReveal
                delay={(index % 2) * 0.1}
                className="relative flex flex-col h-full overflow-hidden group"
            >
                {/* A flat plate behind the shot, not a primary/purple/emerald wash. The
                    image covers it whenever there is one; when there isn't, a tinted
                    tri-colour rectangle is a worse placeholder than a quiet one. */}
                <div className="relative h-52 md:h-72 bg-foreground/[0.04] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {project.image ?
                            <Image src={themedSrc(project.image, isLight)} alt={project.title ? `${project.title} — ${project.category} project by dragondevs` : "dragondevs project"} width={300} height={300}
                                   className={"w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"}/> :
                            <Boxes size={72} strokeWidth={1} className="text-muted-foreground/25"/>}

                    </div>

                    <div className="absolute top-4 left-4">
                        <Pill label={project.category} marked/>
                    </div>

                    {project.status && (
                        <div className="absolute top-4 right-4">
                            <Pill label={project.status} marked/>
                        </div>
                    )}
                </div>

                <div className="absolute inset-x-0 top-0 h-px z-10 bg-[image:var(--forge)]
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>

                <div className="p-6 flex flex-col flex-grow">
	                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
		                {project.title}
	                </h3>

	                <p className="text-muted-foreground mb-4">{project.description}</p>

	                <div className="flex flex-wrap gap-2 mb-4">
		                {project.technologies.map((tech: any, i: any) => (
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

	                <div className="flex items-center justify-center gap-3 w-full">
		                {project.liveUrl && (
			                <MagnetButton
				                label="View Live"
				                icon={<ExternalLink size={14}/>}
				                size="sm"
				                magnetStrength={0}
				                wrapperClassName="w-full"
				                className="flex justify-center items-center"
				                href={project.liveUrl}
				                external
			                />
		                )}

		                {project.githubUrl && (
			                <MagnetButton
				                label="GitHub"
				                icon={<FaGithub size={14}/>}
				                size="sm"
				                variant="secondary"
				                magnetStrength={0}
				                wrapperClassName="w-full"
				                className="flex justify-center items-center"
				                href={project.githubUrl}
				                external
			                />
		                )}

		                {project.caseStudy && project.caseStudyUrl && (
			                <MagnetButton
				                label="Case Study"
				                icon={<ArrowRight size={14}/>}
				                size="sm"
				                variant="secondary"
				                magnetStrength={0}
				                wrapperClassName="w-full"
				                className="flex justify-center items-center"
				                href={project.caseStudyUrl}
			                />
		                )}
	                </div>
                </div>
            </InViewReveal>
        </SpotlightCard>
    );
};
