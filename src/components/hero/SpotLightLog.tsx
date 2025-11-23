// components/hero/SpotlightLogo.tsx
'use client';

import React, {useEffect, useState, useMemo} from 'react';
import {useTheme} from 'next-themes';

interface SpotlightLogoProps {
	/** SVG path data - the actual shape of your logo */
	svgPaths?: string[];
	/** Optional: Custom viewBox for the SVG */
	viewBox?: string;
	/** Optional: Base opacity for the always-visible layer */
	baseOpacity?: {dark: number; light: number};
	/** Optional: Highlight opacity for the mouse-revealed layer */
	highlightOpacity?: {dark: number; light: number};
	/** Optional: Size of the spotlight circle in pixels */
	spotlightRadius?: number;
	/** Optional: Custom stroke color overrides */
	strokeColor?: {dark: string; light: string};
	/** Optional: Container padding */
	containerPadding?: string;
	/** Optional: Scale of the logo */
	scale?: string;
	/** Optional: Additional CSS classes for the container */
	className?: string;
}

const dragonDevsLogoPaths = [
	"M441.9,221.22A220.66,220.66,0,0,1,435,276c-.15.59-.29,1.18-.46,1.77a211.58,211.58,0,0,1-6.65,20.94,219.59,219.59,0,0,1-22.38,43.89,208.44,208.44,0,0,1-12.61,17.24c-.94,1.18-1.9,2.36-2.92,3.52A214.31,214.31,0,0,1,363.33,390c-1.16,1-2.34,2-3.52,2.92a213.38,213.38,0,0,1-17.24,12.63,219.51,219.51,0,0,1-43.89,22.36,216.6,216.6,0,0,1-21,6.67c-.59.17-1.18.31-1.77.46a220.6,220.6,0,0,1-54.75,6.86c-1.57,0-3.13,0-4.7-.06A219.66,219.66,0,0,1,79.07,390a215.07,215.07,0,0,1-26.7-26.69A219.73,219.73,0,0,1,.56,225.92c0-1.57-.06-3.13-.06-4.7a221.33,221.33,0,0,1,4.59-45,5.53,5.53,0,0,1,9.32-2.74l31.67,31.67a5.51,5.51,0,0,1,1.59,4.29q-.39,5.82-.4,11.74a174.21,174.21,0,0,0,5.1,41.94q1.83,7.41,4.3,14.58c.77,2.29,1.6,4.53,2.47,6.76a174.51,174.51,0,0,0,98.77,98.78c2.23.86,4.48,1.69,6.77,2.47q7.11,2.46,14.49,4.27a173.35,173.35,0,0,0,42,5.13c4.79,0,9.55-.2,14.25-.59a169.26,169.26,0,0,0,25.81-4.06c.66-.14,1.31-.31,2-.48q7.38-1.81,14.49-4.27a172.2,172.2,0,0,0,30.9-14.14,168.87,168.87,0,0,0,17.88-12,174.08,174.08,0,0,0,33.14-33.11,169.9,169.9,0,0,0,11.95-17.9,172,172,0,0,0,14.14-30.88q2.46-7.17,4.29-14.58c.17-.65.34-1.27.47-1.92a169.58,169.58,0,0,0,4.05-25.77c.39-4.7.59-9.46.59-14.25A173.72,173.72,0,0,0,390,179.28q-1.81-7.41-4.29-14.58c-.77-2.31-1.62-4.57-2.49-6.82a174.57,174.57,0,0,0-98.7-98.7c-2.25-.87-4.51-1.72-6.82-2.49q-7.16-2.46-14.58-4.3a174.21,174.21,0,0,0-41.94-5.1q-5.91,0-11.74.4a5.51,5.51,0,0,1-4.29-1.59L173.49,14.41a5.53,5.53,0,0,1,2.74-9.32A221.21,221.21,0,0,1,221.2.5c1.59,0,3.15,0,4.72.06A220.47,220.47,0,0,1,441.84,216.48Q441.9,218.84,441.9,221.22Z",
	"M296.57,266.08l-5.25,47A5,5,0,0,1,282.9,316l-12.17-12.17-106-106L131.57,164.7l-48.8-48.8L52.62,85.75a4.87,4.87,0,0,1-.27-6.63l0,0a218.63,218.63,0,0,1,26.7-26.7l0,0a4.91,4.91,0,0,1,6.67.28L197.83,164.7,295.15,262A4.91,4.91,0,0,1,296.57,266.08Z",
	"M222.9,95.93v50.63a5.53,5.53,0,0,1-9.44,3.91L104.72,41.74a5.54,5.54,0,0,1,1-8.64,216.77,216.77,0,0,1,34.65-17.32A5.52,5.52,0,0,1,146.29,17l75,75A5.58,5.58,0,0,1,222.9,95.93Z",
	"M268.27,205.29l-23.16-23.16a5.52,5.52,0,0,1-1.62-3.91V127.59a5.53,5.53,0,0,1,9.44-3.91l23.17,23.17a5.52,5.52,0,0,1,1.62,3.91v50.62A5.53,5.53,0,0,1,268.27,205.29Z",
	"M201.4,277.74H150.78a5.53,5.53,0,0,1-3.91-1.62l-94.5-94.5-.46-.46L35.45,164.7,17,146.29a5.51,5.51,0,0,1-1.25-5.92A217.89,217.89,0,0,1,33.1,105.73a5.54,5.54,0,0,1,8.63-1l10.64,10.65L70.81,133.8l30.9,30.9,63,63,40.63,40.63A5.53,5.53,0,0,1,201.4,277.74Z"
];


