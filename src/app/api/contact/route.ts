import nodemailer from "nodemailer";
import {type NextRequest, NextResponse} from "next/server";

export const runtime = "nodejs";

interface ContactBody {
	name?: string;
	email?: string;
	company?: string;
	projectType?: string;
	budget?: string;
	timeline?: string;
	message?: string;
	// honeypot — should always be empty for real users
	website?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
	let body: ContactBody;
	try {
		body = await request.json();
	} catch {
		return NextResponse.json({message: "Invalid request body."}, {status: 400});
	}

	const {name, email, company, projectType, budget, timeline, message, website} = body;

	// Bot trap: if the hidden honeypot is filled, pretend success and drop it.
	if (website) {
		return NextResponse.json({message: "Thanks!"}, {status: 200});
	}

	// Server-side validation (never trust the client).
	if (!name || name.trim().length < 2) {
		return NextResponse.json({message: "Please provide your name."}, {status: 400});
	}
	if (!email || !EMAIL_RE.test(email.trim())) {
		return NextResponse.json({message: "Please provide a valid email."}, {status: 400});
	}
	if (!message || message.trim().length < 10) {
		return NextResponse.json({message: "Please include a bit more detail."}, {status: 400});
	}

	const host = process.env.SMTP_HOST;
	const port = Number(process.env.SMTP_PORT ?? 587);
	const user = process.env.SMTP_USER;
	const pass = process.env.SMTP_PASS;
	const to = process.env.CONTACT_TO ?? user;
	const from = process.env.CONTACT_FROM ?? user;

	if (!host || !user || !pass || !to) {
		console.error("Contact form: missing SMTP env vars.");
		return NextResponse.json(
			{message: "Email isn't configured yet. Please email us directly at info@dragondevs.co."},
			{status: 500},
		);
	}

	const transporter = nodemailer.createTransport({
		host,
		port,
		secure: port === 465, // 465 = implicit TLS; 587 = STARTTLS
		auth: {user, pass},
	});

	const typeLabel = projectType?.trim() || "General enquiry";

	const textLines = [
		`New enquiry — ${typeLabel}`,
		"",
		`Name: ${name}`,
		`Email: ${email}`,
		company && `Company: ${company}`,
		`Project type: ${typeLabel}`,
		budget && `Budget: ${budget}`,
		timeline && `Timeline: ${timeline}`,
		"",
		"Message:",
		message,
	].filter(Boolean);

	const submittedAt = new Intl.DateTimeFormat("en-GB", {
		timeZone: "Asia/Karachi",
		dateStyle: "medium",
		timeStyle: "short",
	}).format(new Date());

	const html = renderEmail({
		name,
		email,
		company,
		typeLabel,
		budget,
		timeline,
		message,
		submittedAt,
	});

	try {
		await transporter.sendMail({
			from: `dragondevs website <${from}>`,
			to,
			replyTo: email,
			subject: `New enquiry — ${typeLabel} (${name})`,
			text: textLines.join("\n"),
			html,
		});

		return NextResponse.json({message: "Sent."}, {status: 200});
	} catch (error) {
		console.error("Contact form: failed to send email.", error);
		return NextResponse.json(
			{message: "Something went wrong sending your message. Please email info@dragondevs.co."},
			{status: 502},
		);
	}
}

function escapeHtml(input: string) {
	return input
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}

interface EmailData {
	name: string;
	email: string;
	company?: string;
	typeLabel: string;
	budget?: string;
	timeline?: string;
	message: string;
	submittedAt: string;
}

