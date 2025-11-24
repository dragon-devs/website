// Updated MinimalNavbar with next-themes + shadcn/ui styling
// Drop this into your component file. Assumes you have next-themes Provider in layout.

'use client';

import React, {useEffect, useState} from 'react';
import {FolderOpen, Home, Mail, Menu, Moon, Settings, Sun, User, X} from 'lucide-react';
import {useRouter} from 'next/navigation';
import {motion, AnimatePresence} from 'motion/react';
import Magnet from '@/components/Magnet';
import {useTheme} from 'next-themes';

const MinimalNavbar = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const [activeItem, setActiveItem] = useState('home');
	const {resolvedTheme, setTheme} = useTheme();

	const {theme} = useTheme();

	useEffect(() => {
		const timer = setTimeout(() => setIsLoaded(true), 300);
		return () => clearTimeout(timer);
	}, []);

	const navItems = [
		{id: 'home', icon: Home, label: 'Home', href: '/'},
		{id: 'about', icon: User, label: 'About Us', href: '/about'},
		{id: 'case-study', icon: FolderOpen, label: 'Work', href: '/case-study'},
		{id: 'services', icon: Settings, label: 'Services', href: '/services'},
		{id: 'contact', icon: Mail, label: 'Contact Us', href: '/#contact'},
	];

	// Light/Dark dynamic styles
	const themeStyles = {
		bg: resolvedTheme === 'dark' ? 'bg-foreground/5' : 'bg-black/5',
		hoverBg: resolvedTheme === 'dark' ? 'hover:bg-foreground/10' : 'hover:bg-black/10',
		border: resolvedTheme === 'dark' ? 'border-foreground/20' : 'border-black/20',
		labelBg: resolvedTheme === 'dark' ? 'bg-foreground/5' : 'bg-black/5',
	};

	const NavIcon = ({item, isMobile = false}) => {
		const Icon = item.icon;
		const router = useRouter();
		const isActive = activeItem === item.id;

		return (
			<div className="relative group">
				<button
					onClick={() => {
						setActiveItem(item.id);
						router.push(item.href);
						if (isMobile) setIsMobileOpen(false);
					}}
					className={`
            w-12 h-12 rounded-full flex items-center justify-center
            backdrop-blur-sm border transition-all duration-300
            ${themeStyles.bg} ${themeStyles.border}
            ${themeStyles.hoverBg} hover:scale-110 hover:shadow-lg
            ${isActive ? 'bg-primary/20 border-primary/40 shadow-primary/25 text-primary' : ''}
          `}
				>
					<Magnet padding={25} magnetStrength={6}>
						<Icon
							size={18}
							className={`transition-all duration-300 ${isActive ? 'text-primary' : 'text-muted-foreground'} group-hover:text-foreground`}
						/>
					</Magnet>

					{/* Label */}
					{item.label && <div
              className={`
              absolute right-16 top-1/2 -translate-y-1/2 w-28 text-sm font-semibold
              text-center whitespace-nowrap border backdrop-blur-md py-1.5 px-2
              ${themeStyles.labelBg} ${themeStyles.border}
              transition-all duration-300
              ${isActive ? 'bg-primary/20 text-primary border-primary/40 shadow-primary/25' : ''}
              ${isMobile
								? 'opacity-100 translate-x-0 visible'
								: 'opacity-0 translate-x-2 invisible group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible'}
            `}
          >
						{item.label}
          </div>}
				</button>
			</div>
		);
	};

	return (
		<>
			<button
				onClick={() => setTheme(theme === "dark" ? 'light' : 'dark')}
				className={`lg:flex hidden fixed top-4 md:top-6 right-4 md:right-6 z-50 w-12 h-12 rounded-full items-center justify-center backdrop-blur-sm border transition-all duration-700 ${
					isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
				} ${themeStyles.bg} ${themeStyles.border}`}
			>
				<Magnet padding={25} magnetStrength={6}>
					{theme === "dark" ? <Moon size={18}/> : <Sun size={18}/>}
				</Magnet>
			</button>
			{/* Desktop */}
			<nav
				className={`fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-4 transition-all duration-700 ${
					isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
				}`}
			>

				{navItems.map((item, index) => (
					<div
						key={item.id}
						style={{
							transition: 'all 0.5s ease-out',
							transitionDelay: isLoaded ? `${index * 100 + 200}ms` : '0ms',
							transform: isLoaded ? 'translateX(0)' : 'translateX(50px)',
							opacity: isLoaded ? 1 : 0,
						}}
					>
						<NavIcon item={item}/>
					</div>
				))}
			</nav>

			{/* Mobile */}
			<div className="lg:hidden">
				{/* Toggle */}
				<button
					onClick={() => setTheme(theme === "dark" ? 'light' : 'dark')}
					className={`fixed top-4 md:top-6 left-4 md:left-6 z-50 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all duration-700 ${
						isLoaded ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-full'
					} ${themeStyles.bg} ${themeStyles.border}`}
				>
					{theme === "dark" ? <Moon size={18}/> : <Sun size={18}/>}
				</button>
				<button
					onClick={() => setIsMobileOpen(!isMobileOpen)}
					className={`fixed top-4 md:top-6 right-4 md:right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all duration-700 ${
						isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
					} ${themeStyles.bg} ${themeStyles.border}`}
				>
					{isMobileOpen ? <X size={18} className="text-red-400"/> : <Menu size={18} className="text-foreground"/>}
				</button>

				{/* Mobile panel */}
				<AnimatePresence>
					{isMobileOpen && (
						<motion.div
							initial={{opacity: 0, x: 32}}
							animate={{opacity: 1, x: 0}}
							exit={{opacity: 0, x: 32}}
							transition={{duration: 0.5, ease: 'easeOut'}}
							className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40"
						>
							<div className="flex flex-col space-y-4">
								{navItems.map((item, index) => (
									<motion.div
										key={item.id}
										initial={{opacity: 0, x: 30}}
										animate={{opacity: 1, x: 0}}
										exit={{opacity: 0, x: 30}}
										transition={{duration: 0.4, ease: 'easeOut', delay: index * 0.08}}
									>
										<NavIcon item={item} isMobile/>
									</motion.div>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Backdrop */}
				<div
					onClick={() => setIsMobileOpen(false)}
					className={`fixed inset-0 bg-black/10 backdrop-blur-sm z-30 transition-opacity duration-300 ${
						isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
					}`}
				/>
			</div>
		</>
	);
};

export default MinimalNavbar;
