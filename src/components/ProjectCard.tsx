"use client";
import SpotlightCard from "@/components/SpotlightCard";
import Image from "next/image";
import {ArrowRight, Boxes, Calendar, CheckCircle2, ExternalLink, TrendingUp} from "lucide-react";
import Pill from "@/components/Pill";
import MagnetButton from "@/components/custom/MagnetButton";
import {FaGithub} from "react-icons/fa6";
import React from "react";
import {InViewReveal} from "@/components/motion";

export const ProjectCard = ({project, index}: any) => {
    return (
        <SpotlightCard>
            <InViewReveal
                delay={(index % 2) * 0.1}
                className="relative flex flex-col h-full overflow-hidden group"
            >
                <div className="relative h-52 md:h-72 bg-gradient-to-br from-primary/20 via-purple-500/10 to-emerald-500/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {project.image ?
                            <Image src={project.image} alt={project.title ? `${project.title} — ${project.category} project by dragondevs` : "dragondevs project"} width={300} height={300}
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
				                // Descriptive rather than a bare "Case Study" on every card:
				                // repeated anchor text tells a crawler nothing about the target.
				                label={`${project.title} case study`}
				                icon={<ArrowRight size={14}/>}
				                size="sm"
				                variant="secondary"
				                magnetStrength={0}
				                wrapperClassName="w-full"
				                className="flex justify-center items-center text-center leading-tight"
				                href={project.caseStudyUrl}
			                />
		                )}
	                </div>
                </div>
            </InViewReveal>
        </SpotlightCard>
    );
};
