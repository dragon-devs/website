'use client'
import {Award, ChevronRight, Layers, Target, TrendingUp, Users} from "lucide-react";
import {motion} from "framer-motion";
import React from "react";
import MagnetButton from "@/components/custom/MagnetButton";
import {useRouter} from "next/navigation";
import Image from "next/image";

export const AboutSection = () => {
  const values = [
    { icon: Target, title: "Mission-Driven", desc: "Building products that solve real problems" },
    { icon: Award, title: "Excellence", desc: "Delivering premium quality in every project" },
    { icon: TrendingUp, title: "Innovation", desc: "Staying ahead with cutting-edge technology" },
    { icon: Users, title: "Client-First", desc: "Your success is our priority" }
  ];
  const router = useRouter();

  return (
    <section id={"about"} className="py-24 pt-10 relative overflow-hidden">

      <div className="max-w-7xl mx-auto md:px-6 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">About dragondevs</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 tracking-tight">
            Building the Future, One Line at a Time
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl  ">
            We're a passionate team of developers and designers committed to creating exceptional digital experiences.
            While we work with clients today, we're building our own innovative products for tomorrow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 items-center mb-6 lg:h-80 md:gap-6 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-8 lg:h-80 border border-border">
              <h3 className="text-3xl font-bold text-foreground mb-4 tracking-tight">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                dragondevs was founded with a vision to bridge the gap between cutting-edge technology and real-world business needs.
                We started as freelancers, helping businesses transform their digital presence, and now we're evolving into a product company.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our dual focus allows us to stay grounded in client needs while pursuing innovation. Every project we take on
                informs our product development, and every product we build enhances our service delivery.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative h-52 md:h-80 border border-border overflow-hidden shadow-md group"
          >
            <Image
              src="/about.jpeg"
              alt="About DragonDevs"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              priority
            />
          </motion.div>

        </div>

        <div className="grid md:grid-cols-4 md:gap-6 gap-4 mb-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden border border-border md:p-6 p-4  hover:border-primary/50 transition-all duration-700"
            >
              <value.icon size={100} className="absolute -right-4 opacity-10 -bottom-8  mx-auto mb-4 text-muted-foreground"/>
              <h4 className="text-foreground font-semibold mb-2 tracking-tight text-2xl">{value.title}</h4>
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
