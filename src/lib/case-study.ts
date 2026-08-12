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

/**
 * Case study data.
 *
 * NOTE ON IMAGES: every image below is a neutral placeholder (picsum.photos with
 * a stable seed so the layout looks right today). Swap the `heroImage`,
 * `thumbnail`, `gallery` and inline `image`/`imageGrid` URLs for real
 * screenshots when they are ready — the seeds are named so they are easy to find.
 *
 * NOTE ON CONTENT: copy is intentionally outcome-focused and free of any
 * confidential client data — no internal figures, pricing, credentials or
 * private business metrics. Everything here is either public (the live site) or
 * a general description of the work.
 */
export const caseStudies: CaseStudyDetails[] = [
	// ─────────────────────────────────────────────────────────────────────────
	// 1. CraftFlow — client
	// ─────────────────────────────────────────────────────────────────────────
	{
		id: 1,
		slug: "craftflow-operations-platform",

		title: "CraftFlow",
		subtitle: "One platform to run a growing craft business end-to-end",
		category: "Business Platform",
		type: "client",

		heroImage: "https://picsum.photos/seed/craftflow-hero/1200/600",
		thumbnail: "https://picsum.photos/seed/craftflow-thumb/600/400",
		gallery: [
			"https://picsum.photos/seed/craftflow-1/800/600",
			"https://picsum.photos/seed/craftflow-2/800/600",
			"https://picsum.photos/seed/craftflow-3/800/600",
		],

		description:
			"A bespoke operations platform for a Saudi design & craft studio — projects, clients, contracts and quotations in one bilingual, role-aware workspace.",

		challenge:
			"The business was growing faster than its spreadsheets. Projects, client details, designer assignments, contracts and quotations were scattered across files and chat threads, so answering a simple question — what is the status of this job? — meant hunting through half a dozen places.",

		solution:
			"We designed and built a single source of truth: a bilingual (Arabic / English) web platform where every project, client, contract and quotation is tracked, searchable and role-aware. Clean dashboards turn day-to-day activity into decisions, and role-based access keeps the right information in front of the right people.",

		results:
			"The team moved from scattered files to one shared workspace. Setting up a new project takes minutes, quotations follow a consistent template, and management finally has a live view of the whole pipeline in a language everyone on the team reads comfortably.",

		client: {
			name: "CraftKSA",
			website: "https://craftksa.com",
			industry: "Design & Craft",
			size: "Growing studio",
		},

		year: "2025",
		duration: "Multi-phase engagement",
		timeline: [
			{
				phase: "Discovery",
				duration: "Phase 1",
				description: "Mapping the real workflow — projects, clients, contracts and quotations end to end.",
			},
			{
				phase: "Design",
				duration: "Phase 2",
				description: "Interface and data model designed bilingual-first, for Arabic and English.",
			},
			{
				phase: "Build",
				duration: "Phase 3",
				description: "Core platform, role-based access, dashboards and reporting.",
			},
			{
				phase: "Launch & Iterate",
				duration: "Phase 4",
				description: "Rollout to the team, feedback loops and refinements.",
			},
		],

		team: {
			size: "Full-stack build",
			roles: ["Product & UX", "Full-stack Development", "Bilingual UI", "QA"],
		},

		technologies: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "NextAuth", "Tailwind CSS", "next-intl"],

		technologiesDetails: [
			{ name: "Next.js", purpose: "Fast, server-rendered app with a modern, maintainable architecture." },
			{ name: "PostgreSQL + Drizzle ORM", purpose: "A reliable, type-safe data layer for projects, clients and contracts." },
			{ name: "NextAuth", purpose: "Secure authentication with role-based access to the right screens and data." },
			{ name: "next-intl", purpose: "First-class Arabic / English support, including right-to-left layouts." },
		],

		keyFeatures: [
			"Unified project workspace — status, owners and details in one place",
			"Client and contract records that are searchable at a glance",
			"Consistent, template-driven quotations",
			"Role-based access for admins, designers and staff",
			"Dashboards and reporting for a live view of the pipeline",
			"Fully bilingual Arabic / English with right-to-left support",
		],

		status: "Live",
		statusIcon: "CheckCircle2",

		liveUrl: "https://craftksa.com",

		content: [
			{
				type: "paragraph",
				content: "CraftKSA is a design and craft studio that had outgrown the tools it started with. As the number of projects, clients and quotations climbed, the spreadsheets and chat threads holding everything together started to crack. We partnered with them to replace that patchwork with a single platform built around how they actually work.",
			},
			{
				type: "h2",
				content: "The Challenge",
			},
			{
				type: "paragraph",
				content: "Every project touched several people — clients, designers and management — but the information about it lived everywhere and nowhere. Contracts sat in one folder, quotations in another, project status in someone's head. Nothing was searchable, nothing was consistent, and reporting meant assembling the picture by hand.",
			},
			{
				type: "list",
				items: [
					"No single place to see the status of a project",
					"Quotations and contracts created from scratch each time",
					"Client history split across files and conversations",
					"Everything needed to work naturally in both Arabic and English",
				],
			},
			{
				type: "image",
				url: "https://picsum.photos/seed/craftflow-challenge/800/400",
				alt: "CraftFlow dashboard overview (placeholder)",
			},
			{
				type: "h2",
				content: "Our Approach",
			},
			{
				type: "paragraph",
				content: "We started by mapping the real workflow, not an idealised one — how a job actually moves from first conversation to signed contract to delivery. That map became the backbone of the data model and the interface. Because the team works in Arabic and English every day, we designed bilingual-first, with right-to-left layouts treated as a first-class case rather than an afterthought.",
			},
			{
				type: "h2",
				content: "What We Built",
			},
			{
				type: "h3",
				content: "A Unified Project Workspace",
			},
			{
				type: "paragraph",
				content: "Every project now has one home: its status, the people on it, the client, the contract and the related quotations, all in one view. What used to take a search across several tools is now a single click.",
			},
			{
				type: "h3",
				content: "Quotations & Contracts, Made Consistent",
			},
			{
				type: "paragraph",
				content: "Quotations follow a shared template, so every one that leaves the studio looks and reads the same. Contracts and client records live alongside them, giving the team a complete history for each relationship.",
			},
			{
				type: "imageGrid",
				images: [
					{ url: "https://picsum.photos/seed/craftflow-quote/600/400", alt: "Quotation view (placeholder)", caption: "Template-driven quotations" },
					{ url: "https://picsum.photos/seed/craftflow-projects/600/400", alt: "Projects table (placeholder)", caption: "Searchable project records" },
				],
				gridCols: 2,
			},
			{
				type: "h3",
				content: "Role-Based Access",
			},
			{
				type: "paragraph",
				content: "Admins, designers and staff each see what's relevant to them. Sensitive information stays protected, and the interface stays uncluttered for everyone.",
			},
			{
				type: "h3",
				content: "Dashboards & Reporting",
			},
			{
				type: "paragraph",
				content: "Management gets a live, at-a-glance view of the pipeline — what's active, what's pending and where attention is needed — without waiting for someone to compile a report.",
			},
			{
				type: "h2",
				content: "The Result",
			},
			{
				type: "paragraph",
				content: "CraftKSA now runs on one platform instead of a dozen disconnected files. Onboarding a new project is quick, quotations are consistent, and the whole team shares the same up-to-date picture — in whichever language they prefer.",
			},
		],

		seo: {
			title: "CraftFlow — Custom Operations Platform Case Study | dragondevs",
			description:
				"How dragondevs built CraftFlow: a bilingual, role-based operations platform for a Saudi design & craft studio, unifying projects, clients, contracts and quotations.",
			keywords: [
				"custom business platform",
				"Next.js case study",
				"bilingual web app",
				"Arabic English web application",
				"project management software",
				"quotation management",
				"dragondevs",
			],
			ogImage: "https://picsum.photos/seed/craftflow-og/1200/630",
			canonical: "https://dragondevs.co/case-studies/craftflow-operations-platform",
		},

		relatedProjects: [2, 3],
	},

	// ─────────────────────────────────────────────────────────────────────────
	// 2. Al Nada Store — client
	// ─────────────────────────────────────────────────────────────────────────
	{
		id: 2,
		slug: "alnada-cooling-ecommerce",

		title: "Al Nada Store",
		subtitle: "Bringing a 25-year cooling brand online, end to end",
		category: "E-commerce",
		type: "client",

		heroImage: "https://picsum.photos/seed/alnada-hero/1200/600",
		thumbnail: "https://picsum.photos/seed/alnada-thumb/600/400",
		gallery: [
			"https://picsum.photos/seed/alnada-1/800/600",
			"https://picsum.photos/seed/alnada-2/800/600",
			"https://picsum.photos/seed/alnada-3/800/600",
		],

		description:
			"A full e-commerce and content platform for Al Nada — a decades-old cooling-solutions brand — with a bilingual storefront, guided product recommendations, secure checkout and after-sales support.",

		challenge:
			"Al Nada is a trusted name in cooling with a deep product range, from portable units to central systems — but no modern way to sell or support online. Customers couldn't easily browse the catalogue, find the right product for their space, buy securely, or request maintenance.",

		solution:
			"We built a headless commerce and content platform on a modern CMS, with a bilingual Arabic / English storefront. Shoppers explore categories, use a guided flow to find the right cooler for their space, check out securely with local payment support, and raise maintenance or quote requests — while the Al Nada team manages products, pricing, content and orders from one admin panel.",

		results:
			"An established offline brand now sells and supports its customers online. The marketing team publishes products, promotions and content without a developer, and customers get a guided, bilingual buying experience from first click to after-sales.",

		client: {
			name: "Al Nada",
			website: "https://alnada.sa",
			industry: "Cooling Solutions",
			size: "25+ years in business",
		},

		year: "2025",
		duration: "Multi-phase engagement",
		timeline: [
			{
				phase: "Discovery",
				duration: "Phase 1",
				description: "Understanding the catalogue, the customer journey and after-sales needs.",
			},
			{
				phase: "Platform & CMS",
				duration: "Phase 2",
				description: "Headless commerce, product model and a self-serve admin.",
			},
			{
				phase: "Storefront",
				duration: "Phase 3",
				description: "Bilingual storefront, guided recommendations and secure checkout.",
			},
			{
				phase: "Support & Launch",
				duration: "Phase 4",
				description: "Maintenance requests, knowledge base and go-live.",
			},
		],

		team: {
			size: "Full-stack build",
			roles: ["Product & UX", "Full-stack Development", "CMS & Commerce", "Bilingual UI", "QA"],
		},

		technologies: ["Next.js", "Payload CMS", "PostgreSQL", "TypeScript", "Tailwind CSS", "PayTabs", "next-intl"],

		technologiesDetails: [
			{ name: "Payload CMS", purpose: "A self-serve admin so the team manages products, content and orders without code." },
			{ name: "Next.js", purpose: "A fast, SEO-friendly storefront rendered on the server." },
			{ name: "PostgreSQL", purpose: "A dependable store for products, orders and customers." },
			{ name: "PayTabs", purpose: "Secure checkout with payment methods Saudi customers expect." },
			{ name: "next-intl", purpose: "Bilingual Arabic / English with full right-to-left support." },
		],

		keyFeatures: [
			"Bilingual, right-to-left storefront built for a large catalogue",
			"Guided product recommendations to match a cooler to a space",
			"Secure checkout with local payment support",
			"Discount codes and promotions",
			"Maintenance and quote requests for after-sales",
			"Troubleshooting knowledge base and content/blog",
			"Self-serve admin for products, orders and content",
		],

		status: "Live",
		statusIcon: "CheckCircle2",

		liveUrl: "https://store.alnada.sa",
		otherLinks: [
			{ label: "Main Site", url: "https://alnada.sa" },
		],

		content: [
			{
				type: "paragraph",
				content: "Al Nada has spent over two decades earning trust in cooling solutions — but that reputation lived almost entirely offline. We were brought in to bring the whole business online: not just a catalogue, but buying, guidance and after-sales support, all in one bilingual platform the team could run themselves.",
			},
			{
				type: "h2",
				content: "The Challenge",
			},
			{
				type: "paragraph",
				content: "A broad product range is a strength in a showroom and a challenge online. Customers need help narrowing down from portable units to central systems, they expect to pay the way they always do, and they need somewhere to turn after the sale. None of that existed digitally.",
			},
			{
				type: "list",
				items: [
					"No online storefront for a large, varied catalogue",
					"No easy way for customers to find the right product for their space",
					"Checkout had to feel familiar and secure for Saudi customers",
					"After-sales — maintenance and support — needed a home too",
					"Everything had to work seamlessly in Arabic and English",
				],
			},
			{
				type: "image",
				url: "https://picsum.photos/seed/alnada-storefront/800/400",
				alt: "Al Nada storefront (placeholder)",
			},
			{
				type: "h2",
				content: "Our Approach",
			},
			{
				type: "paragraph",
				content: "We chose a headless architecture: a flexible content and commerce backend the Al Nada team fully controls, paired with a fast, custom storefront. That split lets the brand publish products and content freely while we shaped a buying experience tuned to their customers — bilingual, right-to-left aware, and guided rather than overwhelming.",
			},
			{
				type: "h2",
				content: "What We Built",
			},
			{
				type: "h3",
				content: "A Storefront Built for a Big Catalogue",
			},
			{
				type: "paragraph",
				content: "Clear categories, rich product pages with the technical specs that matter for cooling, and search that helps rather than hinders — all rendered fast and optimised for how people actually shop.",
			},
			{
				type: "h3",
				content: "Guided Recommendations",
			},
			{
				type: "paragraph",
				content: "Instead of leaving customers to guess, a guided flow helps them find the right cooler for their space and needs — turning a large catalogue from intimidating into helpful.",
			},
			{
				type: "imageGrid",
				images: [
					{ url: "https://picsum.photos/seed/alnada-product/600/400", alt: "Product detail (placeholder)", caption: "Spec-rich product pages" },
					{ url: "https://picsum.photos/seed/alnada-recommend/600/400", alt: "Recommendation flow (placeholder)", caption: "Guided recommendations" },
				],
				gridCols: 2,
			},
			{
				type: "h3",
				content: "Secure Checkout for Saudi Customers",
			},
			{
				type: "paragraph",
				content: "Checkout is built around local expectations — familiar, secure payment, account verification, discount codes and a smooth path from cart to confirmation.",
			},
			{
				type: "h3",
				content: "Self-Serve Content & Support",
			},
			{
				type: "paragraph",
				content: "Beyond the store, we built the pieces a real business needs: maintenance and quote requests, a troubleshooting knowledge base, and a content area — all editable by the team through a single admin, no developer required.",
			},
			{
				type: "h2",
				content: "The Result",
			},
			{
				type: "paragraph",
				content: "Al Nada now meets its customers online with the same depth it offers in person: browse, get guidance, buy securely and get support after the sale — in Arabic or English. And because the team controls the platform, the store keeps evolving without waiting on code.",
			},
		],

		seo: {
			title: "Al Nada Store — E-commerce Platform Case Study | dragondevs",
			description:
				"How dragondevs built Al Nada's bilingual e-commerce and content platform: guided product recommendations, secure local checkout, and self-serve content and support.",
			keywords: [
				"e-commerce development",
				"Payload CMS case study",
				"headless commerce",
				"Saudi e-commerce",
				"bilingual online store",
				"Arabic English storefront",
				"dragondevs",
			],
			ogImage: "https://picsum.photos/seed/alnada-og/1200/630",
			canonical: "https://dragondevs.co/case-studies/alnada-cooling-ecommerce",
		},

		relatedProjects: [1, 3],
	},

	// ─────────────────────────────────────────────────────────────────────────
	// 3. Bizstock — our own product
	// ─────────────────────────────────────────────────────────────────────────
	{
		id: 3,
		slug: "bizstock-inventory-pos-app",

		title: "Bizstock",
		subtitle: "Offline-first inventory & point-of-sale, on every device",
		category: "SaaS Product",
		type: "products",

		heroImage: "/bizstock/img1.png",
		thumbnail: "/bizstock/img1.png",
		gallery: [
			"/bizstock/img1.png",
			"https://picsum.photos/seed/bizstock-2/800/600",
			"https://picsum.photos/seed/bizstock-3/800/600",
		],

		description:
			"Our own product — a fast, offline-first inventory and point-of-sale system that runs on desktop and Android, syncs in real time, and speaks your language.",

		challenge:
			"Small and mid-size retailers are underserved by inventory tools that assume a perfect internet connection, live only in a browser, and charge per seat. We wanted something that works everywhere — the counter, the stockroom, a phone — even when the network drops.",

		solution:
			"Bizstock is built local-first: data lives on the device in a local database, so the app stays instant and fully usable offline, then syncs in real time when it's back online. Native barcode scanning, label generation and Excel / PDF export make everyday stock work fast — and it ships from a single codebase to both desktop and Android, fully multilingual with right-to-left support.",

		results:
			"An actively developed product that runs across desktop and mobile from one codebase, works offline by design, and serves users in English, Arabic and Urdu — including full right-to-left layouts.",

		owner: {
			name: "dragondevs",
			role: "Product by dragondevs",
			website: "https://bizstock.net",
		},

		year: "2025",
		duration: "Ongoing product",
		timeline: [
			{
				phase: "Foundations",
				duration: "Phase 1",
				description: "Local-first data layer and the core inventory model.",
			},
			{
				phase: "POS & Scanning",
				duration: "Phase 2",
				description: "Point-of-sale, barcode scanning and label generation.",
			},
			{
				phase: "Sync & Export",
				duration: "Phase 3",
				description: "Real-time sync, plus Excel and PDF export.",
			},
			{
				phase: "Cross-platform & i18n",
				duration: "Phase 4",
				description: "Desktop and Android from one codebase; English, Arabic and Urdu.",
			},
		],

		team: {
			size: "In-house product team",
			roles: ["Product", "Cross-platform Development", "UX", "Localization"],
		},

		technologies: ["React", "TypeScript", "Tauri", "Rust", "SQLite", "Drizzle ORM", "Tailwind CSS", "Socket.IO"],

		technologiesDetails: [
			{ name: "Tauri (Rust)", purpose: "One lightweight, native codebase for desktop and Android." },
			{ name: "Local SQLite + Drizzle ORM", purpose: "On-device data so the app is instant and works fully offline." },
			{ name: "Socket.IO", purpose: "Real-time sync across devices once a connection is available." },
			{ name: "React + TypeScript", purpose: "A fast, type-safe interface shared across every platform." },
		],

		keyFeatures: [
			"Offline-first: fully usable with no internet connection",
			"Real-time sync across devices when back online",
			"Native barcode scanning and barcode / QR generation",
			"Point-of-sale checkout and inventory management",
			"Excel and PDF export for reports and records",
			"Cross-platform — desktop and Android from one codebase",
			"Multilingual: English, Arabic and Urdu with right-to-left support",
		],

		status: "Active",
		statusIcon: "Zap",

		liveUrl: "https://bizstock.net",

		content: [
			{
				type: "paragraph",
				content: "Bizstock is our own product — the one we build the way we think inventory software should work. It's a fast, offline-first inventory and point-of-sale system for the shops and businesses that get overlooked by browser-only, always-online tools.",
			},
			{
				type: "h2",
				content: "The Opportunity",
			},
			{
				type: "paragraph",
				content: "Most inventory and POS tools quietly assume two things: a reliable internet connection and a computer with a browser open all day. On a real shop floor, neither is guaranteed. Connections drop, work happens on phones and in stockrooms, and every extra seat costs money. We saw room for something that simply works — everywhere, all the time.",
			},
			{
				type: "list",
				items: [
					"Keep working when the internet doesn't",
					"Run on the counter and in your pocket, not just in a browser",
					"Make everyday stock tasks — scanning, counting, selling — fast",
					"Speak the languages our users actually use, right-to-left included",
				],
			},
			{
				type: "image",
				url: "https://picsum.photos/seed/bizstock-app/800/400",
				alt: "Bizstock inventory view (placeholder)",
			},
			{
				type: "h2",
				content: "Our Approach: Local-First",
			},
			{
				type: "paragraph",
				content: "The core decision was to build local-first. Data lives on the device in a local database, so every action is instant and nothing waits on a server. When a connection is available, changes sync in real time across devices. The result feels less like a website and more like a native app that happens to stay in sync.",
			},
			{
				type: "h2",
				content: "What Makes It Different",
			},
			{
				type: "h3",
				content: "Truly Offline",
			},
			{
				type: "paragraph",
				content: "Bizstock doesn't degrade when the network drops — it keeps going. Sell, scan, adjust stock and run reports offline, and let it reconcile automatically once you're back online.",
			},
			{
				type: "h3",
				content: "Built for the Shop Floor",
			},
			{
				type: "paragraph",
				content: "Native barcode scanning, barcode and QR generation, a quick point-of-sale flow, and one-tap Excel and PDF export cover the tasks that fill a working day.",
			},
			{
				type: "imageGrid",
				images: [
					{ url: "https://picsum.photos/seed/bizstock-pos/600/400", alt: "Point of sale (placeholder)", caption: "Fast point-of-sale" },
					{ url: "https://picsum.photos/seed/bizstock-scan/600/400", alt: "Barcode scanning (placeholder)", caption: "Native barcode scanning" },
				],
				gridCols: 2,
			},
			{
				type: "h3",
				content: "One Codebase, Every Device",
			},
			{
				type: "paragraph",
				content: "Using a native cross-platform foundation, Bizstock ships to desktop and Android from a single codebase — lightweight, fast, and consistent wherever you run it.",
			},
			{
				type: "h3",
				content: "Multilingual by Design",
			},
			{
				type: "paragraph",
				content: "English, Arabic and Urdu are supported out of the box, with full right-to-left layouts — because good software should meet people in their own language.",
			},
			{
				type: "h2",
				content: "Where It's Going",
			},
			{
				type: "paragraph",
				content: "Bizstock is in active development and shipping regularly. It's the product we use to prove what we believe: that business software can be fast, offline-capable, cross-platform and genuinely pleasant to use — all at once.",
			},
		],

		seo: {
			title: "Bizstock — Offline-First Inventory & POS App | dragondevs",
			description:
				"Bizstock is dragondevs' own offline-first inventory and point-of-sale product: cross-platform desktop and Android, real-time sync, barcode scanning, and multilingual right-to-left support.",
			keywords: [
				"inventory management software",
				"point of sale app",
				"offline-first app",
				"Tauri app",
				"cross-platform POS",
				"barcode inventory",
				"bizstock",
				"dragondevs",
			],
			ogImage: "/bizstock/img1.png",
			canonical: "https://dragondevs.co/case-studies/bizstock-inventory-pos-app",
		},

		relatedProjects: [1, 2],
	},
];
