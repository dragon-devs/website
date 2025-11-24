"use client"
import {motion} from "motion/react";
import {ArrowRight, Magnet, Star} from "lucide-react";
import React from "react";
import MagnetButton from "@/components/custom/MagnetButton";
import {useRouter} from "next/navigation";

export const CTASection = () => {
  const router = useRouter();
  return (
    <section className="py-24  relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/*<Star size={48} className="text-yellow-300 mx-auto mb-6"/>*/}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Join the ranks of successful businesses that trust dragondevs with their digital transformation.
            Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <MagnetButton label={"Start Your Project"} onClick={() => router.push("/#contact")} />
              <MagnetButton variant={'secondary'} label={"Schedule a Call"} onClick={() => router.push("https://calendly.com/dragondevs/30min")} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
