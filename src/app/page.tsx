import {Button} from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import {AboutSection} from "@/components/AboutSection";
import {ServicesSection} from "@/components/ServicesSection";
import {ProjectsSection} from "@/components/ProjectsSection";
import {TestimonialsSection} from "@/components/TestimonialsSection";
import {CTASection} from "@/components/CTASection";
import {ContactSection} from "@/components/ContactSection";
import {Footer} from "@/components/Footer";

export default function Home() {
	return (
		<main >
			<HeroSection />
      <AboutSection/>
      <ServicesSection/>
      <ProjectsSection/>
      <TestimonialsSection/>
      <CTASection/>
      <ContactSection/>
      <Footer/>
		</main>
	);
}
