export interface CaseStudyContent {
	type: 'paragraph' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'image' | 'imageGrid' | 'link' | 'list' | 'quote' | 'divider' | 'cta';
	content?: string;
	url?: string;
	alt?: string;
	images?: { url: string; alt: string; caption?: string }[];
	gridCols?: 1 | 2 | 3 | 4;
	items?: string[];
	ordered?: boolean;
	href?: string;
	label?: string;
	author?: string;
}

export interface CaseStudyDetails {
	id: number;
	slug: string;

	// Basic Info
	title: string;
	subtitle?: string;
	category: string;
	type: 'client' | 'products' | 'opensource';

	// Media
	heroImage: string;
	thumbnail: string;
	gallery?: string[];

	// Project Details
	description: string;
	challenge?: string;
	solution?: string;
	results?: string;

	// Client/Company Info
	client?: {
		name: string;
		logo?: string;
		website?: string;
		industry?: string;
		size?: string;
	};

	// Owner/Creator Info (for products/opensource)
	owner?: {
		name: string;
		avatar?: string;
		role?: string;
		website?: string;
	};

	// Project Metadata
	year: string;
	duration?: string;
	timeline?: {
		phase: string;
		duration: string;
		description?: string;
	}[];

	budget?: {
		range: string;
		type?: 'fixed' | 'hourly' | 'equity';
	};

	team?: {
		size: string;
		roles: string[];
	};

	// Technologies
	technologies: string[];
	technologiesDetails?: {
		name: string;
		purpose: string;
		icon?: string;
	}[];

	// Metrics & Results
	metrics?: {
		label: string;
		value: string;
		icon?: string;
	}[];

	keyFeatures?: string[];

	// Status
	status: string;
	statusIcon?: string;

	// Links
	liveUrl?: string;
	githubUrl?: string;
	figmaUrl?: string;
	otherLinks?: {
		label: string;
		url: string;
		icon?: string;
	}[];

	// Rich Content
	content: CaseStudyContent[];

	// SEO
	seo: {
		title: string;
		description: string;
		keywords: string[];
		ogImage?: string;
		canonical?: string;
	};

	// Related Projects
	relatedProjects?: number[];

	// Testimonial
	testimonial?: {
		quote: string;
		author: string;
		role: string;
		avatar?: string;
		company?: string;
	};
}

export const caseStudies: CaseStudyDetails[] = [{
	id: 1,
	slug: "bizstock-pos-inventory",

	title: "bizstock",
	subtitle: "An offline-first POS and inventory system for retail",
	category: "Our Product",
	type: "products",

	heroImage: "/bizstock/img1.png",
	thumbnail: "/bizstock/img1.png",

	description: "bizstock is a point-of-sale and inventory system built to keep working when the internet doesn't. Billing, stock and reports run locally and sync across devices over the local network.",

	challenge: "Most retail software assumes a reliable internet connection. For small shops with flaky connectivity, that means sales stop the moment the network drops. We wanted a system where selling never has to wait on the cloud.",

	solution: "We built bizstock around an offline-first model: every checkout, stock update and report runs on the device first, then syncs with other devices over the local network. The principle is simple — sell first, manage later. It runs as a web app and as a native Android app so a shop can mix tablets, phones and desktop counters.",

	results: "Shops can keep billing and tracking stock through outages, set up additional counters on the same local network without complex configuration, and review sales reports without depending on a connection. bizstock ships on a free trial with simple tiered licensing.",

	owner: {
		name: "dragondevs",
		role: "Studio & product team",
		website: "https://dragondevs.co"
	},

	year: "2025",
	duration: "Ongoing product",

	technologies: ["Rust", "React", "Desktop" , "Android", "Linux", "iOS", "Cross-platform", "Local Ai (AVA)", "Minimal", "Offline-first", "LAN Sync", "Frictionless", "Unified Invenotry", "POS", ],

	technologiesDetails: [
		{
			name: "Rust & React",
			purpose: "Web app for management, reporting and the browser-based POS"
		},
		{
			name: "Android",
			purpose: "Native app so counters and mobile devices work without a browser"
		},
		{
			name: "Offline-first architecture",
			purpose: "Transactions complete on-device and never block on connectivity"
		},
		{
			name: "Local network sync",
			purpose: "Multiple devices stay consistent over LAN, no cloud round-trip required"
		}
	],

	keyFeatures: [
		"Local-first billing and checkout that works without internet",
		"Inventory tracking synced across devices over the local network",
		"Sales reports and analytics available offline",
		"Multi-device support across POS terminals, tablets and phones",
		"7-day free trial with simple tiered licensing"
	],

	status: "Live",
	statusIcon: "CheckCircle2",

	liveUrl: "https://bizstock.net",

	content: [
		{
			type: "h2",
			content: "The problem"
		},
		{
			type: "paragraph",
			content: "Retail shops can't afford for sales to stop. But most point-of-sale tools route every action through the cloud, so a dropped connection means a stalled checkout, an out-of-date stock count, or a report that won't load. For shops with unreliable internet, that's a daily cost."
		},
		{
			type: "h2",
			content: "Our approach"
		},
		{
			type: "paragraph",
			content: "bizstock is built offline-first. Every sale, stock change and report runs on the device the moment it happens, then syncs with the rest of the shop's devices over the local network. We summed up the model in a phrase that drives the whole product: sell first, manage later."
		},
		{
			type: "list",
			items: [
				"Checkout completes instantly on-device — no waiting on a server",
				"Stock stays accurate across counters via local network sync",
				"Reports and analytics are available even with no connection",
				"Counters, tablets and phones can run side by side"
			]
		},
		{
			type: "h3",
			content: "Built for real shops"
		},
		{
			type: "paragraph",
			content: "bizstock runs as a web app and as a native Android app, so a shop can set up the mix of devices it already has. Adding another counter is a matter of putting it on the same local network — not provisioning cloud accounts or fighting configuration."
		},
		{
			type: "h2",
			content: "Where it is now"
		},
		{
			type: "paragraph",
			content: "bizstock is live and offered on a 7-day free trial with straightforward tiered licensing. It's one of the products we build and maintain as a studio alongside our client work."
		}
	],

	seo: {
		title: "bizstock — Offline-first POS & inventory | dragondevs case study",
		description: "How dragondevs built bizstock, an offline-first point-of-sale and inventory system that keeps billing, stock and reports running without internet and syncs across devices over the local network.",
		keywords: ["offline POS", "inventory management", "point of sale", "offline-first software", "retail software", "bizstock", "dragondevs", "skdrh", "dragon devs", "salman khan dragondevs"],
		ogImage: "/bizstock/img1.png",
		canonical: "https://dragondevs.co/case-studies/bizstock-pos-inventory"
	}
}];