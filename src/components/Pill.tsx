import React from 'react';

/**
 * Metadata chip — a technology, a category, a status.
 *
 * Mono and chamfered rather than a rounded capsule in accent colour. These
 * appear a dozen at a time on a project card, and at that density a coloured
 * pill turns the card into confetti; a flat plate with the label set in the
 * utility face reads as a spec line instead.
 */
const Pill = ({label, marked = false}: { label: string; marked?: boolean }) => {
	return (
		<div className="chamfer-sm flex w-fit gap-2 items-center bg-foreground/[0.055] px-2.5 py-1.5">
			{marked && <div aria-hidden="true" className="size-1 rotate-45 bg-primary"/>}
			<span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
				{label}
			</span>
		</div>
	);
};

export default Pill;
