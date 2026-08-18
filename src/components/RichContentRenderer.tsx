'use client';

import React from 'react';
import {ArrowRight, CheckCircle2, ExternalLink, Quote, ShoppingCart, TrendingDown, TrendingUp, Zap} from 'lucide-react';
import {Separator} from "@/components/ui/separator";
import {InViewReveal} from "@/components/motion";
import {themedSrc, useIsLightTheme} from "@/lib/themed-image";

/**
 * Renders a case study body.
 *
 * Every block reveals on scroll through `InViewReveal` rather than
 * `<motion.x initial={{opacity: 0}} whileInView={…}>`. This is the whole
 * article text — headings, paragraphs, lists — so it is also the bulk of what
 * a crawler should be reading. Motion's `initial` ships as `style="opacity:0"`
 * in the server HTML, which made the entire case study invisible to anything
 * that does not run JavaScript. See `components/motion/index.tsx`.
 */
export const RichContentRenderer = ({ content }: { content: any[] }) => {
	const isLight = useIsLightTheme();

	const getIcon = (iconName: string) => {
		const icons: any = {
			Zap, TrendingUp, TrendingDown, ShoppingCart, CheckCircle2
		};
		return icons[iconName] || CheckCircle2;
	};

	return (
		<div className="md:space-y-8 space-y-4">
			{content.map((block, index) => {
				switch (block.type) {
					case 'h1':
						// Intentionally rendered as an <h2>, not an <h1>. The page
						// itself already provides the single <h1> (the case study
						// hero title). Emitting another <h1> from body content would
						// give the page two H1s — the exact SEO problem we're avoiding.
						return (
							<InViewReveal
								as="h2"
								key={index}
								className="text-4xl md:text-5xl font-bold mb-6"
							>
								{block.content}
							</InViewReveal>
						);

					case 'h2':
						return (
							<InViewReveal
								as="h2"
								key={index}
								className="text-3xl md:text-4xl font-bold mb-4 mt-10"
							>
								{block.content}
							</InViewReveal>
						);

					case 'h3':
						return (
							<InViewReveal
								as="h3"
								key={index}
								className="text-2xl md:text-3xl font-bold mb-3 mt-8"
							>
								{block.content}
							</InViewReveal>
						);

					case 'paragraph':
						return (
							<InViewReveal
								as="p"
								key={index}
								className="text-lg text-muted-foreground leading-relaxed"
							>
								{block.content}
							</InViewReveal>
						);

					case 'image':
						return (
							<InViewReveal
								key={index}
								from={{ opacity: 0, scale: 0.95 }}
								to={{ opacity: 1, scale: 1 }}
								className="rounded-lg overflow-hidden my-8"
							>
								<img
									src={themedSrc(block.url, isLight)}
									alt={block.alt}
									className="w-full h-auto"
								/>
							</InViewReveal>
						);

					case 'imageGrid':
						return (
							<InViewReveal
								key={index}
								className={`grid gap-4 my-8 ${
									block.gridCols === 2 ? 'md:grid-cols-2' :
										block.gridCols === 3 ? 'md:grid-cols-3' :
											block.gridCols === 4 ? 'md:grid-cols-4' :
												'grid-cols-1'
								}`}
							>
								{block.images?.map((img: any, i: number) => (
									<div key={i} className="rounded-lg overflow-hidden">
										<img src={themedSrc(img.url, isLight)} alt={img.alt} className="w-full h-auto" />
										{img.caption && (
											<p className="text-sm text-muted-foreground mt-2 text-center">
												{img.caption}
											</p>
										)}
									</div>
								))}
							</InViewReveal>
						);

					case 'list':
						const ListTag = block.ordered ? 'ol' : 'ul';
						return (
							<InViewReveal
								key={index}
								from={{ opacity: 0, x: -20 }}
								to={{ opacity: 1, x: 0 }}
							>
								<ListTag className={`space-y-2 pl-8 ${block.ordered ? 'list-decimal' : 'list-disc'} list-outside text-lg text-muted-foreground`}>
									{block.items?.map((item: string, i: number) => (
										<li key={i}>{item}</li>
									))}
								</ListTag>
							</InViewReveal>
						);

					case 'quote':
						return (
							<InViewReveal
								as="blockquote"
								key={index}
								from={{ opacity: 0, x: -20 }}
								to={{ opacity: 1, x: 0 }}
								className="border-l-4 border-primary pl-6 px-4 py-4 my-8 bg-muted/30 rounded-r-lg"
							>
								<Quote className="text-primary mb-2" size={24} />
								<p className="text-xl italic mb-2">{block.content}</p>
								{block.author && (
									<footer className="text-sm text-muted-foreground">
										— {block.author}
									</footer>
								)}
							</InViewReveal>
						);

					case 'link':
						return (
							<InViewReveal
								as="a"
								key={index}
								href={block.href}
								from={{ opacity: 0 }}
								to={{ opacity: 1 }}
								className="inline-flex items-center gap-2 text-primary hover:underline"
							>
								{block.label || block.content}
								<ExternalLink size={16} />
							</InViewReveal>
						);

					case 'divider':
						return (
							<InViewReveal
								key={index}
								from={{ opacity: 0, scaleX: 0 }}
								to={{ opacity: 1, scaleX: 1 }}
								className="my-12"
							>
								<Separator />
							</InViewReveal>
						);

					case 'cta':
						return (
							<InViewReveal
								key={index}
								className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center my-12"
							>
								<p className="text-2xl font-bold mb-4">{block.content}</p>
								<a
									href={block.href}
									className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
								>
									{block.label}
									<ArrowRight size={20} />
								</a>
							</InViewReveal>
						);

					default:
						return null;
				}
			})}
		</div>
	);
};
