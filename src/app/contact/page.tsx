'use client';

import React from 'react';
import {Sparkles} from 'lucide-react';
import Badge from "@/components/hero/Badge";
import {HeroTitle} from "@/components/hero/HeroTitle";
import {GradientText} from "@/components/hero/GradientText";
import {Separator} from "@/components/ui/separator";
import {ContactSection} from "@/components/ContactSection";

const ContactHero = () => (
	<section className="scale-90 relative min-h-[50vh] flex items-center justify-center overflow-hidden">
		<div className="relative z-10 flex items-center justify-center min-h-[50vh] px-6">
			<div className="max-w-4xl mx-auto text-center">
				<Badge icon={Sparkles}>Get in touch</Badge>
				<HeroTitle mainText="Tell us what" accentText="you're building"/>
				<GradientText variant="subtle" size="xl" animate animationDelay={0.6}>
					Send a message or book a call. We'll get back to you quickly — and tell you
					honestly whether we're the right fit.
				</GradientText>
			</div>
		</div>
	</section>
);

const ContactPage = () => (
	<main className="min-h-screen">
		<ContactHero/>
		<Separator/>
		<ContactSection/>
	</main>
);

export default ContactPage;
