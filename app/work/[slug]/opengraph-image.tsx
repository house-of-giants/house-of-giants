import { ImageResponse } from 'next/og';
import { caseStudies, getCaseStudyBySlug } from '@/lib/data/case-studies';
import { ogColors, ogText } from '@/lib/og-template';

export const alt = 'Case Study | House of Giants';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const study = getCaseStudyBySlug(slug);

	if (!study) {
		return new ImageResponse(
			<div
				style={{
					height: '100%',
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: ogColors.background,
					color: ogColors.foreground,
					fontSize: '48px',
				}}
			>
				Case Study Not Found
			</div>,
			{ ...size }
		);
	}

	return new ImageResponse(
		<div
			style={{
				height: '100%',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				backgroundColor: ogColors.background,
				padding: '60px',
				position: 'relative',
			}}
		>
			{/* Grid pattern overlay */}
			<div
				style={{
					position: 'absolute',
					inset: 0,
					backgroundImage:
						'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
					backgroundSize: '60px 60px',
				}}
			/>

			{/* Gradient glow */}
			<div
				style={{
					position: 'absolute',
					top: '-150px',
					right: '-100px',
					width: '500px',
					height: '500px',
					background: 'radial-gradient(circle, rgba(125,216,125,0.12) 0%, transparent 70%)',
					borderRadius: '50%',
				}}
			/>

			{/* Content */}
			<div style={{ display: 'flex', flexDirection: 'column', zIndex: 10 }}>
				{/* Eyebrow */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '16px',
						marginBottom: '24px',
					}}
				>
					<span style={ogText.eyebrow}>Case Study</span>
					<div
						style={{
							width: '4px',
							height: '4px',
							backgroundColor: ogColors.mutedDark,
							borderRadius: '50%',
						}}
					/>
					<span style={{ ...ogText.eyebrow, color: ogColors.mutedDark }}>{study.industry}</span>
				</div>

				{/* Title */}
				<h1
					style={{
						fontSize: '64px',
						fontWeight: 700,
						color: ogColors.foreground,
						lineHeight: 1.1,
						margin: 0,
						marginBottom: '20px',
						maxWidth: '900px',
					}}
				>
					{study.title}
				</h1>

				{/* Hook/Description */}
				<p
					style={{
						...ogText.body,
						margin: 0,
						marginBottom: '28px',
						maxWidth: '700px',
					}}
				>
					{study.hook}
				</p>

				{/* Services */}
				<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
					{study.services.slice(0, 4).map((service, i) => (
						<div
							key={service}
							style={{
								padding: '8px 16px',
								backgroundColor: i === 0 ? ogColors.primaryBg : ogColors.cardBg,
								border: `1px solid ${i === 0 ? ogColors.primaryBorder : ogColors.cardBorder}`,
								fontSize: '14px',
								fontWeight: 500,
								color: i === 0 ? ogColors.primary : '#c5d4e3',
							}}
						>
							{service}
						</div>
					))}
				</div>
			</div>

			{/* Bottom bar */}
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'flex-end',
					zIndex: 10,
				}}
			>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
					<span style={ogText.logo}>House of Giants</span>
					<span style={ogText.label}>houseofgiants.com/work</span>
				</div>

				<div
					style={{
						display: 'flex',
						padding: '10px 20px',
						backgroundColor: ogColors.primaryBg,
						border: `1px solid ${ogColors.primaryBorder}`,
					}}
				>
					<span style={{ fontSize: '14px', fontWeight: 500, color: ogColors.primary }}>{study.client.name}</span>
				</div>
			</div>

			{/* Top accent bar */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					height: '4px',
					background: `linear-gradient(90deg, ${ogColors.primary} 0%, ${ogColors.accent} 50%, ${ogColors.primary} 100%)`,
				}}
			/>
		</div>,
		{ ...size }
	);
}
