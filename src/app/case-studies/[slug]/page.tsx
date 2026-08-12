import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import CaseStudyDetailsPage from '@/components/CaseStudyDetailsPage';
import {CaseStudyDetails} from '@/lib/case-study';
import {caseStudies} from '@/lib/case-study';
import {Separator} from "@/components/ui/separator";
import {CTASection} from "@/components/CTASection";
import React from "react";
import {SITE_URL} from "@/lib/seo";

interface PageProps {
	params: Promise<{
		slug: string;
	}>;
}

// Generate static params for all case studies
export async function generateStaticParams() {
	return caseStudies.map((study) => ({
		slug: study.slug,
	}));
}

// Get case study data
function getCaseStudy(slug: string): CaseStudyDetails | undefined {
	return caseStudies.find((study) => study.slug === slug);
}

// Generate metadata for SEO
export async function generateMetadata({params}: PageProps): Promise<Metadata> {
	const {slug} = await params;
	const caseStudy = getCaseStudy(slug);

	if (!caseStudy) {
		return {
			title: 'Case Study Not Found',
			description: 'The requested case study could not be found.',
		};
	}

	const {seo} = caseStudy;

	// Only honour an authored canonical if it actually points at this site.
	// The seed data shipped `https://yoursite.com/...`, which told Google the
	// canonical version of this page lived on a foreign domain and dropped the
	// page from the index. Anything off-domain falls back to the real path.
	const canonicalPath = `/case-studies/${slug}`;
	const canonical =
		seo.canonical && seo.canonical.startsWith(SITE_URL)
			? seo.canonical
			: canonicalPath;

	return {
		title: seo.title,
		description: seo.description,
		keywords: seo.keywords,
		authors: [{name: 'dragondevs'}],
		creator: 'dragondevs',
		publisher: 'dragondevs',

		// Open Graph
		openGraph: {
			title: seo.title,
			description: seo.description,
			url: canonical,
			siteName: 'dragondevs',
			images: [
				{
					url: seo.ogImage || caseStudy.heroImage,
					width: 1200,
					height: 630,
					alt: caseStudy.title,
				},
			],
			locale: 'en_US',
			type: 'article',
		},

		// Twitter
		twitter: {
			card: 'summary_large_image',
			title: seo.title,
			description: seo.description,
			images: [seo.ogImage || caseStudy.heroImage],
			creator: '@dragondevs_',
		},

		// Additional metadata
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},

		// Canonical URL
		alternates: {
			canonical,
		},

		// Additional tags
		other: {
			'article:author': 'dragondevs',
			'article:section': caseStudy.category,
			'article:tag': caseStudy.technologies.join(', '),
		},
	};
}

const CaseStudyPage = async ({params}: PageProps) => {
	const {slug} = await params;
	const caseStudy = getCaseStudy(slug);

	if (!caseStudy) {
		notFound();
	}

	const canonicalUrl = `${SITE_URL}/case-studies/${slug}`;

	// TechArticle structured data. Every field is sourced from the case study
	// itself — nothing is fabricated. Helps search engines understand the page
	// as a written case study authored by dragondevs.
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "TechArticle",
		headline: caseStudy.seo.title,
		description: caseStudy.seo.description,
		image: caseStudy.seo.ogImage || caseStudy.heroImage,
		datePublished: `${caseStudy.year}-01-01`,
		author: { "@type": "Organization", name: "dragondevs", url: SITE_URL },
		publisher: {
			"@type": "Organization",
			name: "dragondevs",
			logo: {
				"@type": "ImageObject",
				url: `${SITE_URL}/svg-transparent-black.svg`,
			},
		},
		mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
		keywords: caseStudy.seo.keywords.join(", "),
		articleSection: caseStudy.category,
	};

	// Breadcrumb trail: Home › Case Studies › <this study>. Helps search engines
	// render breadcrumbs in results and understand the site hierarchy.
	const breadcrumbData = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
			{ "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE_URL}/case-studies` },
			{ "@type": "ListItem", position: 3, name: caseStudy.title, item: canonicalUrl },
		],
	};

	return (
		<main>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbData)}}
			/>
			<CaseStudyDetailsPage caseStudy={caseStudy}/>
			<Separator/>
			<CTASection/>
			<Separator/>
		</main>
	);
}

export default CaseStudyPage;

//
// // JSON-LD Structured Data Component
// export function CaseStudyStructuredData({ caseStudy }: { caseStudy: CaseStudyDetails }) {
// 	const structuredData = {
// 		'@context': 'https://schema.org',
// 		'@type': 'TechArticle',
// 		headline: caseStudy.title,
// 		description: caseStudy.description,
// 		image: caseStudy.heroImage,
// 		datePublished: `${caseStudy.year}-01-01`,
// 		dateModified: `${caseStudy.year}-12-31`,
// 		author: {
// 			'@type': 'Organization',
// 			name: 'dragondevs',
// 			url: 'https://dragondevs.co',
// 		},
// 		publisher: {
// 			'@type': 'Organization',
// 			name: 'dragondevs',
// 			logo: {
// 				'@type': 'ImageObject',
// 				url: 'https://dragondevs.co/logo.png',
// 			},
// 		},
// 		mainEntityOfPage: {
// 			'@type': 'WebPage',
// 			'@id': `https://dragondevs.co/case-studies/${caseStudy.slug}`,
// 		},
// 		keywords: caseStudy.seo.keywords.join(', '),
// 		articleSection: caseStudy.category,
// 		about: {
// 			'@type': 'Thing',
// 			name: caseStudy.title,
// 		},
// 	};
//
// 	// Add client/company info if available
// 	if (caseStudy.client) {
// 		structuredData.about = {
// 			'@type': 'Organization',
// 			name: caseStudy.client.name,
// 			url: caseStudy.client.website,
// 			industry: caseStudy.client.industry,
// 		};
// 	}
//
// 	return (
// 		<script
// 			type="application/ld+json"
// 			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
// 		/>
// 	);
// }
//
// // Layout wrapper with structured data
// export function CaseStudyLayout({
// 	                                children,
// 	                                caseStudy
//                                 }: {
// 	children: React.ReactNode;
// 	caseStudy: CaseStudyDetails;
// }) {
// 	return (
// 		<>
// 			<CaseStudyStructuredData caseStudy={caseStudy} />
// 			{children}
// 		</>
// 	);
// }