import type {Metadata} from "next";
import {LegalLayout} from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"How dragondevs collects, uses and protects the information you share with us through our website and contact forms.",
	alternates: {canonical: "/privacy"},
};

export default function PrivacyPage() {
	return (
		<LegalLayout
			title="Privacy Policy"
			updated="June 19, 2026"
			intro="This Privacy Policy explains how dragondevs (“we”, “us”, “our”) collects, uses and protects information when you visit dragondevs.co or get in touch with us."
		>
			<h2>1. Who we are</h2>
			<p>
				dragondevs is a digital product engineering studio based in Islamabad, Pakistan. For any
				privacy-related questions you can reach us at{" "}
				<a href="mailto:info@dragondevs.co">info@dragondevs.co</a>.
			</p>

			<h2>2. Information we collect</h2>
			<h3>Information you give us</h3>
			<p>
				When you submit our contact form or email us, we collect the details you provide — typically
				your name, email address and the contents of your message. If you book a call, scheduling is
				handled through Calendly, which collects the information needed to arrange the meeting.
			</p>
			<h3>Information collected automatically</h3>
			<p>
				Like most websites, we collect limited technical and usage data automatically — such as your
				IP address, browser type, pages visited and referring pages. We use Google Tag Manager and
				analytics to understand how the site is used. This may involve cookies or similar technologies.
			</p>

			<h2>3. How we use your information</h2>
			<ul>
				<li>To respond to your enquiries and communicate with you about your project.</li>
				<li>To provide, operate and improve our website and services.</li>
				<li>To understand site usage and improve content and performance.</li>
				<li>To meet legal, accounting and security obligations.</li>
			</ul>
			<p>We do not sell your personal information.</p>

			<h2>4. Cookies and analytics</h2>
			<p>
				We use cookies and similar technologies, primarily through Google Tag Manager and analytics
				services, to measure and improve the site. You can control cookies through your browser
				settings; disabling them may affect how parts of the site work.
			</p>

			<h2>5. Sharing your information</h2>
			<p>
				We only share information with trusted service providers who help us run our website and
				business — for example analytics (Google), scheduling (Calendly) and hosting providers. These
				providers process data on our behalf. We may also disclose information where required by law.
			</p>

			<h2>6. Data retention</h2>
			<p>
				We keep personal information only for as long as needed for the purposes described here, to
				maintain our business records, or as required by law, after which it is deleted or anonymised.
			</p>

			<h2>7. Your rights</h2>
			<p>
				Depending on where you live, you may have the right to access, correct or delete the personal
				information we hold about you, or to object to certain processing. To make a request, email us
				at <a href="mailto:info@dragondevs.co">info@dragondevs.co</a> and we'll respond within a
				reasonable time.
			</p>

			<h2>8. Third-party links</h2>
			<p>
				Our site links to third-party websites and products (including our own product, BizStock,
				at bizstock.net). We are not responsible for the privacy practices of other sites; please
				review their policies separately.
			</p>

			<h2>9. Children's privacy</h2>
			<p>
				Our website and services are not directed at children under 16, and we do not knowingly
				collect their personal information.
			</p>

			<h2>10. Changes to this policy</h2>
			<p>
				We may update this Privacy Policy from time to time. When we do, we'll revise the “Last
				updated” date above. Significant changes will be made clear on this page.
			</p>

			<h2>11. Contact us</h2>
			<p>
				Questions about this policy or your data? Email{" "}
				<a href="mailto:info@dragondevs.co">info@dragondevs.co</a>.
			</p>
		</LegalLayout>
	);
}
