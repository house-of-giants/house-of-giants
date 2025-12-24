import { ImageResponse } from 'next/og';
import { OGTemplate, OGHeadline, OGBadges, ogText } from '@/lib/og-template';

export const runtime = 'edge';
export const alt = 'Custom Web Development & Design Services | House of Giants';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
	const services = ['Web Development', 'Web Design', 'UX Architecture', 'Digital Strategy'];

	return new ImageResponse(
		<OGTemplate
			eyebrow="Our Services"
			footer={<span style={{ ...ogText.label, fontSize: '16px' }}>High-craft code for teams who give a damn</span>}
		>
			<OGHeadline lines={[{ text: 'High-craft', gradient: 'web solutions' }, { text: 'built for scale.' }]} />
			<OGBadges items={services} />
		</OGTemplate>,
		{ ...size }
	);
}
