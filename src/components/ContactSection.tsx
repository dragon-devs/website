"use client";

import {ArrowRight, Calendar, Mail, MapPin, Phone} from "lucide-react";
import {motion} from "motion/react";
import React, {useEffect, useMemo, useState} from "react";
import {toast} from "sonner";
import {GradientText} from "@/components/hero/GradientText";

const PROJECT_TYPES = [
	{value: "web-app", label: "Web app / website"},
	{value: "custom-software", label: "Custom software"},
	{value: "mvp", label: "MVP development"},
	{value: "management-system", label: "Management system"},
	{value: "mobile", label: "Cross-platform app"},
	{value: "support", label: "Deploy & maintain"},
	{value: "other", label: "Something else"},
];

const BUDGETS = [
	"Under $1,000",
	"$1,000 – $5,000",
	"$5,000 – $15,000",
	"$15,000+",
	"Not sure yet",
];

const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "Flexible / not sure"];

const contactInfo = [
	{icon: Mail, label: "Email", value: "info@dragondevs.co", link: "mailto:info@dragondevs.co"},
	{icon: Phone, label: "Phone", value: "+92 346 6955928", link: "tel:+923466955928"},
	{icon: MapPin, label: "Location", value: "Islamabad, Pakistan", link: null},
];

type FormState = {
	name: string;
	email: string;
	company: string;
	projectType: string;
	budget: string;
	timeline: string;
	message: string;
};

