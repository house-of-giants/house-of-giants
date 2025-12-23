import { ImageResponse } from 'next/og';
import { OGTemplate, OGHeadline, ogColors, ogText } from '@/lib/og-template';

export const runtime = 'edge';
export const alt = 'White-Label Engineering Pods | House of Giants';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
	const features = ['Senior-Led', 'Fully Managed', 'Your Brand'];

	return new ImageResponse(
		<OGTemplate
			eyebrow="White-Label Pods"
			footer={
				<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
					<span style={ogText.label}>No hiring headaches</span>
					<div
						style={{ width: '4px', height: '4px', backgroundColor: ogColors.primary, borderRadius: '50%' }}
					/>
					<span style={ogText.label}>Scale on demand</span>
				</div>
			}
		>
			<OGHeadline
				lines={[
					{ text: 'The invisible engine for' },
					{ gradient: "your agency's delivery." },
				]}
			/>
			<p style={{ ...ogText.body, margin: 0, marginBottom: '32px', maxWidth: '650px' }}>
				A scalable, full-service development team delivered as an invisible extension of your agency.
			</p>

			{/* Feature badges */}
			<div style={{ display: 'flex', gap: '20px' }}>
				{features.map((feature, i) => (
					<div
						key={feature}
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: '12px',
							padding: '24px 40px',
							backgroundColor: i === 1 ? ogColors.primaryBg : ogColors.cardBg,
							border: `1px solid ${i === 1 ? ogColors.primaryBorder : ogColors.cardBorder}`,
						}}
					>
						<div
							style={{
								width: '12px',
								height: '12px',
								backgroundColor: i === 1 ? ogColors.primary : ogColors.mutedDark,
								transform: 'rotate(45deg)',
							}}
						/>
						<span
							style={{
								fontSize: '16px',
								fontWeight: 600,
								color: i === 1 ? ogColors.accent : '#c5d4e3',
								textTransform: 'uppercase',
								letterSpacing: '0.05em',
							}}
						>
							{feature}
						</span>
					</div>
				))}
			</div>
		</OGTemplate>,
		{ ...size }
	);
}
