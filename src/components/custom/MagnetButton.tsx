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
  size?: "sm" | "md" | "lg";
}

const MagnetButton: React.FC<MagnetButtonProps> = ({
                                                     label,
                                                     onClick,
                                                     icon,
                                                     className,
                                                     magnetStrength = 10,
                                                     disabled = false,
                                                     variant = "primary",
                                                     size = "md",
                                                   }) => {
  // Size variants
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

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
          "md:w-auto w-full rounded-full font-semibold",
          sizes[size],
          variant === "primary" &&
          "bg-gradient-to-r from-blue-600 to-purple-600 text-white/80 shadow-xl flex items-center gap-3",
          variant === "secondary" &&
          "border border-border text-foreground backdrop-blur-sm hover:bg-muted transition-all duration-300",
          className
        )}
      >
        <Magnet padding={25} disabled={disabled} magnetStrength={8}>
          { icon || variant === "primary" ?  (
            <div className="flex justify-center items-center gap-2">
              <p>{label}</p>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {icon || <ArrowRight size={size === "sm" ? 16 : size === "md" ? 20 : 24} />}
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
