"use client"
import {ArrowRight, Mail, MapPin, Phone} from "lucide-react";
import {motion} from "framer-motion";
import React from "react";

export const ContactSection = () => {
  const contactInfo = [
    {icon: Mail, label: "Email", value: "info@dragondevs.co", link: "mailto:info@dragondevs.co"},
    {icon: Phone, label: "Phone", value: "+92 346 6955928", link: "tel:+923466955928"},
    {icon: MapPin, label: "Location", value: "Islamabad, Pakistan", link: null}
  ];

  return (
    <section id={"contact"} className="py-24 relative">
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto md:px-6 px-4">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className="flex flex-col gap-6 justify-between h-full mb-16"
        >
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-4 mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl ">
              Ready to start your project? Contact us today and let's discuss how we can help bring your vision to life.
            </p>
          </div>
          <div className="grid md:grid-cols-1 md:gap-6 gap-4">
            {contactInfo.map((info, index) => (
              <motion.a
                href={info.link ? info.link : '#'}
                key={index}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                className="relative  overflow-hidden border border-border  p-6  hover:border-primary/50 transition-all duration-700"
              >
                <div className="absolute -right-2 -bottom-8  flex items-center justify-center  ">
                  <info.icon size={140} className="text-muted-foreground opacity-10"/>
                </div>
                <h4 className="text-foreground font-semibold mb-2 text-2xl tracking-tight">{info.label}</h4>
                {info.link ? (
                  <a href={info.link} className="text-muted-foreground hover:text-primary/80 transition-colors">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.value}</p>
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
        <div className={"md:gap-6 gap-4 "}>
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="w-full h-full border border-border md:p-8 p-4"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 md:gap-6 gap-4">
                <div>
                  <label className="block text-foreground/80 mb-2 text-sm font-medium">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3  border border-border  text-foreground placeholder-muted-foreground focus:border-primary/50 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-foreground/80 mb-2 text-sm font-medium">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3  border border-border  text-foreground placeholder-muted-foreground focus:border-primary/50 focus:outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-foreground/80 mb-2 text-sm font-medium">Subject</label>
                <input
                  required
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3  border border-border  text-foreground placeholder-muted-foreground focus:border-primary/50 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-foreground/80 mb-2 text-sm font-medium">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3  border border-border  text-foreground placeholder-muted-foreground focus:border-primary/50 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 text-foreground border border-border hover:border-primary/50  font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Send Message <ArrowRight size={20}/>
              </button>
            </form>
            <div className={"pt-6 text-lg "}>
              Not a fan of forms?
              <a
                href="https://calendly.com/dragondevs/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary ml-2"
              >
                Book a call directly instead!
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
