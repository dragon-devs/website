import HeroSection from "@/components/HeroSection";
import {AboutSection} from "@/components/AboutSection";
import {ServicesSection} from "@/components/ServicesSection";
import {WorkSection} from "@/components/WorkSection";
import {CTASection} from "@/components/CTASection";
import {ContactSection} from "@/components/ContactSection";
import {Separator} from "@/components/ui/separator";
import Loading from "@/app/loading";
import React, {Suspense} from "react";

export default function Home() {
	return (
		<main>
			<HeroSection/>
			<AboutSection/>
			<Separator/>
			<ServicesSection/>
			<Separator/>
			<Suspense fallback={<Loading/>}>
				<WorkSection/>
			</Suspense>
			<Separator/>
			<CTASection/>
			<Separator/>
			<ContactSection/>
		</main>
	);
}
