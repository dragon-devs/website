import HeroSection from "@/components/HeroSection";
import {AboutSection} from "@/components/AboutSection";
import {ServicesSection} from "@/components/ServicesSection";
import {FilteredWorkSection, WorkSection} from "@/components/WorkSection";
import {CTASection} from "@/components/CTASection";
import {ContactSection} from "@/components/ContactSection";
import {Separator} from "@/components/ui/separator";
import React, {Suspense} from "react";

export default function Home() {
	return (
		<main>
			<HeroSection/>
			<AboutSection/>
			<Separator/>
			<ServicesSection/>
			<Separator/>
			{/*
			  The fallback is the unfiltered work section, not a spinner.
			  `useSearchParams` opts its subtree out of static prerendering, so
			  whatever the fallback renders is what a crawler reads — with a
			  spinner here, "Featured Projects" and every project title were
			  missing from the homepage HTML entirely.
			*/}
			<Suspense fallback={<WorkSection category="all"/>}>
				<FilteredWorkSection/>
			</Suspense>
			<Separator/>
			<CTASection/>
			<Separator/>
			<ContactSection/>
		</main>
	);
}
