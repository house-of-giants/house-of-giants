import { ImageResponse } from 'next/og';
import { OGTemplate, OGHeadline, ogText } from '@/lib/og-template';

export const runtime = 'edge';
export const alt = 'Custom Web Development Portfolio | House of Giants';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
	const audiences = ['Startups', 'Scale-ups', 'Enterprise'];

	return new ImageResponse(
		<OGTemplate
			eyebrow="Our Work"
			footer={
				<div style={{ display: 'flex', gap: '24px' }}>
					{audiences.map((type) => (
						<span key={type} style={ogText.label}>
							{type}
						</span>
					))}
				</div>
			}
		>
			<OGHeadline
				lines={[
					{ text: 'Real projects.', gradient: 'Real metrics.', gap: '20px' },
				]}
			/>
			<p style={{ ...ogText.body, margin: 0, maxWidth: '600px' }}>
				Case studies showcasing custom web applications that drive revenue and scale.
			</p>
		</OGTemplate>,
		{ ...size }
	);
}
