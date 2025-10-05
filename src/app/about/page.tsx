'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import {
  Target, Heart, Users, Zap, Shield, TrendingUp, Award,
  Lightbulb, Code, Rocket, Globe, CheckCircle2, ArrowRight,
  Sparkles, Clock, ThumbsUp, MessageSquare, Workflow,
  Brain, Palette, Database, Settings, Coffee, Star
} from 'lucide-react';
import {Footer} from "@/components/Footer";

// Animated Section Container
const SectionContainer = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hero Section
const AboutHero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      {/*<div className="absolute inset-0">*/}
      {/*  <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">*/}
      {/*    <defs>*/}
      {/*      <pattern id="about-grid" width="60" height="60" patternUnits="userSpaceOnUse">*/}
      {/*        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>*/}
      {/*      </pattern>*/}
      {/*    </defs>*/}
      {/*    <rect width="100%" height="100%" fill="url(#about-grid)" className="text-primary/30"/>*/}
      {/*  </svg>*/}
      {/*</div>*/}

      {/* Gradient Orbs */}
      <motion.div
        style={{ y }}
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2  border border-primary/80 text-primary/80 text-sm font-medium mb-8 rounded-full"
        >
          <Sparkles size={16} className="mr-2"/>
          About DragonDevs
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
        >
          Empowering Innovation
          <br/>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Through Technology
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl tracking-tight md:text-2xl  text-foreground/80 max-w-4xl mx-auto mb-12 md:leading-relaxed leading-tight"
        >
          We're more than just developers. We're architects of digital transformation,
          building the future one innovative solution at a time.
        </motion.p>
      </div>
    </section>
  );
};