const EMPTY: FormState = {
	name: "",
	email: "",
	company: "",
	projectType: "",
	budget: "",
	timeline: "",
	message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldBase =
	"w-full px-4 py-3 bg-background/60 border text-foreground placeholder-muted-foreground focus:outline-none transition-all";

export const ContactSection = () => {
	const [form, setForm] = useState<FormState>(EMPTY);
	const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
	const [submitting, setSubmitting] = useState(false);
	// honeypot: real users never see/fill this; bots do
	const [website, setWebsite] = useState("");

	// Pre-select the development type from /contact?type=... and bring the
	// form into view, and handle landing on the #contact anchor cross-page.
	useEffect(() => {
		if (typeof window === "undefined") return;

		const params = new URLSearchParams(window.location.search);
		const type = params.get("type");
		const valid = PROJECT_TYPES.some((t) => t.value === type);

		if (valid && type) {
			setForm((f) => ({...f, projectType: type}));
		}

		if (valid || window.location.hash === "#contact") {
			// wait a tick for layout, then scroll the section into view
			const id = window.setTimeout(() => {
				document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
			}, 120);
			return () => window.clearTimeout(id);
		}
	}, []);

	const set = (key: keyof FormState, value: string) => {
		setForm((f) => ({...f, [key]: value}));
		setErrors((e) => (e[key] ? {...e, [key]: undefined} : e));
	};

	const validate = (state: FormState) => {
		const next: Partial<Record<keyof FormState, string>> = {};
		if (state.name.trim().length < 2) next.name = "Please enter your name.";
		if (!EMAIL_RE.test(state.email.trim())) next.email = "Enter a valid email address.";
		if (!state.projectType) next.projectType = "Pick what you need.";
		if (state.message.trim().length < 10) next.message = "A little more detail helps (10+ characters).";
		return next;
	};

	const typeLabel = useMemo(
		() => PROJECT_TYPES.find((t) => t.value === form.projectType)?.label ?? "Project inquiry",
		[form.projectType],
	);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const next = validate(form);
		setErrors(next);

		if (Object.keys(next).length > 0) {
			toast.error("Please fix the highlighted fields.");
			const first = document.querySelector<HTMLElement>("[data-error='true']");
			first?.focus();
			return;
		}

		setSubmitting(true);

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({
					name: form.name,
					email: form.email,
					company: form.company,
					projectType: typeLabel,
					budget: form.budget,
					timeline: form.timeline,
					message: form.message,
					website,
				}),
			});

			if (!res.ok) {
				const data = await res.json().catch(() => ({}));
				throw new Error(data.message || "Couldn't send your message.");
			}

			toast.success("Thanks! We've got your message and will get back to you asap.");
			setForm(EMPTY);
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Something went wrong. Please email info@dragondevs.co.");
		} finally {
			setSubmitting(false);
		}
	};

	const errClass = (key: keyof FormState) =>
		errors[key] ? "border-red-500/70 focus:border-red-500" : "border-border focus:border-primary/50";

	return (
		<section id="contact" className="scroll-mt-4 pt-10 pb-24 relative">
			<div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto md:px-6 px-4">
				{/* Left: intro + contact details */}
				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true, amount: 0.2}}
					className="flex flex-col gap-6 justify-between"
				>
					<div>
						<span className="text-primary font-semibold text-sm tracking-wider uppercase">Get in touch</span>
						<GradientText size="4-5" className="block font-bold my-4">
							Let's build something
						</GradientText>
						<p className="text-muted-foreground text-lg max-w-xl">
							Tell us what you're working on. We'll reply quickly — and tell you honestly whether
							we're the right fit and how we'd approach it.
						</p>
					</div>

					<div className="grid gap-4">
						{contactInfo.map((info, index) => (
							<motion.a
								href={info.link ?? "#"}
								key={info.label}
								initial={{opacity: 0, y: 16}}
								whileInView={{opacity: 1, y: 0}}
								viewport={{once: true}}
								transition={{delay: index * 0.08}}
								className="relative group overflow-hidden border border-border p-5 hover:border-primary/50 transition-all duration-500"
							>
								<info.icon size={120} className="absolute -right-2 -bottom-6 text-muted-foreground opacity-[0.07]"/>
								<h4 className="text-foreground font-semibold mb-1 text-lg tracking-tight">{info.label}</h4>
								<p className="text-muted-foreground group-hover:text-primary/80 transition-colors">{info.value}</p>
							</motion.a>
						))}

						<a
							href="https://calendly.com/dragondevs/30min"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 border border-border p-4 hover:border-primary/50 transition-all duration-500 font-medium"
						>
							<Calendar size={18} className="text-primary"/>
							Prefer to talk? Book a 30-min call
						</a>
					</div>
				</motion.div>

				{/* Right: form */}
				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true, amount: 0.2}}
					className="border border-border md:p-8 p-5"
				>
					<h3 className="text-2xl font-bold text-foreground mb-6">Start a project</h3>

					<form className="space-y-5" onSubmit={handleSubmit} noValidate>
						{/* honeypot — hidden from users, catches bots */}
						<input
							type="text"
							name="website"
							tabIndex={-1}
							autoComplete="off"
							value={website}
							onChange={(e) => setWebsite(e.target.value)}
							aria-hidden="true"
							className="hidden"
						/>

						<div className="grid md:grid-cols-2 gap-4">
							<div>
								<label htmlFor="name" className="block text-foreground/80 mb-2 text-sm font-medium">Full name *</label>
								<input
									id="name"
									type="text"
									value={form.name}
									data-error={!!errors.name}
									onChange={(e) => set("name", e.target.value)}
									placeholder="Jane Doe"
									className={`${fieldBase} ${errClass("name")}`}
								/>
								{errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
							</div>
							<div>
								<label htmlFor="email" className="block text-foreground/80 mb-2 text-sm font-medium">Email *</label>
								<input
									id="email"
									type="email"
									value={form.email}
									data-error={!!errors.email}
									onChange={(e) => set("email", e.target.value)}
									placeholder="jane@company.com"
									className={`${fieldBase} ${errClass("email")}`}
								/>
								{errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
							</div>
						</div>

						<div className="grid md:grid-cols-2 gap-4">
							<div>
								<label htmlFor="projectType" className="block text-foreground/80 mb-2 text-sm font-medium">What do you need? *</label>
								<select
									id="projectType"
									value={form.projectType}
									data-error={!!errors.projectType}
									onChange={(e) => set("projectType", e.target.value)}
									className={`${fieldBase} ${errClass("projectType")} ${form.projectType ? "" : "text-muted-foreground"}`}
								>
									<option value="" disabled>Select an option</option>
									{PROJECT_TYPES.map((t) => (
										<option key={t.value} value={t.value} className="text-foreground bg-background">{t.label}</option>
									))}
								</select>
								{errors.projectType && <p className="text-red-500 text-xs mt-1.5">{errors.projectType}</p>}
							</div>
							<div>
								<label htmlFor="budget" className="block text-foreground/80 mb-2 text-sm font-medium">Budget range</label>
								<select
									id="budget"
									value={form.budget}
									onChange={(e) => set("budget", e.target.value)}
									className={`${fieldBase} border-border focus:border-primary/50 ${form.budget ? "" : "text-muted-foreground"}`}
								>
									<option value="">Optional</option>
									{BUDGETS.map((b) => (
										<option key={b} value={b} className="text-foreground bg-background">{b}</option>
									))}
								</select>
							</div>
						</div>

						<div className="grid md:grid-cols-2 gap-4">
							<div>
								<label htmlFor="timeline" className="block text-foreground/80 mb-2 text-sm font-medium">Timeline</label>
								<select
									id="timeline"
									value={form.timeline}
									onChange={(e) => set("timeline", e.target.value)}
									className={`${fieldBase} border-border focus:border-primary/50 ${form.timeline ? "" : "text-muted-foreground"}`}
								>
									<option value="">Optional</option>
									{TIMELINES.map((t) => (
										<option key={t} value={t} className="text-foreground bg-background">{t}</option>
									))}
								</select>
							</div>
							<div>
								<label htmlFor="company" className="block text-foreground/80 mb-2 text-sm font-medium">Company</label>
								<input
									id="company"
									type="text"
									value={form.company}
									onChange={(e) => set("company", e.target.value)}
									placeholder="Optional"
									className={`${fieldBase} border-border focus:border-primary/50`}
								/>
							</div>
						</div>

						<div>
							<label htmlFor="message" className="block text-foreground/80 mb-2 text-sm font-medium">Project details *</label>
							<textarea
								id="message"
								rows={5}
								value={form.message}
								data-error={!!errors.message}
								onChange={(e) => set("message", e.target.value)}
								placeholder="What are you building, and what does success look like?"
								className={`${fieldBase} ${errClass("message")} resize-none`}
							/>
							{errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
						</div>

						<button
							type="submit"
							disabled={submitting}
							className="w-full px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
						>
							{submitting ? "Sending…" : <>Send message <ArrowRight size={20}/></>}
						</button>

						<p className="text-xs text-muted-foreground text-center">
							We typically reply within a day. Your details are only used to respond — see our{" "}
							<a href="/privacy" className="underline underline-offset-2 hover:text-primary">privacy policy</a>.
						</p>
					</form>
				</motion.div>
			</div>
		</section>
	);
};
