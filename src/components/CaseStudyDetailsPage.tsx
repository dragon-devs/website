'use client';

import {
	Calendar,
	CheckCircle2,
	Clock,
	DollarSign,
	ExternalLink,
	Github,
	ShoppingCart,
	TrendingDown,
	TrendingUp,
	Users, Zap
} from "lucide-react";
import { RichContentRenderer } from "./RichContentRenderer";
import { motion } from "motion/react";
import { CaseStudyDetails } from "@/lib/case-study";

interface CaseStudyDetailsPageProps {
	caseStudy: CaseStudyDetails;
}

const CaseStudyDetailsPage = ({ caseStudy }: CaseStudyDetailsPageProps) => {

	const getIcon = (iconName: string) => {
		const icons: any = {
			Zap, TrendingUp, TrendingDown, ShoppingCart
		};
		const Icon = icons[iconName] || CheckCircle2;
		return <Icon className="w-5 h-5" />;
	};

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section
				className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-primary/20 via-purple-500/10 to-emerald-500/10">
				<img
					src={caseStudy.heroImage}
					alt={caseStudy.title}
					className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

				<div className="relative container mx-auto md:px-8 px-4 h-full flex items-end pb-24">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="max-w-4xl"
					>
						<h1 className="text-4xl md:text-6xl font-bold mb-4">
							{caseStudy.title}
						</h1>
						<p className="text-xl md:text-2xl text-muted-foreground">
							{caseStudy.subtitle}
						</p>
					</motion.div>
				</div>
			</section>

			{/* Project Info Cards */}
			<section className="container mx-auto md:px-8 px-4 -mt-16 relative z-10">
				<div className="grid md:grid-cols-4 gap-4">
					{[
						{ icon: Calendar, label: "Year", value: caseStudy.year },
						{ icon: Clock, label: "Duration", value: caseStudy.duration },
						{ icon: DollarSign, label: "Budget", value: caseStudy.budget?.range || "N/A" },
						{ icon: Users, label: "Client", value: caseStudy.client?.name || "N/A" }
					].map((item, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1 }}
							className="bg-card border border-border rounded-lg p-6"
						>
							<item.icon className="w-6 h-6 text-primary mb-2" />
							<p className="text-sm text-muted-foreground mb-1">{item.label}</p>
							<p className="font-semibold">{item.value}</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* Main Content */}
			<section className="container mx-auto md:px-8 px-4 py-16">
				<div className="grid lg:grid-cols-4 gap-12">
					{/* Main Content Column */}
					<div className="lg:col-span-3">
						<RichContentRenderer content={caseStudy.content} />
					</div>

					{/* Sidebar */}
					<aside className="space-y-8">
						{/* Technologies */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="bg-card border border-border rounded-lg p-6"
						>
							<h3 className="text-xl font-bold mb-4">Technologies</h3>
							<div className="flex flex-wrap gap-2">
								{caseStudy.technologies.map((tech, i) => (
									<span
										key={i}
										className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
									>
										{tech}
									</span>
								))}
							</div>
						</motion.div>

						{/* Timeline */}
						{caseStudy.timeline && (
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								className="bg-card border border-border rounded-lg p-6"
							>
								<h3 className="text-xl font-bold mb-4">Timeline</h3>
								<div className="space-y-4">
									{caseStudy.timeline.map((phase, i) => (
										<div key={i} className="relative pl-4 border-l-2 border-primary/30">
											<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
											<p className="font-semibold">{phase.phase}</p>
											<p className="text-sm text-muted-foreground">{phase.duration}</p>
										</div>
									))}
								</div>
							</motion.div>
						)}

						{/* Links */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="space-y-3"
						>
							{caseStudy.liveUrl && (
								<a
									href={caseStudy.liveUrl}
									className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors"
								>
									<ExternalLink size={18} />
									View Live Project
								</a>
							)}
							{caseStudy.githubUrl && (
								<a
									href={caseStudy.githubUrl}
									className="flex items-center justify-center gap-2 w-full bg-secondary text-secondary-foreground px-4 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
								>
									<Github size={18} />
									View on GitHub
								</a>
							)}
						</motion.div>
					</aside>
				</div>
			</section>

			{/* Metrics Section */}
			{/*{caseStudy.metrics && (*/}
			{/*	<section className="bg-muted/30 py-16">*/}
			{/*		<div className="container mx-auto px-4">*/}
			{/*			<motion.h2*/}
			{/*				initial={{ opacity: 0, y: 20 }}*/}
			{/*				whileInView={{ opacity: 1, y: 0 }}*/}
			{/*				viewport={{ once: true }}*/}
			{/*				className="text-3xl md:text-4xl font-bold text-center mb-12"*/}
			{/*			>*/}
			{/*				Results & Impact*/}
			{/*			</motion.h2>*/}

			{/*			<div className="grid md:grid-cols-4 gap-6">*/}
			{/*				{caseStudy.metrics.map((metric, i) => (*/}
			{/*					<motion.div*/}
			{/*						key={i}*/}
			{/*						initial={{ opacity: 0, y: 20 }}*/}
			{/*						whileInView={{ opacity: 1, y: 0 }}*/}
			{/*						viewport={{ once: true }}*/}
			{/*						transition={{ delay: i * 0.1 }}*/}
			{/*						className="bg-card border border-border rounded-lg p-6 text-center"*/}
			{/*					>*/}
			{/*						<div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">*/}
			{/*							{getIcon(metric.icon || 'CheckCircle2')}*/}
			{/*						</div>*/}
			{/*						<p className="text-3xl font-bold mb-2 text-primary">*/}
			{/*							{metric.value}*/}
			{/*						</p>*/}
			{/*						<p className="text-sm text-muted-foreground">{metric.label}</p>*/}
			{/*					</motion.div>*/}
			{/*				))}*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</section>*/}
			{/*)}*/}
		</div>
	);
};

export default CaseStudyDetailsPage;