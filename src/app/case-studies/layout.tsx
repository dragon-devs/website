import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Work",
	description:
		"Selected work from dragondevs — the products we build and the software we ship, including our offline-first POS and inventory system, BizStock.",
	alternates: {canonical: "/case-studies"},
	openGraph: {
		title: "Work | dragondevs",
		description: "The products we build and the software we ship.",
		url: "https://dragondevs.co/case-studies",
	},
};

export default function CaseStudiesLayout({children}: {children: React.ReactNode}) {
	return <>{children}</>;
}
