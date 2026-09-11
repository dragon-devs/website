"use client";

import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const SITE = "https://dragondevs.co";
const BLURB = "dragondevs — a digital product engineering studio";

/**
 * Share targets for the current page, in the footer bottom bar.
 *
 * A client component so `usePathname` can point each target at the page the
 * reader is actually on; the footer itself stays a server component. These
 * are share endpoints, not the profile links above them — the two do
 * different jobs, which is why both exist.
 */
export default function ShareLinks() {
  const pathname = usePathname();
  const url = encodeURIComponent(`${SITE}${pathname === "/" ? "" : pathname}`);
  const text = encodeURIComponent(BLURB);

  const targets = [
    {
      icon: FaXTwitter,
      label: "Share this page on X",
      href: `https://x.com/intent/post?url=${url}&text=${text}`,
    },
    {
      icon: FaLinkedinIn,
      label: "Share this page on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    },
    {
      icon: FaFacebookF,
      label: "Share this page on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    },
    {
      icon: FaWhatsapp,
      label: "Share this page on WhatsApp",
      href: `https://api.whatsapp.com/send?text=${text}%20${url}`,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="eyebrow">Share</span>
      <div className="flex gap-2">
        {targets.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="chamfer-sm w-9 h-9 flex items-center justify-center
              bg-foreground/[0.055] text-muted-foreground hover:text-primary
              hover:bg-foreground/[0.1] transition-colors duration-300"
          >
            <Icon size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}
