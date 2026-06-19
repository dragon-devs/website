import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Get in touch with dragondevs. Tell us what you're building — send a message or book a call. Email info@dragondevs.co.",
	alternates: {canonical: "/contact"},
	openGraph: {
		title: "Contact | dragondevs",
		description: "Tell us what you're building. Send a message or book a call.",
		url: "https://dragondevs.co/contact",
	},
};

export default function ContactLayout({children}: {children: React.ReactNode}) {
	return <>{children}</>;
}
