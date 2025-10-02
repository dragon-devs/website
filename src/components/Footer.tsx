
import {Code, Github, Linkedin, Twitter} from "lucide-react";
import React from "react";

export const Footer = () => {
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