// What is DragonDevs Section
const WhatIsDragonDevs = () => {
  const highlights = [
    { icon: Users, text: "Expert Team of Developers" },
    { icon: Globe, text: "Global Client Base" },
    { icon: Award, text: "Award-Winning Solutions" },
    { icon: Rocket, text: "Fast-Growing Startup" }
  ];

  return (
    <section className="md:py-24 py-0 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionContainer>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              What is DragonDevs?
            </h2>
          </div>
        </SectionContainer>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SectionContainer>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative border border-border  overflow-hidden h-[400px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Code size={64} className="mx-auto mb-4 opacity-50"/>
                  <p className="text-sm">Company Image / Team Photo</p>
                  <p className="text-xs mt-2">Replace with: /images/about/team-photo.jpg</p>
                </div>
              </div>
            </div>
          </SectionContainer>

          <SectionContainer>
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                <span className="text-primary font-semibold">DragonDevs</span> is a dynamic software development company
                founded with a singular vision: to transform innovative ideas into powerful digital realities. We're a team
                of passionate developers, designers, and strategists who believe technology should solve real problems and
                create tangible value.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Born from the fusion of technical expertise and entrepreneurial spirit, we operate at the intersection of
                agency work and product development. While we help businesses achieve their digital goals through custom
                software solutions, we're simultaneously building our own suite of innovative products that will shape
                the future of technology.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Our name, <span className="text-primary font-semibold">DragonDevs</span>, symbolizes power, wisdom, and
                transformation—qualities we bring to every project we undertake. Like a dragon, we're fierce in our
                commitment to excellence, protective of our clients' interests, and capable of breathing fire into ideas
                that might otherwise remain dormant.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 border border-border  p-4"
                  >
                    <div className=" p-2">
                      <item.icon size={20} className="text-primary"/>
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionContainer>
        </div>
      </div>
    </section>
  );
};

// Mission Section
const MissionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionContainer>
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">Our Purpose</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Our Mission
            </h2>
          </div>
        </SectionContainer>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SectionContainer>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl">
                <Target size={48} className="text-white mb-4"/>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Empowering Businesses Through Technology
                </h3>
                <p className="text-blue-50 leading-relaxed">
                  Our mission is to democratize access to cutting-edge technology by delivering enterprise-grade software
                  solutions that are accessible, scalable, and transformative. We believe every business, regardless of
                  size, deserves the power to compete in the digital age.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-white mb-4">We are committed to:</h4>
                <ul className="space-y-4">
                  {[
                    "Building software that solves real business problems, not just technical challenges",
                    "Maintaining the highest standards of code quality, security, and performance",
                    "Fostering long-term partnerships built on trust, transparency, and mutual success",
                    "Staying at the forefront of technological innovation to deliver future-proof solutions",
                    "Creating products that make a meaningful impact on how people work and live"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-1"/>
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionContainer>

          <SectionContainer>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden h-[500px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Target size={64} className="mx-auto mb-4 opacity-50"/>
                  <p className="text-sm">Mission Visualization</p>
                  <p className="text-xs mt-2">Replace with: /images/about/mission.jpg</p>
                </div>
              </div>
            </div>
          </SectionContainer>
        </div>
      </div>
    </section>
  );
};

// Core Values Section
const CoreValuesSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do, and it shows in every line of code we write. Our enthusiasm for technology drives us to go above and beyond for our clients.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Honesty and transparency are the foundations of our relationships. We deliver on our promises and always put our clients' interests first.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace change and continuously explore new technologies. Our curiosity fuels our ability to deliver cutting-edge solutions.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Great things happen when brilliant minds work together. We foster a culture of teamwork, both internally and with our clients.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Good enough is never good enough. We strive for perfection in every aspect of our work, from code quality to customer service.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We believe in continuous improvement. We invest in our team's development and stay updated with the latest industry trends.",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionContainer>
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">What Drives Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Our Core Values
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every solution we deliver.
              They're not just words on a page—they're the DNA of DragonDevs.
            </p>
          </div>
        </SectionContainer>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <value.icon size={32} className="text-white"/>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Vision Section
const VisionSection = () => {
  const milestones = [
    { year: "2024", title: "Foundation", desc: "DragonDevs is born with a clear mission" },
    { year: "2025", title: "Growth", desc: "Expanding team and client portfolio" },
    { year: "2026", title: "Products", desc: "Launch of our first SaaS products" },
    { year: "2027+", title: "Innovation", desc: "Leading the future of software development" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionContainer>
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">Looking Ahead</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Our Vision
            </h2>
          </div>
        </SectionContainer>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <SectionContainer>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden h-[400px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Rocket size={64} className="mx-auto mb-4 opacity-50"/>
                  <p className="text-sm">Vision Concept Image</p>
                  <p className="text-xs mt-2">Replace with: /images/about/vision.jpg</p>
                </div>
              </div>
            </div>
          </SectionContainer>

          <SectionContainer>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-600 to-blue-600 p-8 rounded-2xl">
                <Rocket size={48} className="text-white mb-4"/>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Building the Future of Software
                </h3>
                <p className="text-blue-50 leading-relaxed mb-4">
                  Our vision is to become a leading force in the global software industry, recognized not just for the
                  quality of our client work, but for the innovative products we create that solve universal challenges.
                </p>
                <p className="text-blue-50 leading-relaxed">
                  We envision a future where DragonDevs is synonymous with innovation, reliability, and transformative
                  technology. We're building a company that doesn't just follow trends—we set them.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                  <div className="text-gray-400 text-sm">Products in Pipeline</div>
                </div>
                <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-gray-400 text-sm">Team Members (Target)</div>
                </div>
              </div>
            </div>
          </SectionContainer>
        </div>

        {/* Timeline */}
        <SectionContainer>
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Journey</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
                      {index + 1}
                    </div>
                    <div className="text-blue-400 font-bold text-lg mb-2">{milestone.year}</div>
                    <div className="text-white font-semibold mb-2">{milestone.title}</div>
                    <div className="text-gray-400 text-sm">{milestone.desc}</div>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </div>
    </section>
  );
};

// What We Do Section
const WhatWeDoSection = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "We build bespoke software solutions tailored to your unique business requirements, from web applications to enterprise systems.",
      features: ["Web Applications", "Mobile Apps", "Desktop Software", "API Development"]
    },
    {
      icon: Rocket,
      title: "Product Development",
      description: "From ideation to launch, we help startups and enterprises build MVPs and full-scale products that users love.",
      features: ["MVP Building", "Product Strategy", "UI/UX Design", "Market Launch"]
    },
    {
      icon: Database,
      title: "Enterprise Solutions",
      description: "Scalable management systems that streamline operations, including CMS, CRM, ERP, and custom dashboards.",
      features: ["CMS Development", "CRM Systems", "ERP Solutions", "Admin Panels"]
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Leverage cutting-edge AI and machine learning to automate processes and gain intelligent business insights.",
      features: ["AI Integration", "ChatGPT API", "Workflow Automation", "Data Analytics"]
    },
    {
      icon: Palette,
      title: "Design & Branding",
      description: "Beautiful, intuitive interfaces that provide exceptional user experiences and strengthen your brand identity.",
      features: ["UI/UX Design", "Brand Identity", "Prototyping", "User Research"]
    },
    {
      icon: Settings,
      title: "Technical Consulting",
      description: "Strategic guidance on technology decisions, architecture design, and digital transformation initiatives.",
      features: ["Tech Stack Selection", "Architecture Review", "Code Audits", "Strategy Planning"]
    }
  ];

  const process = [
    { icon: MessageSquare, title: "Discovery", desc: "We listen to understand your goals and challenges" },
    { icon: Lightbulb, title: "Strategy", desc: "We design a solution tailored to your needs" },
    { icon: Code, title: "Development", desc: "We build with precision and quality" },
    { icon: Rocket, title: "Launch", desc: "We deploy and support your success" }
  ];

  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionContainer>
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              What We Do
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We offer comprehensive software development services that cover the entire lifecycle of digital products,
              from initial concept to ongoing maintenance and growth.
            </p>
          </div>
        </SectionContainer>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <service.icon size={28} className="text-blue-400"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Our Process */}
        <SectionContainer>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Process</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery, every time.
            </p>
          </div>
        </SectionContainer>

        <div className="grid md:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-slate-900/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon size={28} className="text-white"/>
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {index + 1}
              </div>
              <h4 className="text-white font-bold mb-2">{step.title}</h4>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team Section
const TeamSection = () => {
  const stats = [
    { icon: Users, number: "15+", label: "Team Members" },
    { icon: Globe, number: "12+", label: "Countries Served" },
    { icon: Star, number: "5.0", label: "Client Rating" },
    { icon: Coffee, number: "10K+", label: "Cups of Coffee" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionContainer>
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">The People Behind DragonDevs</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Meet Our Team
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our strength lies in our diverse, talented team of professionals who are passionate about creating
              exceptional software solutions.
            </p>
          </div>
        </SectionContainer>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all"
            >
              <stat.icon size={32} className="text-blue-400 mx-auto mb-4"/>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <SectionContainer>
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-12">
            <div className="text-center max-w-3xl mx-auto">
              <Users size={64} className="text-blue-400 mx-auto mb-6 opacity-50"/>
              <h3 className="text-2xl font-bold text-white mb-4">Building Something Special</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                We're a growing team of developers, designers, project managers, and innovators who share a common goal:
                to build software that makes a difference. Each team member brings unique expertise and perspective,
                creating a collaborative environment where innovation thrives.
              </p>
              <div className="relative bg-slate-800/50 rounded-xl h-64 flex items-center justify-center border border-white/10">
                <div className="text-center text-gray-500">
                  <Users size={48} className="mx-auto mb-3 opacity-50"/>
                  <p className="text-sm">Team Grid Photo</p>
                  <p className="text-xs mt-2">Replace with: /images/about/team-grid.jpg</p>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Lightning-Fast Delivery",
      description: "We pride ourselves on efficient project execution without compromising quality. Our agile methodology ensures rapid turnaround times."
    },
    {
      icon: ThumbsUp,
      title: "Client-Centric Approach",
      description: "Your success is our success. We work as an extension of your team, maintaining transparent communication throughout the project."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "With 28+ successfully delivered projects and a 98% client satisfaction rate, our results speak for themselves."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "We implement industry-leading security practices to protect your data and ensure compliance with international standards."
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "We build with growth in mind. Our solutions are architected to scale seamlessly as your business expands."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Technical issues don't follow business hours. Our dedicated support team is available whenever you need us."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionContainer>
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">Why DragonDevs</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We're not just another software agency. Here's what sets us apart from the competition.
            </p>
          </div>
        </SectionContainer>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all group"
            >
              <div className="bg-blue-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
                <reason.icon size={28} className="text-blue-400"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Technologies Section
const TechnologiesSection = () => {
  const techStack = [
    { category: "Frontend", techs: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript"] },
    { category: "Backend", techs: ["Node.js", "Python", "PHP", "Go", "Java"] },
    { category: "Mobile", techs: ["React Native", "Flutter", "Swift", "Kotlin"] },
    { category: "Database", techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"] },
    { category: "Cloud", techs: ["AWS", "Google Cloud", "Azure", "Vercel", "DigitalOcean"] },
    { category: "AI/ML", techs: ["OpenAI", "TensorFlow", "PyTorch", "Hugging Face"] }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionContainer>
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">Our Tech Stack</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Technologies We Master
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We work with cutting-edge technologies to build robust, scalable, and future-proof solutions.
            </p>
          </div>
        </SectionContainer>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                {stack.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {stack.techs.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    className="px-4 py-2 bg-slate-800/50 border border-white/10 rounded-lg text-gray-300 text-sm hover:border-blue-500/30 hover:text-blue-400 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles size={48} className="text-yellow-300 mx-auto mb-6"/>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Let's discuss how DragonDevs can help transform your business with innovative software solutions.
            We're excited to hear about your project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Get Started Today <ArrowRight size={20}/>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main About Page Component
const AboutPage = () => {
  return (
    <div className=" min-h-screen">
      <AboutHero />
      <WhatIsDragonDevs />
      <MissionSection />
      <CoreValuesSection />
      <VisionSection />
      <WhatWeDoSection />
      <WhyChooseUsSection />
      <TeamSection />
      <TechnologiesSection />
      <CTASection />
      <Footer/>
    </div>
  );
};

export default AboutPage;