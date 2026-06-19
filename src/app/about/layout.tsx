import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
	title: "About",
	description:
		"dragondevs is a small digital product engineering studio. We build software for clients and our own products — engineers first, agency second.",
	alternates: {canonical: "/about"},
	openGraph: {
		title: "About | dragondevs",
		description:
			"A small studio that ships real products. Engineers first, agency second.",
		url: "https://dragondevs.co/about",
	},
};

export default function AboutLayout({children}: {children: React.ReactNode}) {
	return <>{children}</>;
}
