import { ImageResponse } from 'next/og';
import { OGTemplate, OGHeadline, OGBadges, ogColors, ogText } from '@/lib/og-template';

export const runtime = 'edge';
export const alt = 'Blog | House of Giants';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
	const topics = ['Web Development', 'React & Next.js', 'Startup Insights', 'Tech Leadership'];

	return new ImageResponse(
		<OGTemplate
			eyebrow="Blog"
			footer={
				<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
					<div
						style={{
							width: '8px',
							height: '8px',
							backgroundColor: ogColors.primary,
							borderRadius: '50%',
						}}
					/>
					<span style={{ ...ogText.label, fontSize: '14px', color: ogColors.muted }}>New articles weekly</span>
				</div>
			}
		>
			<OGHeadline lines={[{ text: 'Insights on building' }, { gradient: 'products that scale.' }]} />
			<p style={{ ...ogText.body, margin: 0, marginBottom: '32px', maxWidth: '550px' }}>
				Practical advice for startups and founders from the House of Giants team.
			</p>
			<OGBadges items={topics} />
		</OGTemplate>,
		{ ...size }
	);
}
