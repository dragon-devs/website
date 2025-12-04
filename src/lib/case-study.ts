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

// Example Case Study Data
export const caseStudies: CaseStudyDetails[] = [{
	id: 1,
	slug: "shopflow-ecommerce-platform",

	title: "ShopFlow Platform",
	subtitle: "Transforming Retail with Next-Gen E-commerce",
	category: "E-commerce",
	type: "client",

	heroImage: "https://picsum.photos/1200/600?random=1",
	thumbnail: "https://picsum.photos/600/400?random=2",
	gallery: [
		"https://picsum.photos/800/600?random=3",
		"https://picsum.photos/800/600?random=4",
		"https://picsum.photos/800/600?random=5"
	],

	description: "A complete e-commerce solution for a retail chain with 10K+ products, real-time inventory management, and seamless payment integration.",

	challenge: "The client struggled with an outdated e-commerce platform that resulted in high cart abandonment rates (68%) and poor mobile experience. Managing 10,000+ products across multiple warehouses was becoming impossible.",

	solution: "We built a modern, scalable platform using Next.js 14 with server-side rendering for optimal performance. Implemented real-time inventory sync across 5 warehouses and integrated Stripe for seamless payments with one-click checkout.",

	results: "Reduced checkout time by 40%, decreased cart abandonment to 32%, and increased mobile conversions by 156%. The platform now handles 50K+ monthly transactions with 99.9% uptime.",

	client: {
		name: "RetailCorp Inc.",
		logo: "https://picsum.photos/200/200?random=6",
		website: "https://retailcorp.example.com",
		industry: "Retail & Consumer Goods",
		size: "500-1000 employees"
	},

	year: "2024",
	duration: "6 months",
	timeline: [
		{
			phase: "Discovery & Planning",
			duration: "3 weeks",
			description: "Stakeholder interviews, user research, technical architecture planning"
		},
		{
			phase: "Design & Prototyping",
			duration: "4 weeks",
			description: "UI/UX design, interactive prototypes, design system creation"
		},
		{
			phase: "Development",
			duration: "12 weeks",
			description: "Frontend & backend development, API integration, testing"
		},
		{
			phase: "Launch & Optimization",
			duration: "5 weeks",
			description: "Soft launch, user feedback, performance optimization, full rollout"
		}
	],

	budget: {
		range: "$50,000 - $75,000",
		type: "fixed"
	},

	team: {
		size: "5 members",
		roles: ["Full-stack Developer", "UI/UX Designer", "Backend Engineer", "QA Engineer", "Project Manager"]
	},

	technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],

	technologiesDetails: [
		{
			name: "Next.js 14",
			purpose: "Server-side rendering for blazing fast page loads and SEO optimization"
		},
		{
			name: "Node.js",
			purpose: "Robust backend API with real-time inventory management"
		},
		{
			name: "PostgreSQL",
			purpose: "Reliable database handling 10K+ products and transactions"
		},
		{
			name: "Stripe",
			purpose: "Secure payment processing with one-click checkout"
		}
	],

	metrics: [
		{
			label: "Faster Checkout",
			value: "40%",
			icon: "Zap"
		},
		{
			label: "Cart Abandonment Reduced",
			value: "36%",
			icon: "TrendingDown"
		},
		{
			label: "Mobile Conversions",
			value: "+156%",
			icon: "TrendingUp"
		},
		{
			label: "Monthly Transactions",
			value: "50K+",
			icon: "ShoppingCart"
		}
	],

	keyFeatures: [
		"Real-time inventory synchronization across 5 warehouses",
		"One-click checkout with saved payment methods",
		"Advanced product filtering and search",
		"Personalized product recommendations using AI",
		"Multi-currency and multi-language support",
		"Admin dashboard with analytics and reporting"
	],

	status: "Live",
	statusIcon: "CheckCircle2",

	liveUrl: "https://shopflow.example.com",

	content: [
		{
			type: "h2",
			content: "The Challenge"
		},
		{
			type: "paragraph",
			content: "RetailCorp came to us with a critical problem: their aging e-commerce platform was costing them millions in lost sales. With a cart abandonment rate of 68% and a mobile experience that frustrated users, they needed a complete overhaul."
		},
		{
			type: "image",
			url: "https://picsum.photos/800/400?random=7",
			alt: "Old platform issues"
		},
		{
			type: "h2",
			content: "Our Approach"
		},
		{
			type: "paragraph",
			content: "We started with extensive user research to understand pain points. Through interviews with 50+ customers and analysis of user behavior, we identified three critical areas:"
		},
		{
			type: "list",
			items: [
				"Slow page loads killing conversions (average 8s load time)",
				"Complicated checkout process with 7 steps",
				"Poor mobile experience with unresponsive design"
			]
		},
		{
			type: "h3",
			content: "Technical Architecture"
		},
		{
			type: "paragraph",
			content: "We designed a modern architecture leveraging Next.js 14's App Router for optimal performance. The system was built with scalability in mind, using microservices for inventory, payments, and user management."
		},
		{
			type: "imageGrid",
			images: [
				{ url: "https://picsum.photos/600/400?random=8", alt: "System architecture", caption: "High-level architecture" },
				{ url: "https://picsum.photos/600/400?random=9", alt: "Database schema", caption: "Database design" }
			],
			gridCols: 2
		},
		{
			type: "h2",
			content: "Key Features Delivered"
		},
		{
			type: "h3",
			content: "1. Lightning-Fast Performance"
		},
		{
			type: "paragraph",
			content: "Using Next.js server components and aggressive caching strategies, we reduced page load times from 8 seconds to under 1.5 seconds. Product pages now render in milliseconds using incremental static regeneration."
		},
		{
			type: "h3",
			content: "2. Streamlined Checkout"
		},
		{
			type: "paragraph",
			content: "We reduced the checkout process from 7 steps to just 3, implementing Stripe's one-click payment solution. Returning customers can complete purchases in under 30 seconds."
		},
		{
			type: "image",
			url: "https://picsum.photos/800/400?random=10",
			alt: "New checkout flow"
		},
		{
			type: "h3",
			content: "3. Real-Time Inventory Management"
		},
		{
			type: "paragraph",
			content: "Built a custom inventory system that syncs across 5 warehouses in real-time using WebSockets. Customers always see accurate stock levels, eliminating overselling issues."
		},
		{
			type: "quote",
			content: "The new platform has transformed our business. We're seeing record sales and customer satisfaction has never been higher.",
			author: "John Smith, CEO at RetailCorp"
		},
		{
			type: "h2",
			content: "Results & Impact"
		},
		{
			type: "paragraph",
			content: "The platform launched in Q1 2024 and exceeded all expectations. Within the first 3 months, RetailCorp saw a complete transformation of their online business."
		},
		{
			type: "imageGrid",
			images: [
				{ url: "https://picsum.photos/400/300?random=11", alt: "Conversion metrics", caption: "Conversion improvements" },
				{ url: "https://picsum.photos/400/300?random=12", alt: "Performance metrics", caption: "Performance gains" },
				{ url: "https://picsum.photos/400/300?random=13", alt: "Revenue growth", caption: "Revenue impact" }
			],
			gridCols: 3
		},
		// {
		// 	type: "divider"
		// },
		// {
		// 	type: "cta",
		// 	content: "Want similar results for your business?",
		// 	label: "Let's Talk",
		// 	href: "/contact"
		// }
	],

	seo: {
		title: "ShopFlow E-commerce Platform Case Study | 40% Faster Checkout",
		description: "Discover how we transformed RetailCorp's e-commerce platform, reducing checkout time by 40% and increasing conversions by 156%. Full case study with metrics and insights.",
		keywords: ["e-commerce development", "Next.js case study", "online store optimization", "checkout optimization", "retail technology"],
		ogImage: "https://picsum.photos/1200/630?random=14",
		canonical: "https://yoursite.com/case-studies/shopflow-ecommerce-platform"
	},

	relatedProjects: [5, 8],

	testimonial: {
		quote: "Working with this team was incredible. They not only delivered a beautiful platform but also understood our business needs deeply. The results speak for themselves - our online revenue has doubled since launch.",
		author: "John Smith",
		role: "CEO",
		avatar: "https://picsum.photos/100/100?random=15",
		company: "RetailCorp Inc."
	}
}];