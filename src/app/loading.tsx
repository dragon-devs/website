import React from 'react';
import { AnimatedLogoLoader } from '@/components/hero/AnimatedLogoLoader';

const Loading = () => {
	return (
		<div className="fixed inset-0 z-[51] flex items-center justify-center bg-background/10 backdrop-blur-sm">
			<AnimatedLogoLoader
				scale={"scale-60"}
				loop={true}
				duration={1000}
				pathDelay={100}
				showFilled={true}
			/>
		</div>
	);
};

export default Loading;
