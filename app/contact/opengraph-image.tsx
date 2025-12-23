import { ImageResponse } from 'next/og';
import { OGTemplate, OGHeadline, ogColors, ogText } from '@/lib/og-template';

export const runtime = 'edge';
export const alt = 'Contact House of Giants | Start Your Web Development Project';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
	return new ImageResponse(
		<OGTemplate
			eyebrow="Get In Touch"
			footer={
				<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
					<span style={ogText.label}>hello@houseofgiants.com</span>
					<div
						style={{ width: '4px', height: '4px', backgroundColor: ogColors.primary, borderRadius: '50%' }}
					/>
					<span style={ogText.label}>24hr response time</span>
				</div>
			}
		>
			<OGHeadline
				size="large"
				lines={[{ text: 'Ready to', gradient: 'build something?' }]}
			/>
			<p style={{ ...ogText.body, margin: 0, maxWidth: '600px' }}>
				Tell us about your project. We respond within 24 hours.
			</p>
		</OGTemplate>,
		{ ...size }
	);
}

