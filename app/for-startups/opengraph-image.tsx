import { ImageResponse } from 'next/og';
import { OGTemplate, OGHeadline, OGBadges, ogText } from '@/lib/og-template';

export const runtime = 'edge';
export const alt = 'Startup Web Development | House of Giants';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
	const stages = ['MVP', 'Seed', 'Series A', 'Scale'];

	return new ImageResponse(
		<OGTemplate
			eyebrow="For Startups"
			footer={
				<span style={{ ...ogText.label, fontSize: '16px' }}>
					From MVP to Series B—websites that help you raise, convert, and scale
				</span>
			}
		>
			<OGHeadline
				lines={[
					{ text: "You've outgrown", gradient: 'templates.' },
				]}
			/>
			<p style={{ ...ogText.body, margin: 0, marginBottom: '32px', maxWidth: '600px' }}>
				Custom web development for startups ready for the next stage.
			</p>
			<OGBadges items={stages} />
		</OGTemplate>,
		{ ...size }
	);
}

