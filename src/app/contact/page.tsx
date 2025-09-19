import React from 'react';
import BlurText from "@/components/BlurText";

const Contact = () => {
	return (
		<div className="font-sans">
			<div className="font-sans">
				Something
			</div>
			<div className="font-sans">
				Something
			</div>
			<div className="text-7xl font-bold">
				<BlurText
					text="Isn't this so cool?!"
					delay={20}
					animateBy="letters"
					direction="bottom"
					className=""
				/>
			</div>
		</div>
	);
};

export default Contact;