function renderEmail(d: EmailData) {
	const detailRow = (label: string, value: string, opts: {strong?: boolean; href?: string} = {}) => {
		const inner = opts.href
			? `<a href="${opts.href}" style="color:#2563eb;text-decoration:none">${value}</a>`
			: opts.strong
				? `<strong style="color:#0f172a">${value}</strong>`
				: `<span style="color:#0f172a">${value}</span>`;
		return `
			<tr>
				<td style="padding:14px 0;border-bottom:1px solid #eef0f4;width:140px;color:#8a92a6;font-size:13px;vertical-align:top;font-family:Helvetica,Arial,sans-serif">${label}</td>
				<td style="padding:14px 0;border-bottom:1px solid #eef0f4;color:#0f172a;font-size:15px;font-family:Helvetica,Arial,sans-serif">${inner}</td>
			</tr>`;
	};

	const chip = (text: string, bg: string, color: string) =>
		`<span style="display:inline-block;padding:5px 12px;border-radius:999px;background:${bg};color:${color};font-size:13px;font-weight:600;font-family:Helvetica,Arial,sans-serif">${text}</span>`;

	const safeName = escapeHtml(d.name);
	const safeEmail = escapeHtml(d.email);

	const chips = [
		chip(escapeHtml(d.typeLabel), "#eef2ff", "#4338ca"),
		d.budget ? chip(escapeHtml(d.budget), "#ecfdf5", "#047857") : "",
		d.timeline ? chip(escapeHtml(d.timeline), "#fff7ed", "#c2410c") : "",
	]
		.filter(Boolean)
		.join(" &nbsp; ");

	return `<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<meta name="color-scheme" content="light">
	<title>New enquiry</title>
</head>
<body style="margin:0;padding:0;background:#f1f2f6;-webkit-font-smoothing:antialiased">
	<!-- preheader (hidden preview text) -->
	<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#f1f2f6">
		${safeName} — ${escapeHtml(d.typeLabel)}${d.budget ? ` · ${escapeHtml(d.budget)}` : ""}
	</div>

	<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f2f6;padding:32px 12px">
		<tr>
			<td align="center">
				<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(15,23,42,0.08)">

					<!-- gradient accent bar -->
					<tr><td style="height:5px;background:#7c3aed;background-image:linear-gradient(90deg,#2563eb,#7c3aed,#10b981);font-size:0;line-height:0">&nbsp;</td></tr>

					<!-- header -->
					<tr>
						<td style="background:#0b0b0f;padding:28px 36px">
							<div style="font-size:22px;color:#ffffff;font-family:Helvetica,Arial,sans-serif;letter-spacing:-0.3px">
								<span style="font-weight:800">dragon</span><span style="font-weight:300">devs</span>
							</div>
							<div style="margin-top:6px;color:#9aa0ad;font-size:13px;font-family:Helvetica,Arial,sans-serif">New project enquiry</div>
						</td>
					</tr>

					<!-- intro -->
					<tr>
						<td style="padding:32px 36px 8px">
							<p style="margin:0 0 6px;font-size:13px;color:#8a92a6;font-family:Helvetica,Arial,sans-serif;text-transform:uppercase;letter-spacing:1px">From</p>
							<p style="margin:0;font-size:24px;font-weight:700;color:#0f172a;font-family:Helvetica,Arial,sans-serif">${safeName}</p>
							<div style="margin-top:14px">${chips}</div>
						</td>
					</tr>

					<!-- details -->
					<tr>
						<td style="padding:20px 36px 8px">
							<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
								${detailRow("Email", safeEmail, {href: `mailto:${safeEmail}`})}
								${d.company ? detailRow("Company", escapeHtml(d.company)) : ""}
								${detailRow("Project type", escapeHtml(d.typeLabel), {strong: true})}
								${d.budget ? detailRow("Budget", escapeHtml(d.budget)) : ""}
								${d.timeline ? detailRow("Timeline", escapeHtml(d.timeline)) : ""}
							</table>
						</td>
					</tr>

					<!-- message -->
					<tr>
						<td style="padding:24px 36px 8px">
							<p style="margin:0 0 10px;font-size:13px;color:#8a92a6;font-family:Helvetica,Arial,sans-serif;text-transform:uppercase;letter-spacing:1px">Message</p>
							<div style="background:#f8f9fb;border-left:3px solid #7c3aed;border-radius:8px;padding:18px 20px;color:#1f2937;font-size:15px;line-height:1.65;font-family:Helvetica,Arial,sans-serif;white-space:pre-wrap">${escapeHtml(d.message)}</div>
						</td>
					</tr>

					<!-- CTA -->
					<tr>
						<td style="padding:24px 36px 32px">
							<table role="presentation" cellpadding="0" cellspacing="0">
								<tr>
									<td style="border-radius:999px;background:#2563eb;background-image:linear-gradient(90deg,#2563eb,#7c3aed)">
										<a href="mailto:${safeEmail}?subject=Re:%20your%20enquiry%20to%20dragondevs"
											style="display:inline-block;padding:13px 28px;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;font-family:Helvetica,Arial,sans-serif">
											Reply to ${safeName}
										</a>
									</td>
								</tr>
							</table>
						</td>
					</tr>

					<!-- footer -->
					<tr>
						<td style="padding:20px 36px;border-top:1px solid #eef0f4;background:#fafbfc">
							<p style="margin:0;color:#9aa0ad;font-size:12px;font-family:Helvetica,Arial,sans-serif">
								Submitted ${escapeHtml(d.submittedAt)} (PKT) · via the
								<a href="https://dragondevs.co/contact" style="color:#6b7280">dragondevs.co</a> contact form
							</p>
						</td>
					</tr>

				</table>
			</td>
		</tr>
	</table>
</body>
</html>`;
}
