/**
 * Single source of truth for dragondevs SEO constants and structured data.
 *
 * Every value here is verifiable from the site itself (footer social links,
 * WhatsApp contact). Nothing is invented — if a field cannot be sourced, it is
 * left out rather than guessed, because wrong structured data is worse than
 * absent structured data.
 */

export const SITE_URL = "https://dragondevs.co";

export const SITE_NAME = "dragondevs";

/** Real, in-use profiles — taken from components/Footer.tsx. */
export const SOCIAL_LINKS = {
	github: "https://github.com/dragon-devs",
	linkedin: "https://www.linkedin.com/company/dragondevs/",
	x: "https://x.com/dragondevs_",
} as const;

/** Primary click-to-chat contact, shared with the bizstock product line. */
export const WHATSAPP_E164 = "+923466955928";

/** Public enquiry inbox, as advertised on the contact page. */
export const CONTACT_EMAIL = "info@dragondevs.co";

/**
 * Organization schema.
 *
 * NOTE: deliberately NOT `LocalBusiness`. LocalBusiness requires a full street
 * address (street, locality, postal code) and Google treats a fabricated or
 * incomplete one as spam. Only the locality and country are confirmed, so those
 * are all that ship here — supply a verified street address and this can be
 * upgraded.
 */
export const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"@id": `${SITE_URL}/#organization`,
	name: SITE_NAME,
	alternateName: "Dragon Devs",
	url: SITE_URL,
	logo: `${SITE_URL}/svg-transparent-black.svg`,
	description:
		"dragondevs builds SEO-friendly websites, custom software, and full-stack web apps, taking products from idea to deployment.",
	email: CONTACT_EMAIL,
	telephone: WHATSAPP_E164,
	address: {
		"@type": "PostalAddress",
		addressLocality: "Islamabad",
		addressCountry: "PK",
	},
	sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin, SOCIAL_LINKS.x],
	contactPoint: [
		{
			"@type": "ContactPoint",
			contactType: "sales",
			telephone: WHATSAPP_E164,
			email: CONTACT_EMAIL,
			availableLanguage: ["en", "ur"],
		},
	],
} as const;

/**
 * Builds a WebSite schema. Kept separate from Organization so each can be
 * emitted independently.
 */
export const websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": `${SITE_URL}/#website`,
	name: SITE_NAME,
	url: SITE_URL,
	publisher: { "@id": `${SITE_URL}/#organization` },
} as const;
