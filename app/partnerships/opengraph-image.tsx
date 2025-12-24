import { ImageResponse } from 'next/og';
import { OGTemplate, OGHeadline, OGBadges, ogColors, ogText } from '@/lib/og-template';

export const runtime = 'edge';
export const alt = 'Partnerships | House of Giants';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
	const partnerTypes = ['Agencies', 'Consultants', 'Venture Studios'];

	return new ImageResponse(
		<OGTemplate
			eyebrow="Partnerships"
			footer={
				<div
					style={{
						padding: '10px 20px',
						backgroundColor: ogColors.primaryBg,
						border: `1px solid ${ogColors.primaryBorder}`,
					}}
				>
					<span style={{ fontSize: '14px', fontWeight: 500, color: ogColors.primary }}>White-Label Available</span>
				</div>
			}
		>
			<OGHeadline
				lines={[
					{ text: 'Scale your delivery with a' },
					{ gradient: 'technical partner', text: ' who cares.', gap: '0px' },
				]}
			/>
			<p style={{ ...ogText.body, margin: 0, marginBottom: '32px', maxWidth: '600px' }}>
				High-craft engineering partnerships for agencies, consultants, and venture studios.
			</p>
			<OGBadges items={partnerTypes} />
		</OGTemplate>,
		{ ...size }
	);
}
