"use client"
import {ArrowRight, Mail, MapPin, Phone} from "lucide-react";
import {motion} from "framer-motion";
import React from "react";

export const ContactSection = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@dragondevs.com", link: "mailto:hello@dragondevs.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", link: "tel:+15551234567" },
    { icon: MapPin, label: "Location", value: "Lahore, Punjab, Pakistan", link: null }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Ready to start your project? Contact us today and let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>
        <div className={"flex"}>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className=" border border-border  p-6 text-center hover:border-primary/50 transition-all duration-700"
            >
              <div className=" w-14 h-14  flex items-center justify-center mx-auto mb-4">
                <info.icon size={24} className="text-primary"/>
              </div>
              <h4 className="text-foreground font-semibold mb-2">{info.label}</h4>
              {info.link ? (
                <a href={info.link} className="text-muted-foreground hover:text-primary/80 transition-colors">
                  {info.value}
                </a>
              ) : (
                <p className="text-muted-foreground">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto  border border-border l p-8"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Send Us a Message</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-foreground/80 mb-2 text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3  border border-border  text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-foreground/80 mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3  border border-border  text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-foreground/80 mb-2 text-sm font-medium">Subject</label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full px-4 py-3  border border-border  text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-foreground/80 mb-2 text-sm font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3  border border-border  text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-foreground  font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Send Message <ArrowRight size={20}/>
            </button>
          </form>
        </motion.div>
        </div>
      </div>
    </section>
  );
};
