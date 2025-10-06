import HeroSection from "@/components/HeroSection";
import {AboutSection} from "@/components/AboutSection";
import {ServicesSection} from "@/components/ServicesSection";
import {WorkSection} from "@/components/WorkSection";
import {TestimonialsSection} from "@/components/TestimonialsSection";
import {CTASection} from "@/components/CTASection";
import {ContactSection} from "@/components/ContactSection";
import {Separator} from "@/components/ui/separator";

export default function Home() {
	return (
		<main>
			<HeroSection/>
			<AboutSection/>
			<Separator/>
			<ServicesSection/>
			<Separator/>
			<WorkSection/>
			<Separator/>
			<TestimonialsSection/>
			<Separator/>
			<CTASection/>
			<Separator/>
			<ContactSection/>
		</main>
	);
}
