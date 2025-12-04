
import React from 'react';
import { motion } from 'framer-motion';
import {
	Calendar, Clock, Users, DollarSign, ExternalLink, Github,
	CheckCircle2, ArrowRight, TrendingUp, TrendingDown, Zap,
	ShoppingCart, Quote, Minus
} from 'lucide-react';
import {Separator} from "@/components/ui/separator";

// Content Renderer Component
export const RichContentRenderer = ({ content }: { content: any[] }) => {
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
						return (
							<motion.h1
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="text-4xl md:text-5xl font-bold mb-6"
							>
								{block.content}
							</motion.h1>
						);

					case 'h2':
						return (
							<motion.h2
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="text-3xl md:text-4xl font-bold mb-4 mt-12"
							>
								{block.content}
							</motion.h2>
						);

					case 'h3':
						return (
							<motion.h3
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="text-2xl md:text-3xl font-bold mb-3 mt-8"
							>
								{block.content}
							</motion.h3>
						);

					case 'paragraph':
						return (
							<motion.p
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="text-lg text-muted-foreground leading-relaxed"
							>
								{block.content}
							</motion.p>
						);

					case 'image':
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="rounded-lg overflow-hidden my-8"
							>
								<img
									src={block.url}
									alt={block.alt}
									className="w-full h-auto"
								/>
							</motion.div>
						);

					case 'imageGrid':
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className={`grid gap-4 my-8 ${
									block.gridCols === 2 ? 'md:grid-cols-2' :
										block.gridCols === 3 ? 'md:grid-cols-3' :
											block.gridCols === 4 ? 'md:grid-cols-4' :
												'grid-cols-1'
								}`}
							>
								{block.images?.map((img: any, i: number) => (
									<div key={i} className="rounded-lg overflow-hidden">
										<img src={img.url} alt={img.alt} className="w-full h-auto" />
										{img.caption && (
											<p className="text-sm text-muted-foreground mt-2 text-center">
												{img.caption}
											</p>
										)}
									</div>
								))}
							</motion.div>
						);

					case 'list':
						const ListTag = block.ordered ? 'ol' : 'ul';
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
							>
								<ListTag className={`space-y-2 pl-8 ${block.ordered ? 'list-decimal' : 'list-disc'} list-outside text-lg text-muted-foreground`}>
									{block.items?.map((item: string, i: number) => (
										<li key={i}>{item}</li>
									))}
								</ListTag>
							</motion.div>
						);

					case 'quote':
						return (
							<motion.blockquote
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								className="border-l-4 border-primary pl-6 px-4 py-4 my-8 bg-muted/30 rounded-r-lg"
							>
								<Quote className="text-primary mb-2" size={24} />
								<p className="text-xl italic mb-2">{block.content}</p>
								{block.author && (
									<footer className="text-sm text-muted-foreground">
										— {block.author}
									</footer>
								)}
							</motion.blockquote>
						);

					case 'link':
						return (
							<motion.a
								key={index}
								href={block.href}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								className="inline-flex items-center gap-2 text-primary hover:underline"
							>
								{block.label || block.content}
								<ExternalLink size={16} />
							</motion.a>
						);

					case 'divider':
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, scaleX: 0 }}
								whileInView={{ opacity: 1, scaleX: 1 }}
								viewport={{ once: true }}
								className="my-12"
							>
								<Separator />
							</motion.div>
						);

					case 'cta':
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
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
							</motion.div>
						);

					default:
						return null;
				}
			})}
		</div>
	);
};
