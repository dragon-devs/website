import type {Metadata} from "next";
import {LegalLayout} from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
	title: "Terms of Service",
	description:
		"The terms that govern your use of the dragondevs website and the basis on which we provide our services.",
	alternates: {canonical: "/terms"},
};

export default function TermsPage() {
	return (
		<LegalLayout
			title="Terms of Service"
			updated="June 19, 2026"
			intro="These Terms govern your use of the dragondevs website at dragondevs.co. By using the site, you agree to these Terms."
		>
			<h2>1. Who we are</h2>
			<p>
				dragondevs (“we”, “us”, “our”) is a digital product engineering studio based in Islamabad,
				Pakistan. You can contact us at <a href="mailto:info@dragondevs.co">info@dragondevs.co</a>.
			</p>

			<h2>2. Use of this website</h2>
			<p>
				You may use this website for lawful purposes only. You agree not to misuse the site, attempt
				to disrupt it, access it in unauthorised ways, or use it to infringe the rights of others.
			</p>

			<h2>3. Our services and project engagements</h2>
			<p>
				This website describes the services we offer. It is information, not an offer or a contract.
				Any project we take on is governed by a separate written agreement (such as a proposal,
				statement of work or contract) that sets out scope, deliverables, timelines, fees and
				ownership. Where that agreement conflicts with these Terms, the agreement controls for that
				engagement.
			</p>

			<h2>4. Our products</h2>
			<p>
				We also build and operate our own products, including BizStock (bizstock.net). Those products
				are provided under their own terms and licensing, which apply in addition to these Terms.
			</p>

			<h2>5. Intellectual property</h2>
			<p>
				The content, design, branding and code of this website are owned by dragondevs or our
				licensors and are protected by applicable laws. You may not copy, reproduce or reuse them
				without our written permission. Ownership of work produced under a client engagement is
				determined by the relevant project agreement.
			</p>

			<h2>6. Third-party links and services</h2>
			<p>
				Our site links to third-party websites and services (for example Calendly for scheduling and
				analytics providers). We don't control these and aren't responsible for their content,
				policies or availability.
			</p>

			<h2>7. Disclaimer</h2>
			<p>
				This website is provided “as is” and “as available”. While we work to keep information
				accurate and the site running smoothly, we make no warranties that it will be error-free,
				uninterrupted, or that the content is complete or current.
			</p>

			<h2>8. Limitation of liability</h2>
			<p>
				To the fullest extent permitted by law, dragondevs will not be liable for any indirect,
				incidental or consequential damages arising from your use of, or inability to use, this
				website. Nothing in these Terms limits liability that cannot be limited under applicable law.
			</p>

			<h2>9. Governing law</h2>
			<p>
				These Terms are governed by the laws of Pakistan, and any disputes relating to the website
				will be subject to the courts of Islamabad, Pakistan.
			</p>

			<h2>10. Changes to these Terms</h2>
			<p>
				We may update these Terms from time to time. The “Last updated” date above reflects the most
				recent version, and continued use of the site means you accept the updated Terms.
			</p>

			<h2>11. Contact us</h2>
			<p>
				Questions about these Terms? Email{" "}
				<a href="mailto:info@dragondevs.co">info@dragondevs.co</a>.
			</p>
		</LegalLayout>
	);
}
