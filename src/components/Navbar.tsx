'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { FolderOpen, Home, Mail, Menu, Settings, User, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'motion/react';
import Magnet from '@/components/Magnet';
import ThemeToggle from '@/components/ThemeToggle';
import { goToContact } from '@/lib/contact-nav';
import { useFinePointer } from '@/lib/use-fine-pointer';
import { cn } from '@/lib/utils';

type NavItem = {
    id: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    label: string;
    href: string;
};

const navItems: NavItem[] = [
    { id: 'home', icon: Home, label: 'Home', href: '/' },
    { id: 'about', icon: User, label: 'About Us', href: '/about' },
    { id: 'case-studies', icon: FolderOpen, label: 'Work', href: '/case-studies' },
    { id: 'services', icon: Settings, label: 'Services', href: '/services' },
    { id: 'contact', icon: Mail, label: 'Contact Us', href: '/#contact' },
];

/**
 * Theme-dependent chrome, as Tailwind `dark:` variants rather than a
 * `resolvedTheme` branch. The JS version re-rendered the entire nav whenever
 * next-themes resolved, and rendered the buttons unstyled until it did.
 */
const CIRCLE =
    'w-12 h-12 rounded-full flex items-center justify-center border ' +
    'bg-black/5 dark:bg-white/5 border-black/20 dark:border-white/20';

const isItemActive = (item: NavItem, pathname: string) =>
    pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

interface NavIconProps {
    item: NavItem;
    /** Rendered inside the mobile sheet: labels always visible, no blur, no magnet. */
    mobile?: boolean;
    onNavigate: (item: NavItem) => void;
}

const NavIcon = ({ item, mobile = false, onNavigate }: NavIconProps) => {
    const pathname = usePathname();
    const finePointer = useFinePointer();
    const Icon = item.icon;
    const isActive = isItemActive(item, pathname);

    const icon = (
        <Icon
            size={18}
            className={cn(
                'transition-colors duration-200',
                isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
            )}
        />
    );

    return (
        <div className="relative group">
            <button
                type="button"
                onClick={() => onNavigate(item)}
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                    CIRCLE,
                    // The sheet already sits on a blurred backdrop, so a further
                    // backdrop-filter per pill softens pixels that are already
                    // soft — while stacking eleven blur layers on the phone GPU,
                    // the single biggest reason the menu stuttered. Same fill,
                    // no second blur.
                    mobile
                        ? 'transition-colors duration-200'
                        : 'backdrop-blur-sm transition-[transform,background-color,border-color,box-shadow] duration-300 hover:bg-black/10 dark:hover:bg-white/10 hover:scale-110 hover:shadow-lg',
                    isActive && 'bg-primary/20 border-primary/40 shadow-primary/25 text-primary'
                )}
            >
                {/* Magnet is a mousemove listener with a getBoundingClientRect per
                    event — pure overhead on a touchscreen, where it can never fire
                    meaningfully but still runs on the synthetic move a tap emits. */}
                {finePointer && !mobile ? (
                    <Magnet padding={25} magnetStrength={6}>
                        {icon}
                    </Magnet>
                ) : (
                    icon
                )}

                <span
                    className={cn(
                        'absolute right-16 top-1/2 -translate-y-1/2 w-28 text-sm font-semibold',
                        'text-center whitespace-nowrap border py-1.5 px-2',
                        'border-black/20 dark:border-white/20',
                        isActive
                            ? 'bg-primary/20 text-primary border-primary/40 shadow-primary/25'
                            : 'bg-black/5 dark:bg-white/5',
                        mobile
                            ? 'opacity-100 visible'
                            : 'backdrop-blur-md opacity-0 translate-x-2 invisible transition-all duration-300 ' +
                              'group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible'
                    )}
                >
                    {item.label}
                </span>
            </button>
        </div>
    );
};

const MinimalNavbar = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const reduceMotion = useReducedMotion();

    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    // Any route change closes the sheet, including back/forward.
    useEffect(() => {
        setIsMobileOpen(false);
    }, [pathname]);

    // Freeze the page behind the sheet. Beyond the usual reason (the background
    // scrolling under a menu feels broken), a scrolling backdrop forces the
    // blur behind the sheet to re-rasterise every frame — the jank the reader
    // sees as the menu "lagging".
    useEffect(() => {
        if (!isMobileOpen) return;

        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = previous;
        };
    }, [isMobileOpen]);

    useEffect(() => {
        if (!isMobileOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMobileOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isMobileOpen]);

    const navigate = useCallback(
        (item: NavItem) => {
            setIsMobileOpen(false);
            if (item.id === 'contact') {
                goToContact(router, pathname);
            } else {
                router.push(item.href);
            }
        },
        [router, pathname]
    );

    // Short, transform/opacity-only, and orchestrated from the parent so the
    // cascade costs one animation driver instead of five independent ones.
    // Opening lands in ~0.35s; the previous 0.5s tweens plus 0.08s steps took
    // 0.72s before the last item settled.
    const sheetVariants: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.035, delayChildren: 0.02 } },
        exit: { transition: { staggerChildren: reduceMotion ? 0 : 0.02, staggerDirection: -1 } },
    };

    const itemVariants: Variants = reduceMotion
        ? {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.01 } },
              exit: { opacity: 0, transition: { duration: 0.01 } },
          }
        : {
              hidden: { opacity: 0, x: 24 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } },
              exit: { opacity: 0, x: 16, transition: { duration: 0.12, ease: 'easeIn' } },
          };

    return (
        <>
            <ThemeToggle />

            {/* Desktop */}
            <nav
                aria-label="Primary"
                className={cn(
                    'fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-4',
                    'transition-opacity duration-700',
                    isLoaded ? 'opacity-100' : 'opacity-0'
                )}
            >
                {navItems.map((item, index) => (
                    <div
                        key={item.id}
                        style={{
                            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                            transitionDelay: isLoaded ? `${index * 100 + 200}ms` : '0ms',
                            transform: isLoaded ? 'translateX(0)' : 'translateX(50px)',
                            opacity: isLoaded ? 1 : 0,
                        }}
                    >
                        <NavIcon item={item} onNavigate={navigate} />
                    </div>
                ))}
            </nav>

            {/* Mobile */}
            <div className="lg:hidden">
                <button
                    type="button"
                    onClick={() => setIsMobileOpen(open => !open)}
                    aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileOpen}
                    aria-controls="mobile-nav"
                    className={cn(
                        'fixed top-4 md:top-6 right-4 md:right-6 z-50',
                        CIRCLE,
                        'backdrop-blur-sm transition-opacity duration-300',
                        isLoaded ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    {isMobileOpen ? (
                        <X size={18} className="text-red-400" />
                    ) : (
                        <Menu size={18} className="text-foreground" />
                    )}
                </button>

                <AnimatePresence>
                    {isMobileOpen && (
                        <>
                            {/* Mounted only while open. Kept permanently in the tree
                                (merely `invisible`), its backdrop-filter held a
                                full-viewport compositing layer alive on every page. */}
                            <motion.div
                                key="backdrop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: reduceMotion ? 0.01 : 0.2, ease: 'easeOut' }}
                                onClick={() => setIsMobileOpen(false)}
                                className="fixed inset-0 z-30 bg-black/10 backdrop-blur-sm"
                                aria-hidden="true"
                            />

                            <motion.div
                                key="sheet"
                                id="mobile-nav"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={sheetVariants}
                                className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col space-y-4"
                            >
                                {navItems.map(item => (
                                    <motion.div key={item.id} variants={itemVariants}>
                                        <NavIcon item={item} mobile onNavigate={navigate} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default MinimalNavbar;
