"use client"
import {motion} from "framer-motion";
import {ArrowRight, ChevronRight, Layers} from "lucide-react";
import React from "react";
import {useRouter} from "next/navigation";
import MagnetButton from "@/components/custom/MagnetButton";

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
    <section className="py-24 bg-slate-950/50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and commitment to excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0,2).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group"
            >
              <div className="bg-slate-800/50 h-64 flex items-center justify-center border-b border-white/10">
                <div className="text-center text-gray-500">
                  <Layers size={48} className="mx-auto mb-3 opacity-50"/>
                  <p className="text-sm">Project Screenshot Placeholder</p>
                </div>
              </div>
              <div className="p-8">
                <span className="text-blue-400 text-sm font-semibold">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-blue-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View Case Study <ArrowRight size={16}/>
                </button>
              </div>
            </motion.div>
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
