'use client'
import {CheckCircle2, ChevronRight, Code, Cpu, Globe, Layers, Rocket, Shield} from "lucide-react";
import {motion} from "framer-motion";
import React from "react";
import {useRouter} from "next/navigation";
import MagnetButton from "@/components/custom/MagnetButton";
import SpotlightCard from "@/components/SpotlightCard";

export const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Custom Web Development",
      description: "Responsive, SEO-optimized websites built with modern frameworks like Next.js, React, and Tailwind CSS.",
      features: ["E-commerce Platforms", "Corporate Websites", "Landing Pages", "Web Applications"]
    },
    {
      icon: Layers,
      title: "Management Systems",
      description: "Tailored CMS, CRM, and ERP solutions that streamline your business operations and boost productivity.",
      features: ["Custom CMS", "Inventory Systems", "CRM Solutions", "Admin Dashboards"]
    },
    {
      icon: Rocket,
      title: "MVP Development",
      description: "Rapid prototyping and MVP development to bring your startup ideas to life quickly and efficiently.",
      features: ["Proof of Concept", "Rapid Prototyping", "Market Validation", "Scalable Architecture"]
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Enterprise-grade custom software solutions designed specifically for your unique business requirements.",
      features: ["API Development", "Database Design", "Cloud Integration", "Third-party Integrations"]
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Leverage the power of AI and machine learning to automate processes and gain intelligent insights.",
      features: ["ChatGPT Integration", "ML Models", "Data Analytics", "Automation Tools"]
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and optimization to keep your applications running smoothly 24/7.",
      features: ["Bug Fixes", "Performance Optimization", "Security Updates", "Feature Enhancements"]
    }
  ];

  const router = useRouter();


  return (
    <section id={"services"} className="py-24  relative">
      <div className="max-w-7xl mx-auto md:px-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            From concept to deployment, we offer end-to-end development services tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
          {services.slice(0, 3).map((service, index) => (
            <SpotlightCard>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 transition-all group"
            >
              <div className="absolute -right-10 -bottom-10  opacity-10">
                <service.icon size={250} className="text-primary"/>
              </div>
              <h3 className="text-2xl tracking-tight font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed ">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-foreground/80">
                    <CheckCircle2 size={16} className="text-green-400 flex-shrink-0"/>
                    {feature}
                  </li>
                ))}
              </ul>
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
          <MagnetButton label={"View All Services"} icon={<ChevronRight size={20}/>} onClick={()=> router.push("/services")} />
        </motion.div>
      </div>
    </section>
  );
};
