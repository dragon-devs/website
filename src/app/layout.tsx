import type {Metadata} from "next";
import {Geist, Geist_Mono, Chakra_Petch, Bricolage_Grotesque} from "next/font/google";
import "./globals.css";
import Silk from "@/components/Silk";
import {ThemeProvider} from "next-themes";
import ClickSpark from "@/components/ClickSpark";
import MinimalNavbar from "@/components/Navbar";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import Script from "next/script";
import {Footer} from "@/components/Footer";
import BackToTopButton from "@/components/BackToTop";
import AnimatedCursor from "@/components/AnimatedCursor";
import {SpotlightLogo} from "@/components/hero/SpotLightLog";
import React from "react";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const chakraPetch = Chakra_Petch({
	variable: "--font-chakra-petch",
	weight: ["700", "600", "500", "400", "300"],
	subsets: ["latin"],
});

const bricolage_Grotesque = Bricolage_Grotesque({
	variable: "--font-bricolage",
	weight: ["700", "600", "500", "400", "300"],
	subsets: ["latin"],
});



export const metadata: Metadata = {
	title: {
		default: "dragondevs | From idea to deployment",
		template: "%s | dragondevs"
	},
	description:
		"dragondevs builds SEO-friendly websites, custom software, and full-stack web apps. We help businesses launch digital products faster with clean code.",

	metadataBase: new URL("https://www.dragondevs.co"),

	keywords: [
		"dragondevs",
		"custom software development",
		"seo-friendly websites",
		"web app development",
		"MVP development",
		"product development",
		"Next.js developers",
		"React developers",
		"full stack development",
		"AI web solutions",
		"software agency",
		"From idea to deployment",
		"Code beyond boundaries",
		"skdrh"
	],
	openGraph: {
		title: "dragondevs | From idea to deployment",
		description:
			"dragondevs creates high-performance websites and web apps. We turn your ideas into scalable digital products with modern design and powerful functionality.",
		url: "https://www.dragondevs.co",
		siteName: "dragondevs",
		type: "website",
		locale: "en_US",
		images: [
			{
				url: "https://www.dragondevs.co/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "dragondevs – From idea to deployment | Product Builders"
			}
		]
	},

	twitter: {
		card: "summary_large_image",
		title: "dragondevs – From idea to deployment | Product Builders",
		description:
			"dragondevs builds SEO-friendly websites, MVPs, and scalable full-stack applications for startups and enterprises.",
		creator: "@dragondevs",
		images: ["https://www.dragondevs.co/og-image.jpg"]
	},

	icons: {
		apple: "/apple-icon.png"
	}
};

export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
		<head>
			<link rel="apple-touch-icon" href="/apple-icon.png"/>
			<link rel="canonical" href="https://www.dragondevs.co"/>

			{/* ✅ Google Tag Manager */}
			<Script id="gtm-init" strategy="afterInteractive">
				{`
						(function(w,d,s,l,i){
							w[l]=w[l]||[];
							w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
							var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),
							dl=l!='dataLayer'?'&l='+l:'';
							j.async=true;
							j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
							f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-MLLSL7RX');
					`}
			</Script>
		</head>

		<body
			className={`${geistSans.variable} ${geistMono.variable} ${chakraPetch.variable} ${bricolage_Grotesque.variable} antialiased relative overflow-hidden`}
		>
		{/* ✅ Google Tag Manager (noscript) */}
		<noscript>
			<iframe
				src="https://www.googletagmanager.com/ns.html?id=GTM-MLLSL7RX"
				height="0"
				width="0"
				style={{display: "none", visibility: "hidden"}}
			></iframe>
		</noscript>

		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			{/* Optional: <SplashCursor /> */}
			<div className="fixed inset-0 -z-50 pointer-events-none">
				<SpotlightLogo
					spotlightRadius={150}
					scale=""
				/>
				<Silk
					speed={0}
					scale={0.5}
					color="#52525b"
					noiseIntensity={10}
					rotation={0}
				/>
			</div>

			<ClickSpark
				sparkColor="#fff"
				sparkSize={10}
				sparkRadius={25}
				sparkCount={20}
				duration={500}
			>
				<ScrollArea className="w-screen h-screen">
					{children}
					<ScrollBar className="opacity-40"/>
					<Footer/>
				</ScrollArea>
			</ClickSpark>
			<BackToTopButton/>
			<MinimalNavbar/>
		</ThemeProvider>
		</body>
		</html>
	);
}
