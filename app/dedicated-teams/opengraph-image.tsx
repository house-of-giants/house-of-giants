import { ImageResponse } from 'next/og';
import { OGTemplate, OGHeadline, ogColors, ogText } from '@/lib/og-template';

export const runtime = 'edge';
export const alt = 'Dedicated Engineering Teams | House of Giants';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
	const podTiers = [
		{ name: 'Starter', price: '$14K/mo' },
		{ name: 'Standard', price: '$24K/mo' },
		{ name: 'Full Build', price: '$38K/mo' },
	];

	return new ImageResponse(
		<OGTemplate
			eyebrow="Dedicated Teams"
			footer={
				<span style={{ ...ogText.label, fontSize: '16px' }}>
					Senior-led pods that integrate into your roadmap
				</span>
			}
		>
			<OGHeadline
				lines={[
					{ text: 'Your product.', gradient: 'Our team.' },
				]}
			/>
			<p style={{ ...ogText.body, margin: 0, marginBottom: '32px', maxWidth: '550px' }}>
				A fully managed engineering team that treats your product like their own.
			</p>

			{/* Pod tiers */}
			<div style={{ display: 'flex', gap: '20px' }}>
				{podTiers.map((tier, i) => (
					<div
						key={tier.name}
						style={{
							display: 'flex',
							flexDirection: 'column',
							padding: '20px 32px',
							backgroundColor: i === 1 ? ogColors.primaryBg : ogColors.cardBg,
							border: `1px solid ${i === 1 ? ogColors.primaryBorder : ogColors.cardBorder}`,
						}}
					>
						<span
							style={{
								fontSize: '14px',
								fontWeight: 600,
								color: i === 1 ? ogColors.primary : ogColors.mutedDark,
								marginBottom: '4px',
								textTransform: 'uppercase',
								letterSpacing: '0.1em',
							}}
						>
							{tier.name}
						</span>
						<span
							style={{
								fontSize: '24px',
								fontWeight: 700,
								color: ogColors.foreground,
							}}
						>
							{tier.price}
						</span>
					</div>
				))}
			</div>
		</OGTemplate>,
		{ ...size }
	);
}

