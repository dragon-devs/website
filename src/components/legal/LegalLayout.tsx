import React from "react";
import {Separator} from "@/components/ui/separator";

interface LegalLayoutProps {
	title: string;
	updated: string;
	intro?: string;
	children: React.ReactNode;
}

/**
 * Shared shell for legal pages (Privacy, Terms) so typography and layout
 * stay identical. Styles headings/paragraphs/lists via the wrapper so the
 * page files can stay as plain semantic markup.
 */
export function LegalLayout({title, updated, intro, children}: LegalLayoutProps) {
	return (
		<div className="min-h-screen">
			<section className="pt-28 md:pt-32 pb-12">
				<div className="max-w-3xl mx-auto md:px-6 px-4">
					<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">{title}</h1>
					<p className="text-sm text-muted-foreground mt-4">Last updated: {updated}</p>
					{intro && <p className="text-lg text-muted-foreground mt-6 leading-relaxed">{intro}</p>}
				</div>
			</section>

			<div className="max-w-3xl mx-auto md:px-6 px-4">
				<Separator/>
			</div>

			<section className="py-12">
				<div
					className="max-w-3xl mx-auto md:px-6 px-4
						[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:tracking-tight
						[&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2
						[&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4
						[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul]:text-muted-foreground
						[&_li]:leading-relaxed
						[&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4"
				>
					{children}
				</div>
			</section>
		</div>
	);
}
