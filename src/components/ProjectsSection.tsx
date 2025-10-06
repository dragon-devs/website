"use client"
import {motion} from "framer-motion";
import {ArrowRight, ChevronRight, Layers} from "lucide-react";
import React from "react";
import {useRouter} from "next/navigation";
import MagnetButton from "@/components/custom/MagnetButton";
import SpotlightCard from "@/components/SpotlightCard";
import Pill from "@/components/Pill";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A fully-featured online marketplace with payment integration, inventory management, and real-time analytics.",
      image: "placeholder",
      tags: ["Next.js", "Stripe", "PostgreSQL"]
    },
    {
      title: "Healthcare Management System",
      category: "Custom Software",
      description: "Comprehensive patient management system with appointment scheduling, medical records, and billing.",
      image: "placeholder",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "AI Content Generator",
      category: "SaaS Product",
      description: "AI-powered tool that generates marketing copy, blog posts, and social media content in seconds.",
      image: "placeholder",
      tags: ["OpenAI", "Python", "React"]
    },
    {
      title: "Real Estate Portal",
      category: "Web Application",
      description: "Modern property listing platform with advanced search, virtual tours, and agent management.",
      image: "placeholder",
      tags: ["Next.js", "Google Maps", "AWS"]
    }
  ];

  const router = useRouter()

  return (
    <section id={"projects"}  className="py-24 relative">
      <div className="max-w-7xl mx-auto md:px-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 ">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl ">
            Explore our portfolio of successful projects that showcase our expertise and commitment to excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 md:gap-8 gap-4">
          {projects.slice(0,2).map((project, index) => (
           <SpotlightCard >
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="b  overflow-hidden  transition-all group"
            >
              <div className=" h-64 flex items-center justify-center border-b border-border">
                <div className="text-center text-muted-foreground">
                  <Layers size={48} className="mx-auto mb-3 opacity-50"/>
                  <p className="text-sm">Project Screenshot Placeholder</p>
                </div>
              </div>
              <div className="p-8">
                <span className="text-primary text-sm font-semibold">{project.category}</span>
                <h3 className="text-2xl font-bold text-foreground mt-2 mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Pill key={idx} label={tag} />
                  ))}
                </div>
                <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View Case Study <ArrowRight size={16}/>
                </button>
              </div>
            </motion.div>
           </SpotlightCard>

          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <MagnetButton label={"View All Projects"} variant={"secondary"}   onClick={()=> router.push("/projects")} />

        </motion.div>
      </div>
    </section>
  );
};
