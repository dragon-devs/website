import type {MetadataRoute} from "next";
import {caseStudies} from "@/lib/case-study";

const BASE_URL = "https://dragondevs.co";

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();

	const routes: MetadataRoute.Sitemap = [
		{url: `${BASE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1},
		{url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8},
		{url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8},
		{url: `${BASE_URL}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.8},
		{url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6},
		{url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3},
		{url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3},
	];

	const studies: MetadataRoute.Sitemap = caseStudies.map((study) => ({
		url: `${BASE_URL}/case-studies/${study.slug}`,
		lastModified: now,
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	return [...routes, ...studies];
}
