"use client"
import {ArrowRight, Magnet, Star} from "lucide-react";
import React from "react";
import {InViewReveal} from "@/components/motion";
import MagnetButton from "@/components/custom/MagnetButton";
import {useRouter, usePathname} from "next/navigation";
import {goToContact} from "@/lib/contact-nav";

export const CTASection = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="py-24  relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <InViewReveal>
          {/*<Star size={48} className="text-yellow-300 mx-auto mb-6"/>*/}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Have an idea worth building?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Tell us what you're working on. We'll tell you honestly whether we're the right fit
            and how we'd approach it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Real hrefs, then the click handler takes over. Previously both
                  were plain buttons, so the site's primary call to action was
                  a link no crawler could follow — and neither could a reader
                  middle-clicking to open it in a new tab. */}
              <MagnetButton
                // This section renders at the foot of every page, so its label
                // has to stay distinct from the CTAs already in the page body —
                // "Start Your Project" in the hero, "Tell us about it" on
                // /services. Repeated anchor text is the thing being avoided.
                label={"Start the Conversation"}
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault();
                  goToContact(router, pathname);
                }}
              />
              <MagnetButton
                variant={'secondary'}
                label={"Schedule a Call"}
                href="https://calendly.com/dragondevs/30min"
                external
              />
          </div>
        </InViewReveal>
      </div>
    </section>
  );
};
