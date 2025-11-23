'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useTheme } from 'next-themes';

const BackToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);
	const scrollRef = useRef<HTMLElement | null>(null);
	const { resolvedTheme } = useTheme();

	// Precompute classes once (no re-render jitter)
	const baseStyles =
		"fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 size-12 rounded-full flex items-center justify-center backdrop-blur-sm border transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20";

	const themeBg = resolvedTheme === "dark" ? "bg-foreground/5" : "bg-black/5";
	const themeBorder = resolvedTheme === "dark" ? "border-foreground/20" : "border-black/20";
	const iconColor = resolvedTheme === "dark" ? "text-muted-foreground" : "text-black/60";

	useEffect(() => {
		const sc = document.querySelector('[data-radix-scroll-area-viewport]') as HTMLElement;
		if (!sc) return;

		scrollRef.current = sc;

		const handleScroll = () => {
			setIsVisible(sc.scrollTop > 300);
		};

		sc.addEventListener('scroll', handleScroll, { passive: true });

		return () => sc.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		if (!scrollRef.current) return;
		scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ opacity: 0, scale: 0.7, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.7, y: 20 }}
					transition={{
						duration: 0.35,
						ease: [0.16, 1, 0.3, 1], // smoother, iOS-like easing
					}}
					whileHover={{ scale: 1.12 }}
					whileTap={{ scale: 0.94 }}
					onClick={scrollToTop}
					className={`${baseStyles} ${themeBg} ${themeBorder} hover:bg-primary/20 hover:border-primary/40`}
				>
					<ArrowUp
						size={20}
						className={`${iconColor} transition-colors hover:text-primary`}
					/>
				</motion.button>
			)}
		</AnimatePresence>
	);
};

export default BackToTopButton;
