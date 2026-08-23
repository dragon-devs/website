import {ImageResponse} from "next/og";

export const alt = "dragondevs — From idea to deployment";
export const size = {width: 1200, height: 630};
export const contentType = "image/png";

export default function OpengraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					background:
						"radial-gradient(circle at 50% -10%, #152238 0%, #0b0b0e 58%)",
					color: "#fafafa",
					padding: "80px",
					fontFamily: "sans-serif",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "baseline",
						fontSize: 44,
						letterSpacing: "-0.02em",
					}}
				>
					<span style={{fontWeight: 900}}>dragon</span>
					<span style={{fontWeight: 300}}>devs</span>
				</div>

				<div style={{display: "flex", flexDirection: "column", gap: 24}}>
					<div
						style={{
							fontSize: 78,
							fontWeight: 700,
							lineHeight: 1.05,
							maxWidth: 920,
							letterSpacing: "-0.03em",
						}}
					>
						From idea to deployment
					</div>
					<div
						style={{
							fontSize: 33,
							color: "#a1a1aa",
							maxWidth: 900,
							lineHeight: 1.35,
						}}
					>
						Custom software, MVPs and full-stack web apps — built with Next.js,
						shipped fast, engineered to scale.
					</div>
				</div>

				<div style={{display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#8a8a93"}}>
					<div style={{width: 120, height: 2, background: "linear-gradient(90deg,#60a5fa,#1d4ed8)"}}/>
					dragondevs.co
				</div>
			</div>
		),
		{...size},
	);
}
