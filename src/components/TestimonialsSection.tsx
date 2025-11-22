"use client"
import {motion} from "motion/react";
import {Star} from "lucide-react";
import React from "react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "Dragondevs transformed our outdated system into a modern, efficient platform. Their expertise and dedication exceeded our expectations.",
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
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto md:px-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 md:gap-8 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className=" border border-border p-8 hover:border-primary/50 duration-700 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400"/>
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
