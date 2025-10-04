import type { Metadata } from "next";
import { Geist, Geist_Mono, Chakra_Petch } from "next/font/google";
import "./globals.css";
import Silk from "@/components/Silk";
import { ThemeProvider } from "next-themes";
import ClickSpark from "@/components/ClickSpark";
import MinimalNavbar from "@/components/Navbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Script from "next/script";

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


export const metadata: Metadata = {
	title: {
		default: "dragondevs – Custom Software Development & SEO-Friendly Web Solutions",
		template: "%s | dragondevs"
	},
	description:
		"dragondevs is a professional software development agency building custom SEO-friendly websites, MVPs, and full-stack applications. We craft powerful digital products with stunning design and scalable architecture.",

	metadataBase: new URL("https://www.dragondevs.co"),

	keywords: [
		"software development agency",
		"custom web apps development",
		"seo friendly websites",
		"MVP development",
		"product development",
		"ai development",
		"full stack applications",
		"Nextjs development",
		"React developers",
		"dragondevs",
		"skdrh",
		"dragondevs.com",
		"dragondevs.co",
		"bizstock",
	],

	openGraph: {
		title: "dragondevs – Custom Software Development & SEO-Friendly Web Solutions",
		description:
			"dragondevs creates modern, high-performance websites and full-stack apps. We help startups and businesses launch digital products fast with elegant, maintainable code.",
		url: "https://www.dragondevs.co",
		siteName: "dragondevs",
		type: "website",
		locale: "en_US",
		images: [
			{
				url: "https://www.dragondevs.co/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "dragondevs – Custom Software Development Agency"
			}
		]
	},

	twitter: {
		card: "summary_large_image",
		title: "dragondevs – Custom Software Development & SEO-Friendly Web Solutions",
		description:
			"dragondevs builds SEO-friendly websites, MVPs, and scalable full-stack applications with modern design and performance in mind.",
		creator: "@dragondevs",
		images: ["https://www.dragondevs.co/og-image.jpg"]
	},

	alternates: {
		canonical: "https://www.dragondevs.co"
	},

	icons: {
		icon: "/favicon.ico",
		apple: "/apple-icon.png"
	},

	themeColor: "#0f172a"
};

export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<head>
			<link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="48x48" />
			<link rel="apple-touch-icon" href="/apple-icon.png" />
			<link rel="canonical" href="https://www.dragondevs.co" />
			<meta name="theme-color" content="#0f172a" />

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
			className={`${geistSans.variable} ${geistMono.variable} ${chakraPetch.variable} antialiased relative overflow-hidden`}
		>
		{/* ✅ Google Tag Manager (noscript) */}
		<noscript>
			<iframe
				src="https://www.googletagmanager.com/ns.html?id=GTM-MLLSL7RX"
				height="0"
				width="0"
				style={{ display: "none", visibility: "hidden" }}
			></iframe>
		</noscript>

		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
			disableTransitionOnChange
		>
			{/* Optional: <SplashCursor /> */}
			<div className="fixed inset-0 opacity-50 -z-50 pointer-events-none">
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
				sparkCount={10}
				duration={700}
			>
				<ScrollArea className="w-screen h-screen">
					{children}
					<ScrollBar className="opacity-50" />
				</ScrollArea>
			</ClickSpark>

			<MinimalNavbar />
		</ThemeProvider>
		</body>
		</html>
	);
}
