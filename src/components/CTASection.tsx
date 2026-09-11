"use client"
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
      {/* The tiled white-circle SVG that used to wash this section is gone: at
          10% white it was invisible on the light theme and a smudge on the
          dark one, and the page already carries one grain layer. */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <InViewReveal>
          <span className="eyebrow">Next step</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-5 mb-6">
            Have an idea worth building?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Tell us what you're working on. We'll tell you <strong className="font-semibold text-foreground">honestly whether we're the right fit</strong>
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
