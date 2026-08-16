import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Next.js & Custom Software Development Services",
	description:
		"Web apps, custom software, MVPs and management systems built with Next.js, React and Node.js — designed, built, shipped and maintained.",
	keywords: [
		"Next.js development agency",
		"custom software development",
		"MVP development company",
		"custom inventory software development",
		"SaaS MVP developers",
		"React development services",
		"management system development",
	],
	alternates: {
		canonical: "/services",
	},
	openGraph: {
		title: "Next.js & Custom Software Development Services | dragondevs",
		description:
			"Web apps, custom software, MVPs and management systems — from idea to deployment.",
		url: "/services",
		type: "website",
	},
};

export default function ServicesLayout({children}: {children: React.ReactNode}) {
	return <>{children}</>;
}
