import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Case Studies & Client Work",
	description:
		"Real dragondevs projects — the problem, the approach, the stack and the outcome, including our offline-first POS system, BizStock.",
	keywords: [
		"software development case studies",
		"Next.js case study",
		"web development portfolio",
		"MVP case study",
	],
	alternates: {
		canonical: "/case-studies",
	},
	openGraph: {
		title: "Case Studies & Client Work | dragondevs",
		description:
			"The products we build and the software we ship — problem, approach, stack and outcome.",
		url: "/case-studies",
		type: "website",
	},
};

export default function CaseStudiesLayout({children}: {children: React.ReactNode}) {
	return <>{children}</>;
}
