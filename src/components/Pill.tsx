import React from 'react';

const Pill = ({label}: any) => {
	return (
		<div
			className="flex gap-2 items-center justify-center px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
		>
			<div className="size-1.5 bg-primary rounded-full"></div>
			{label}
		</div>)
};

export default Pill;