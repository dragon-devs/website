'use client';

import {
	Boxes,
	Calendar,
	CheckCircle2,
	Clock,
	ExternalLink,
	ShoppingCart,
	TrendingDown,
	TrendingUp,
	Zap
} from "lucide-react";
import {RichContentRenderer} from "./RichContentRenderer";
import {motion} from "motion/react";
import {CaseStudyDetails} from "@/lib/case-study";
import SpotlightCard from "./SpotlightCard";
import Pill from "@/components/Pill";
import MagnetButton from "@/components/custom/MagnetButton";
import {useRouter} from "next/navigation";
import {FaGithub} from "react-icons/fa6";

interface CaseStudyDetailsPageProps {
	caseStudy: CaseStudyDetails;
}

const CaseStudyDetailsPage = ({caseStudy}: CaseStudyDetailsPageProps) => {

	const router = useRouter()
	const getIcon = (iconName: string) => {
		const icons: any = {
			Zap, TrendingUp, TrendingDown, ShoppingCart
		};
		const Icon = icons[iconName] || CheckCircle2;
		return <Icon className="w-5 h-5"/>;
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
				<div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"/>

				<div className="relative lg:max-w-7xl container mx-auto md:px-6 px-4 h-full flex items-end pb-24">
					<motion.div
						initial={{opacity: 0, y: 30}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.6}}
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
			<section className="lg:max-w-7xl container mx-auto md:px-6 px-4 -mt-16 relative z-10">
				<div className="grid md:grid-cols-4 md:gap-6 gap-4">
					{[
						{icon: Calendar, label: "Year", value: caseStudy.year},
						{icon: Boxes, label: "Type", value: caseStudy.category},
						{icon: Clock, label: "Stage", value: caseStudy.duration || "—"},
						{icon: CheckCircle2, label: "Status", value: caseStudy.status}
					].map((item, i) => (
						<SpotlightCard key={i}>
							<motion.div
								key={i}
								initial={{opacity: 0, y: 20}}
								animate={{opacity: 1, y: 0}}
								transition={{delay: i * 0.1}}
								className="backdrop-blur-sm md:p-6 p-4"
							>
								<item.icon className="size-6 text-primary mb-2"/>
								<p className="text-sm text-muted-foreground mb-1">{item.label}</p>
								<p className="font-semibold text-xl">{item.value}</p>
							</motion.div>
						</SpotlightCard>
					))}
				</div>
			</section>

			{/* Main Content */}
			<section className="lg:max-w-7xl container mx-auto md:px-6 px-4 py-12">
				<div className="grid lg:grid-cols-4 md:gap-6 gap-4">
					{/* Main Content Column */}
					<div className="lg:col-span-3">
						<RichContentRenderer content={caseStudy.content}/>
					</div>

					{/* Sidebar */}
					<aside className="md:space-y-6 space-y-4 lg:col-span-1 lg:sticky lg:top-6 h-fit">
						{/* Technologies */}
						<SpotlightCard>
							<motion.div
								initial={{opacity: 0, x: 20}}
								whileInView={{opacity: 1, x: 0}}
								viewport={{once: true}}
								className="md:p-6 p-4 backdrop-blur-xs"
							>
								<h3 className="text-xl font-bold mb-4">Technologies</h3>
								<div className="flex flex-wrap gap-2">
									{caseStudy.technologies.map((tech, i) => (
										<Pill label={tech}/>
									))}
								</div>
							</motion.div>
						</SpotlightCard>
						{/* Timeline */}
						{caseStudy.timeline && (
							<SpotlightCard>
								<motion.div
									initial={{opacity: 0, x: 20}}
									whileInView={{opacity: 1, x: 0}}
									viewport={{once: true}}
									className="p-4 md:p-6 backdrop-blur-xs"
								>
									<h3 className="text-xl font-bold mb-4">Timeline</h3>
									<div className="space-y-4">
										{caseStudy.timeline.map((phase, i) => (
											<div key={i} className="relative pl-4 border-l-2 border-primary/30">
												<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"/>
												<p className="font-semibold">{phase.phase}</p>
												<p className="text-sm text-muted-foreground">{phase.duration}</p>
											</div>
										))}
									</div>
								</motion.div>
							</SpotlightCard>
						)}

						{/* Links */}
						<motion.div
							initial={{opacity: 0, x: 20}}
							whileInView={{opacity: 1, x: 0}}
							viewport={{once: true}}
							className="w-full flex gap-4 flex-wrap"
						>
							{caseStudy.liveUrl && (
								<MagnetButton wrapperClassName="w-full md:w-auto" size={"sm"} onClick={() => router.push(caseStudy.liveUrl as string)}
								              label={"View Live"} icon={<ExternalLink size={18}/>}/>

							)}
							{caseStudy.githubUrl && (
								<MagnetButton wrapperClassName="w-full md:w-auto" size={"sm"} onClick={() => router.push(caseStudy.liveUrl as string)}
								              variant={"secondary"}
								              label={"View GitHub"} icon={<FaGithub size={18}/>}/>
							)}
						</motion.div>
					</aside>
				</div>
			</section>

			{/* Metrics Section */}
			{/*{caseStudy.metrics && (*/}
			{/*	<section className="bg-muted/30 py-16">*/}
			{/*		<div className="lg:max-w-7xl container mx-auto px-4">*/}
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
			{/*						className=" text-center"*/}
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