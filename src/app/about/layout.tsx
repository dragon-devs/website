import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
	// 495px with the "| dragondevs" template, inside the 580px a results page
	// shows. The founder's name and handle travel together: "Salman Khan" on
	// its own is shared with a film star.
	title: "About Us & Founder Salman Khan (skdrh)",
	// ~899px at Arial 14px, inside the 1000px auditors allow.
	description:
		"A small product engineering studio founded by Salman Khan (skdrh). Engineers first, agency second, and why we build fast, offline-first software.",
	keywords: [
		"about dragondevs",
		"dragondevs founder",
		"Salman Khan skdrh",
		"software development team",
		"software agency Pakistan",
	],
	alternates: {
		canonical: "/about",
	},
	openGraph: {
		title: "About dragondevs and its founder, Salman Khan (skdrh)",
		description:
			"A small studio that ships real products. Engineers first, agency second.",
		url: "/about",
		type: "profile",
	},
};

export default function AboutLayout({children}: {children: React.ReactNode}) {
	return <>{children}</>;
}
