import {ImageResponse} from "next/og";

export const alt = "dragondevs — Digital product engineering studio";
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
					background: "#0a0a0b",
					padding: "80px",
					fontFamily: "sans-serif",
				}}
			>
				{/* top: wordmark */}
				<div style={{display: "flex", alignItems: "center", fontSize: 44, color: "#fff"}}>
					<span style={{fontWeight: 800}}>dragon</span>
					<span style={{fontWeight: 300}}>devs</span>
				</div>

				{/* middle: headline */}
				<div style={{display: "flex", flexDirection: "column"}}>
					<div style={{fontSize: 84, fontWeight: 800, color: "#fff", lineHeight: 1.05}}>
						From idea to
					</div>
					<div
						style={{
							fontSize: 84,
							fontWeight: 800,
							lineHeight: 1.05,
							backgroundImage: "linear-gradient(90deg, #3b82f6, #a855f7, #10b981)",
							backgroundClip: "text",
							color: "transparent",
						}}
					>
						deployment.
					</div>
				</div>

				{/* bottom: tagline */}
				<div style={{display: "flex", fontSize: 34, color: "#a1a1aa"}}>
					Digital product engineering studio
				</div>
			</div>
		),
		{...size},
	);
}
