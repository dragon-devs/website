
import React from "react";
import Image from "next/image"
import {Separator} from "@/components/ui/separator";
import {FaGithub, FaLinkedinIn, FaWhatsapp, FaXTwitter} from "react-icons/fa6";
export const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, label: "GitHub", link: "https://github.com/dragon-devs" },
    { icon: FaLinkedinIn, label: "LinkedIn", link: "https://www.linkedin.com/company/dragondevs/", color: "text-blue-500" },
    { icon: FaXTwitter, label: "X", link: "https://x.com/dragondevs_" },
    { icon: FaWhatsapp, label: "Whatsapp", link: "https://wa.me/+923466955928?text=Hello%20%2C%20I'm%20interested%20in%20your%20services!" , color: "text-green-500", }
  ];

  const footerLinks = {
    studio: [
      { label: "About", link: "/about" },
      { label: "Services", link: "/services" },
      { label: "Work", link: "/case-studies" },
      { label: "Contact", link: "/contact" }
    ],
    products: [
      { label: "BizStock", link: "https://bizstock.net" },
      { label: "Case Study", link: "/case-studies/bizstock-pos-inventory" }
    ],
    legal: [
      { label: "Privacy Policy", link: "/privacy" },
      { label: "Terms of Service", link: "/terms" }
    ]
  };

  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 p-1 rounded-lg flex items-center justify-center">
                <Image alt={"dragondevs"} className="dark:block hidden" width={50} height={50} src="/svg-transparent-white.svg" />
                <Image alt={"dragondevs"} className="dark:hidden block" width={50} height={50} src="/svg-transparent-black.svg" />
              </div>
              <span className="text-2xl font-black text-foreground">dragon<span className="font-light">devs</span></span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A small digital product engineering studio. We design and build web apps,
              custom software, and our own products — from idea to deployment.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  aria-label={social.label}
                  className="w-10 h-10 border border-muted-foreground/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary/80 hover:border-blue-500/30 transition-all"
                >
                  <social.icon className={social.color} size={20}/>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-foreground font-semibold mb-4">Studio</p>
            <ul className="space-y-3">
              {footerLinks.studio.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="text-muted-foreground hover:text-primary/80 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-foreground font-semibold mb-4">Products</p>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="text-muted-foreground hover:text-primary/80 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-foreground font-semibold mb-4">Legal</p>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="text-muted-foreground hover:text-primary/80 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-6 w-screen relative left-1/2 right-1/2 -ml-[50vw]">
          <Separator />
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} dragondevs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/terms" className="text-muted-foreground hover:text-primary/80 transition-colors">Terms of Service</a>
            <a href="/privacy" className="text-muted-foreground hover:text-primary/80 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
