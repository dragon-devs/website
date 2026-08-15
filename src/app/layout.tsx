import type {Metadata} from "next";
import {Geist, Geist_Mono, Chakra_Petch, Bricolage_Grotesque} from "next/font/google";
import "./globals.css";
import Silk from "@/components/Silk";
import {ThemeProvider} from "next-themes";
import MinimalNavbar from "@/components/Navbar";
import Script from "next/script";
import {Footer} from "@/components/Footer";
import BackToTopButton from "@/components/BackToTop";
import {SpotlightLogo} from "@/components/hero/SpotLightLog";
import {Toaster} from "@/components/ui/sonner";
import React from "react";
import {organizationSchema, websiteSchema} from "@/lib/seo";

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
		"dragondevs is a small product engineering studio. We design and build SEO-friendly websites, web apps, custom software, and our own products like BizStock — from idea to deployment.",

	metadataBase: new URL("https://dragondevs.co"),

	// Homepage only. Every other route sets its own canonical in its segment
	// layout — a canonical here would be inherited verbatim and would point
	// every page at the homepage.
	alternates: {
		canonical: "/"
	},

	keywords: [
		"dragondevs",
		"digital product engineering",
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
		"BizStock",
		"product studio",
		"From idea to deployment",
		"Code beyond boundaries",
		"skdrh"
	],
	openGraph: {
		title: "dragondevs | From idea to deployment",
		description:
			"A small studio that designs and builds web apps, custom software, and its own products. From idea to deployment.",
		url: "https://dragondevs.co",
		siteName: "dragondevs",
		type: "website",
		locale: "en_US"
		// `images` intentionally omitted — app/opengraph-image.tsx generates it.
		// The previous hardcoded /og-image.jpg did not exist in public/, so every
		// social share rendered a broken preview.
	},

	twitter: {
		card: "summary_large_image",
		title: "dragondevs – From idea to deployment | Product Builders",
		description:
			"dragondevs builds SEO-friendly websites, MVPs, and scalable full-stack applications for startups and enterprises.",
		creator: "@dragondevs_"
	},

	icons: {
		apple: "/apple-icon.png"
	},

	manifest: "/manifest.json"
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

			{/* Plain <script>, not next/script — structured data has to be in the
			    server-rendered HTML. next/script defers to afterInteractive, which
			    injects it client-side where crawlers may never see it. */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{__html: JSON.stringify(organizationSchema)}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{__html: JSON.stringify(websiteSchema)}}
			/>

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
			className={`${geistSans.variable} ${geistMono.variable} ${chakraPetch.variable} ${bricolage_Grotesque.variable} antialiased relative overflow-x-clip`}
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
				{children}
				<Footer/>
			<BackToTopButton/>
			<MinimalNavbar/>
			<Toaster position="top-center" richColors/>
		</ThemeProvider>
		</body>
		</html>
	);
}
