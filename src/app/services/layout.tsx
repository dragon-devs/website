import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Services",
	description:
		"Web apps, custom software, MVPs and management systems — designed, built, shipped and maintained. End-to-end product engineering from dragondevs.",
	alternates: {canonical: "/services"},
	openGraph: {
		title: "Services | dragondevs",
		description:
			"Web apps, custom software, MVPs and management systems — from idea to deployment.",
		url: "https://dragondevs.co/services",
	},
};

export default function ServicesLayout({children}: {children: React.ReactNode}) {
	return <>{children}</>;
}
