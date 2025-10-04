'use client'
import {Award, ChevronRight, Layers, Target, TrendingUp, Users} from "lucide-react";
import {motion} from "framer-motion";
import React from "react";
import MagnetButton from "@/components/custom/MagnetButton";
import {useRouter} from "next/navigation";

export const AboutSection = () => {
  const values = [
    { icon: Target, title: "Mission-Driven", desc: "Building products that solve real problems" },
    { icon: Award, title: "Excellence", desc: "Delivering premium quality in every project" },
    { icon: TrendingUp, title: "Innovation", desc: "Staying ahead with cutting-edge technology" },
    { icon: Users, title: "Client-First", desc: "Your success is our priority" }
  ];
  const router = useRouter();

  return (
    <section className="py-24 bg-slate-950/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">About dragondevs</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 tracking-tight">
            Building the Future, One Line at a Time
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto ">
            We're a passionate team of developers and designers committed to creating exceptional digital experiences.
            While we work with clients today, we're building our own innovative products for tomorrow.
          </p>
        </motion.div>

        <div className=" items-center mb-20 md:h-80">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={"grid md:grid-cols-5 items-center mb-20"}
          >
            <div className="md:col-span-3 bg-gradient-to-bborder-background/20 to-purple-500/20 rounded-2xl md:rounded-r-none p-8 border border-border backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                dragondevs was founded with a vision to bridge the gap between cutting-edge technology and real-world business needs.
                We started as freelancers, helping businesses transform their digital presence, and now we're evolving into a product company.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our dual focus allows us to stay grounded in client needs while pursuing innovation. Every project we take on
                informs our product development, and every product we build enhances our service delivery.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-background/50 md:h-full rounded-2xl md:rounded-l-none  border border-border md:border-l-0 flex items-center justify-center"
            >
              <div className="text-center text-foreground">
                <Layers size={64} className="mx-auto mb-4 opacity-50"/>
                <p className="text-sm">Team Photo / Office Image Placeholder</p>
              </div>
            </motion.div>
          </motion.div>


        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background/50 border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-700"
            >
              <value.icon size={32} className="text-primary mx-auto mb-4"/>
              <h4 className="text-foreground font-semibold mb-2 text-lg">{value.title}</h4>
              <p className="text-muted-foreground text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <MagnetButton label={"Learn More About Us"} icon={<ChevronRight size={20}/>}  onClick={()=> router.push("/about")} />
        </motion.div>
      </div>
    </section>
  );
};
