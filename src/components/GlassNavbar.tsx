'use client';

import React, {useEffect, useState} from 'react';
import {FolderOpen, Home, Mail, Menu, Settings, User, X} from 'lucide-react';
import {useRouter} from "next/navigation";
import Magnet from "@/components/Magnet";
import {motion, AnimatePresence} from "framer-motion";
import GlassSurface from "@/components/GlassSurface";

const GlassMinimalNavbar = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const [activeItem, setActiveItem] = useState('home');

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoaded(true);
		}, 300);
		return () => clearTimeout(timer);
	}, []);

	const navItems = [
		{id: 'home', icon: Home, label: 'Home', href: '/'},
		{id: 'about', icon: User, label: 'About Us', href: '/about'},
		{id: 'case-study', icon: FolderOpen, label: 'Projects', href: '/case-study'},
		{id: 'services', icon: Settings, label: 'Services', href: '/services'},
		{id: 'contact', icon: Mail, label: 'Contact Us', href: '/contact'},
	];

	const NavIcon = ({item, isMobile = false}) => {
		const Icon = item.icon;
		const isActive = activeItem === item.id;
		const router = useRouter()
		return (
			<button className="relative group"  onClick={() => {
				setActiveItem(item.id)
				router.push(item.href)
				if (isMobile) {
					setIsMobileOpen(false);
				}
			}}>
				<div
					className={`top-2 absolute blur-sm size-5 ${isActive ? 'text-primary bg-primary' : 'group-hover:text-foreground'} `}></div>
				<GlassSurface
					width={50}
					height={50}
					borderRadius={100}
					className="my-custom-class"
				>
					<div
						// className={`
						//   w-12 h-12 rounded-full flex items-center justify-center
						//   transition-all duration-300 ease-out
						//   backdrop-blur-sm border border-foreground/20
						//   hover:scale-110 hover:shadow-lg hover:shadow-primary/20
						//   ${isActive
						// 	? 'bg-primary/20 border-primary/40 shadow-md shadow-primary/25'
						// 	: 'bg-foreground/5 hover:bg-foreground/10 hover:border-foreground/30'
						// }
						// `}
						className={`
	              transition-all duration-300
	              ${isActive ? 'text-primary' : 'text-gray-300 group-hover:text-foreground'}
	            `}
					>
						<Magnet padding={25} disabled={false} magnetStrength={6}>

							<Icon
								size={18}
								className={`
	              transition-all duration-300
	              ${isActive ? 'text-primary' : 'text-gray-300 group-hover:text-foreground'}
	            `}
							/>
						</Magnet>

					</div>
				</GlassSurface>


				<div
					className={`
            absolute text-center font-mono ${isMobile ? 'right-16' : 'right-16'} top-1/2 -translate-y-1/2 
            text-foreground text-sm font-semibold  leading-none
            shadow-xl space-nowrap
            transition-all duration-300 ease-out 
            ${isMobile
						? 'opacity-100 translate-x-0 visible'
						: 'group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible opacity-0 translate-x-2 invisible'
					}
          `}
				>
					<div
						className={` absolute blur-sm size-5 w-20 ${isActive ? 'text-primary bg-primary' : 'group-hover:text-foreground'} `}></div>
					<GlassSurface
						height={30}
						width={120}
						borderRadius={5}
						className={`${isActive ? 'text-primary' : ''}`}
					>
						{item.label}
					</GlassSurface>
				</div>
			</button>
		);
	};

	return (
		<>
			{/* Desktop Navigation */}
			<nav
				className={`
          fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50
          hidden lg:flex flex-col space-y-4
          transition-all duration-700 ease-out
          ${isLoaded
					? 'opacity-100 translate-x-0'
					: 'opacity-0 translate-x-full'
				}
        `}
			>
				{navItems.map((item, index) => (
					<div
						key={item.id}
						className="transition-all duration-500 ease-out"
						style={{
							transitionDelay: isLoaded ? `${index * 100 + 200}ms` : '0ms',
							transform: isLoaded ? 'translateX(0)' : 'translateX(50px)',
							opacity: isLoaded ? 1 : 0,
						}}
					>
						<NavIcon item={item}/>
					</div>
				))}
			</nav>

			{/* Mobile Navigation */}
			<div className="lg:hidden">
				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsMobileOpen(!isMobileOpen)}
					className={`
            fixed top-4 md:top-6 right-4 md:right-6 z-50 rounded-full
            flex items-center justify-center
            transition-all duration-700 ease-out
            ${isLoaded
						? 'opacity-100 translate-x-0'
						: 'opacity-0 translate-x-full'
					}
            ${isMobileOpen
						? ''
						: ''
					}
          `}
				>
					<GlassSurface
						width={50}
						height={50}
						borderRadius={100}
						className=""
					>
						{isMobileOpen ? (
							<X size={18} className="text-red-400"/>
						) : (
							<Menu size={18} className="text-foreground"/>
						)}
					</GlassSurface>
				</button>

				{/* Mobile Menu Panel */}
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
										transition={{
											duration: 0.4,
											ease: 'easeOut',
											delay: index * 0.08, // Stagger entrance
										}}
										exitTransition={{
											delay: (navItems.length - index - 1) * 0.05, // Reverse stagger on exit
										}}
									>
										<NavIcon item={item} isMobile={true}/>
									</motion.div>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Mobile Backdrop */}
				<div
					className={`
            fixed inset-0 bg-black/10 backdrop-blur-sm z-30
            transition-opacity duration-300 ease-out
            ${isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
					onClick={() => setIsMobileOpen(false)}
				/>
			</div>
		</>
	);
};

export default GlassMinimalNavbar;