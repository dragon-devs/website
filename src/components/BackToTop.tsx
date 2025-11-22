'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

const BackToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Find the scroll container (ScrollArea viewport)
		const scrollContainer = document.querySelector('[data-radix-scroll-area-viewport]');

		if (!scrollContainer) return;

		const toggleVisibility = () => {
			if (scrollContainer.scrollTop > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		scrollContainer.addEventListener('scroll', toggleVisibility);
		return () => scrollContainer.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		const scrollContainer = document.querySelector('[data-radix-scroll-area-viewport]');
		if (scrollContainer) {
			scrollContainer.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ opacity: 0, scale: 0.5, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.5, y: 20 }}
					transition={{
						duration: 0.3,
						ease: [0.4, 0, 0.2, 1]
					}}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					onClick={scrollToTop}
					className="
            fixed md:bottom-6 md:right-6 bottom-4 right-4 z-50
            size-12 rounded-full flex items-center justify-center
            bg-foreground/5 backdrop-blur-sm border border-foreground/20
            hover:bg-primary/20 hover:border-primary/40
            hover:shadow-lg hover:shadow-primary/20
            transition-colors duration-300
          "
				>
					<ArrowUp size={20} className="text-gray-300 hover:text-primary transition-colors" />
				</motion.button>
			)}
		</AnimatePresence>
	);
};

export default BackToTopButton;