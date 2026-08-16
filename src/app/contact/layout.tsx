import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Tell us what you're building and we'll come back with scope, timeline and cost. Send a message, book a call, or email info@dragondevs.co.",
	keywords: ["contact dragondevs", "hire Next.js developers", "software development quote"],
	alternates: {
		canonical: "/contact",
	},
	openGraph: {
		title: "Contact dragondevs",
		description:
			"Tell us what you're building. Send a message or book a call and we'll come back with scope, timeline and cost.",
		url: "/contact",
		type: "website",
	},
};

export default function ContactLayout({children}: {children: React.ReactNode}) {
	return <>{children}</>;
}
