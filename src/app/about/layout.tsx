import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"dragondevs is a small digital product engineering studio — engineers first, agency second. Who we are, how we work, and why we build offline-first, performance-minded software.",
	keywords: ["about dragondevs", "software development team", "software agency Pakistan"],
	alternates: {
		canonical: "/about",
	},
	openGraph: {
		title: "About dragondevs",
		description:
			"A small studio that ships real products. Engineers first, agency second.",
		url: "/about",
		type: "profile",
	},
};

export default function AboutLayout({children}: {children: React.ReactNode}) {
	return <>{children}</>;
}
