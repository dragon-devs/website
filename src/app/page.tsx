import HeroSection from "@/components/HeroSection";
import {AboutSection} from "@/components/AboutSection";
import {ServicesSection} from "@/components/ServicesSection";
import {WorkSection} from "@/components/WorkSection";
import {TestimonialsSection} from "@/components/TestimonialsSection";
import {CTASection} from "@/components/CTASection";
import {ContactSection} from "@/components/ContactSection";
import {Separator} from "@/components/ui/separator";
import DevNotice from "@/components/DevNotice";
import Loading from "@/app/loading";
import React, {Suspense} from "react";

export default function Home() {
	return (
		<main>
			<DevNotice/>
			<HeroSection/>
			<AboutSection/>
			<Separator/>
			<ServicesSection/>
			<Separator/>
			<Suspense fallback={<Loading/>}>
				<WorkSection/>
			</Suspense>
			<Separator/>
			<TestimonialsSection/>
			<Separator/>
			<CTASection/>
			<Separator/>
			<ContactSection/>
		</main>
	);
}
