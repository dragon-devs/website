'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, Code, Zap, Globe, Shield, Cpu, ChevronRight,
  Layers, Rocket, Users, CheckCircle2, Mail, Phone, MapPin,
  Github, Linkedin, Twitter, Star, TrendingUp, Award, Target
} from 'lucide-react';

// Magnet Effect Component
const Magnet = ({ children, padding = 25, magnetStrength = 10, disabled = false }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const ref = React.useRef(null);

  const handleMouseMove = (e) => {
    if (disabled || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    if (Math.abs(distanceX) < padding && Math.abs(distanceY) < padding) {
      setPosition({
        x: distanceX * (magnetStrength / 10),
        y: distanceY * (magnetStrength / 10)
      });
      setIsHovered(true);
    } else {
      setPosition({ x: 0, y: 0 });
      setIsHovered(false);
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

// CountUp Component
const CountUp = ({ from = 0, to, duration = 1, separator = '' }) => {
  const [count, setCount] = useState(from);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const steps = 60;
    const increment = (to - from) / steps;
    const stepDuration = (duration * 1000) / steps;
    let current = from;

    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [hasStarted, from, to, duration]);

  return <span ref={ref}>{count}</span>;
};

// Hero Section Component
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingIcons = [
    { icon: Code, delay: 0, x: '10%', y: '20%' },
    { icon: Zap, delay: 0.5, x: '80%', y: '15%' },
    { icon: Globe, delay: 1, x: '15%', y: '70%' },
    { icon: Shield, delay: 1.5, x: '75%', y: '65%' },
    { icon: Cpu, delay: 2, x: '50%', y: '10%' },
  ];

  return (
    <div className="relative md:py-0 py-20 min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-primary/30"/>
        </svg>
      </div>

      {/* Dynamic Gradient Orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        style={{ left: '10%', top: '20%' }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 blur-3xl"
        animate={{
          x: mousePosition.x * -0.015,
          y: mousePosition.y * -0.015,
        }}
        style={{ right: '15%', bottom: '20%' }}
      />

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.6,
            scale: 1,
            y: [-10, 10, -10],
          }}
          transition={{
            delay: item.delay,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          style={{ left: item.x, top: item.y }}
        >
          <div className="p-3 rounded-xl opacity-50 bg-white/5 backdrop-blur-sm border border-white/10">
            <item.icon size={24} className="text-blue-400"/>
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
          >
            <Zap size={16} className="mr-2"/>
            Next-Generation Software Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl tracking-tight lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
          >
            Code Beyond
            <br/>
            <span className="bg-gradient-to-r tracking-tight from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Boundaries
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl tracking-tight md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 md:leading-relaxed leading-tight"
          >
            We craft intelligent software solutions that transform ideas into reality.
            From AI-powered applications to scalable enterprise systems, we build the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center select-none"
          >
            <Magnet padding={25} disabled={false} magnetStrength={10}>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="md:w-auto w-full group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg flex items-center justify-center gap-3 shadow-xl"
              >
                Start Your Project
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20}/>
                </motion.div>
              </motion.button>
            </Magnet>

            <Magnet padding={25} disabled={false} magnetStrength={10}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="md:w-auto w-full px-8 py-4 border border-white/20 rounded-full text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
              >
                View Our Work
              </motion.button>
            </Magnet>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
          >
            {[
              { number: 28, segment: "+", label: "Projects Delivered" },
              { number: 19, segment: "+", label: "Happy Clients" },
              { number: 98, segment: "%", label: "Success Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <CountUp from={0} to={stat.number} duration={1}/>{stat.segment}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

// About Us Section
const AboutSection = () => {
  const values = [
    { icon: Target, title: "Mission-Driven", desc: "Building products that solve real problems" },
    { icon: Award, title: "Excellence", desc: "Delivering premium quality in every project" },
    { icon: TrendingUp, title: "Innovation", desc: "Staying ahead with cutting-edge technology" },
    { icon: Users, title: "Client-First", desc: "Your success is our priority" }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">About DragonDevs</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Building the Future, One Line at a Time
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We're a passionate team of developers and designers committed to creating exceptional digital experiences.
            While we work with clients today, we're building our own innovative products for tomorrow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                DragonDevs was founded with a vision to bridge the gap between cutting-edge technology and real-world business needs.
                We started as freelancers, helping businesses transform their digital presence, and now we're evolving into a product company.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our dual focus allows us to stay grounded in client needs while pursuing innovation. Every project we take on
                informs our product development, and every product we build enhances our service delivery.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 rounded-2xl h-80 border border-white/10 flex items-center justify-center"
          >
            <div className="text-center text-gray-500">
              <Layers size={64} className="mx-auto mb-4 opacity-50"/>
              <p className="text-sm">Team Photo / Office Image Placeholder</p>
            </div>
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
              className="bg-slate-900/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all"
            >
              <value.icon size={32} className="text-blue-400 mx-auto mb-4"/>
              <h4 className="text-white font-semibold mb-2">{value.title}</h4>
              <p className="text-gray-400 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all">
            Learn More About Us <ChevronRight size={20}/>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
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

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From concept to deployment, we offer end-to-end development services tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all group"
            >
              <div className="bg-blue-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
                <service.icon size={28} className="text-blue-400"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle2 size={16} className="text-green-400 flex-shrink-0"/>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all">
            View All Services <ChevronRight size={20}/>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
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

  return (
    <section className="py-24 bg-slate-950 relative">
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
          {projects.map((project, index) => (
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
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full font-semibold hover:bg-white/5 transition-all">
            View All Projects <ChevronRight size={20}/>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@dragondevs.com", link: "mailto:hello@dragondevs.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", link: "tel:+15551234567" },
    { icon: MapPin, label: "Location", value: "Lahore, Punjab, Pakistan", link: null }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Ready to start your project? Contact us today and let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all"
            >
              <div className="bg-blue-500/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <info.icon size={24} className="text-blue-400"/>
              </div>
              <h4 className="text-white font-semibold mb-2">{info.label}</h4>
              {info.link ? (
                <a href={info.link} className="text-gray-400 hover:text-blue-400 transition-colors">
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-400">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-slate-900/50 border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Send Us a Message</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">Subject</label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Send Message <ArrowRight size={20}/>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", link: "#" },
    { icon: Linkedin, label: "LinkedIn", link: "#" },
    { icon: Twitter, label: "Twitter", link: "#" }
  ];

  const footerLinks = {
    company: [
      { label: "About Us", link: "#about" },
      { label: "Our Team", link: "#team" },
      { label: "Careers", link: "#careers" },
      { label: "Blog", link: "#blog" }
    ],
    services: [
      { label: "Web Development", link: "#services" },
      { label: "Custom Software", link: "#services" },
      { label: "MVP Development", link: "#services" },
      { label: "AI Integration", link: "#services" }
    ],
    resources: [
      { label: "Case Studies", link: "#projects" },
      { label: "Documentation", link: "#docs" },
      { label: "Support", link: "#support" },
      { label: "Privacy Policy", link: "#privacy" }
    ]
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Code size={24} className="text-white"/>
              </div>
              <span className="text-2xl font-bold text-white">DragonDevs</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building innovative software solutions that empower businesses and transform ideas into reality.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-900 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all"
                >
                  <social.icon size={20}/>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 DragonDevs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
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
          <Star size={48} className="text-yellow-300 mx-auto mb-6"/>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join the ranks of successful businesses that trust DragonDevs with their digital transformation.
            Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Magnet padding={20} magnetStrength={8}>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-2">
                Start Your Project <ArrowRight size={20}/>
              </button>
            </Magnet>
            <Magnet padding={20} magnetStrength={8}>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
                Schedule a Call
              </button>
            </Magnet>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "DragonDevs transformed our outdated system into a modern, efficient platform. Their expertise and dedication exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, E-Shop Pro",
      content: "The team delivered our e-commerce platform ahead of schedule with exceptional quality. Highly recommended for any serious project.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, HealthCare Plus",
      content: "Professional, responsive, and technically brilliant. They understood our complex requirements and delivered a perfect solution.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400"/>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div className=" min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;