import type {MetadataRoute} from "next";

import {caseStudies} from "@/lib/case-study";
import {SITE_URL} from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();

	const staticRoutes: MetadataRoute.Sitemap = [
		{url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1},
		{url: `${SITE_URL}/services`, lastModified, changeFrequency: "monthly", priority: 0.9},
		{url: `${SITE_URL}/case-studies`, lastModified, changeFrequency: "weekly", priority: 0.9},
		{url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.7},
		{url: `${SITE_URL}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7},
		{url: `${SITE_URL}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3},
		{url: `${SITE_URL}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3},
	];

	const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
		url: `${SITE_URL}/case-studies/${study.slug}`,
		lastModified,
		changeFrequency: "monthly",
		priority: 0.8,
	}));

	return [...staticRoutes, ...caseStudyRoutes];
}
