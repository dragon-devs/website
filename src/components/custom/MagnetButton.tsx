'use client';

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Magnet from "@/components/Magnet";
import { cn } from "@/lib/utils";

interface MagnetButtonProps {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  magnetStrength?: number;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

const MagnetButton: React.FC<MagnetButtonProps> = ({
                                                     label,
                                                     onClick,
                                                     icon,
                                                     className,
                                                     magnetStrength = 10,
                                                     disabled = false,
                                                     variant = "primary",
                                                   }) => {
  return (
    <Magnet padding={25} disabled={disabled} magnetStrength={magnetStrength}>
      <motion.button
        whileHover={{
          scale: 1.02,
          ...(variant === "primary" && {
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
          }),
        }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "md:w-auto w-full px-8 py-4 rounded-full font-semibold text-lg",
          variant === "primary" &&
          "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl flex items-center gap-3",
          variant === "secondary" &&
          "border border-white/20 text-white backdrop-blur-sm hover:bg-white/5 transition-all duration-300",
          className
        )}
      >
        <Magnet padding={25} disabled={disabled} magnetStrength={8}>
          {variant === "primary" ? (
            <div className="flex justify-center items-center gap-2">
              <p>{label}</p>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {icon || <ArrowRight size={20} />}
              </motion.div>
            </div>
          ) : (
            <span>{label}</span>
          )}
        </Magnet>
      </motion.button>
    </Magnet>
  );
};

export default MagnetButton;