export const SpotlightLogo: React.FC<SpotlightLogoProps> = ({
	                                                            svgPaths = dragonDevsLogoPaths,
	                                                            viewBox = "0 0 442.4 442.42",
	                                                            baseOpacity = {dark: 0.05, light: 0.05},
	                                                            highlightOpacity = {dark: 0.5, light: 0.5},
	                                                            spotlightRadius = 150,
	                                                            strokeColor = {dark: '#fff', light: '#000'},
	                                                            containerPadding = 'md:p-14 p-4',
	                                                            scale = 'scale-110',
	                                                            className = ''
                                                            }) => {
	const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
	const {theme, systemTheme} = useTheme();
	const [mounted, setMounted] = useState(false);

	const currentTheme = theme === 'system' ? systemTheme : theme;
	const isDark = currentTheme === 'dark';

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({x: e.clientX, y: e.clientY});
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	const logoStroke = useMemo(() => isDark ? strokeColor.dark : strokeColor.light, [isDark, strokeColor]);
	const logoBaseOpacity = useMemo(() => isDark ? baseOpacity.dark : baseOpacity.light, [isDark, baseOpacity]);
	const logoHighlightOpacity = useMemo(() => isDark ? highlightOpacity.dark : highlightOpacity.light, [isDark, highlightOpacity]);

	const SVGContent = useMemo(() => (
		<>
			<defs>
				<style>{`.cls-1{fill:none;stroke:${logoStroke};stroke-miterlimit:10;}`}</style>
			</defs>
			<g id="Layer_2" data-name="Layer 2">
				<g id="Layer_1-2" data-name="Layer 1">
					{svgPaths.map((path, index) => (
						<path key={index} className="cls-1" d={path} />
					))}
				</g>
			</g>
		</>
	), [logoStroke, svgPaths]);

	if (!mounted) {
		return null;
	}

	return (
		<div className={`mx-auto ${className}`}>
			{/* High opacity layer - revealed by mouse */}
			<div
				className={`absolute ${containerPadding} justify-center z-20 w-full h-full pointer-events-none`}
				style={{
					maskImage: `radial-gradient(circle ${spotlightRadius}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
					WebkitMaskImage: `radial-gradient(circle ${spotlightRadius}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox={viewBox}
					className={`w-full h-full ${scale}`}
					style={{opacity: logoHighlightOpacity}}
				>
					{SVGContent}
				</svg>
			</div>

			{/* Base layer - always visible at low opacity */}
			<div className={`absolute ${containerPadding} justify-center z-10 w-full h-full pointer-events-none`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox={viewBox}
					className={`w-full h-full ${scale}`}
					style={{opacity: logoBaseOpacity}}
				>
					{SVGContent}
				</svg>
			</div>
		</div>
	);
};
