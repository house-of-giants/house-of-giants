import { ImageResponse } from 'next/og';
import { OGTemplate, OGHeadline, ogColors, ogText } from '@/lib/og-template';

export const runtime = 'edge';
export const alt = 'Transparent Pricing | House of Giants';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
	const tiers = [
		{ name: 'Foundation', price: '$15K+', desc: 'MVPs & Landing Pages' },
		{ name: 'Growth', price: '$35K+', desc: 'Full Web Applications' },
		{ name: 'Scale', price: '$75K+', desc: 'Enterprise Platforms' },
	];

	return new ImageResponse(
		<OGTemplate eyebrow="Pricing">
			<OGHeadline lines={[{ text: 'No black boxes.', gradient: 'No surprises.', gap: '20px' }]} />
			<p style={{ ...ogText.body, margin: 0, marginBottom: '32px', maxWidth: '600px' }}>
				Project-based pricing. Know your investment before we write a line of code.
			</p>

			{/* Pricing tiers */}
			<div style={{ display: 'flex', gap: '24px' }}>
				{tiers.map((tier, i) => (
					<div
						key={tier.name}
						style={{
							flex: 1,
							display: 'flex',
							flexDirection: 'column',
							padding: '24px',
							backgroundColor: i === 1 ? ogColors.primaryBg : ogColors.cardBg,
							border: `1px solid ${i === 1 ? ogColors.primaryBorder : ogColors.cardBorder}`,
						}}
					>
						<span
							style={{
								fontSize: '14px',
								fontWeight: 600,
								color: i === 1 ? ogColors.primary : ogColors.mutedDark,
								marginBottom: '8px',
								textTransform: 'uppercase',
								letterSpacing: '0.1em',
							}}
						>
							{tier.name}
						</span>
						<span
							style={{
								fontSize: '36px',
								fontWeight: 700,
								color: ogColors.foreground,
								marginBottom: '8px',
							}}
						>
							{tier.price}
						</span>
						<span style={{ fontSize: '14px', color: ogColors.muted }}>{tier.desc}</span>
					</div>
				))}
			</div>
		</OGTemplate>,
		{ ...size }
	);
}
