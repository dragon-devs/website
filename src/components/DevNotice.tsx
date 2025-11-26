"use client";

export default function DevNotice() {
	return (
		<div
			className="
				fixed top-6 z-50
				px-4 py-2 text-sm rounded-full shadow-lg backdrop-blur-sm border border-border
				bg-amber-300/20 flex items-center gap-2 whitespace-nowrap

				/* center on mobile */
				left-1/2 -translate-x-1/2

				/* move to left on desktop */
				sm:left-6 sm:-translate-x-0
			"
		>
			<span>🚧 This site is in development.</span>

			<div className="relative flex justify-center items-center pl-2">
				<span className="absolute w-2.5 h-2.5 bg-amber-500 rounded-full animate-ping"></span>
				<span className="absolute w-2 h-2 bg-amber-500 rounded-full"></span>
			</div>
		</div>
	);
}
