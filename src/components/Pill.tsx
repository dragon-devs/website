import React from 'react';

const Pill = ({label, icon}: { label: string, icon?: string }) => {
	return (
		<div
			className="flex w-fit gap-2 items-center justify-center px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
		>
			{icon && <div className="size-1.5 bg-primary rounded-full"></div>}
			{label}
		</div>)
};

export default Pill;