import { ImageResponse } from 'next/og';
import { OGTemplate, OGHeadline, OGStats, ogColors, ogText } from '@/lib/og-template';

export const runtime = 'edge';
export const alt = 'About House of Giants | Denver Web Development Studio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
	const stats = [
		{ value: '2017', label: 'Founded' },
		{ value: '150+', label: 'Projects' },
		{ value: '75+', label: 'Clients' },
	];

	return new ImageResponse(
		<OGTemplate
			eyebrow="About Us"
			footer={
				<div
					style={{
						padding: '12px 24px',
						backgroundColor: ogColors.primaryBg,
						border: `1px solid ${ogColors.primaryBorder}`,
					}}
				>
					<span style={{ fontSize: '14px', fontWeight: 600, color: ogColors.primary }}>Founder-Led Studio</span>
				</div>
			}
		>
			<OGHeadline lines={[{ text: 'No suits. No scripts.' }, { gradient: 'Just the work.' }]} />
			<p style={{ ...ogText.body, margin: 0, marginBottom: '32px', maxWidth: '650px' }}>
				A founder-led custom web development partner for startups and scale-ups who care about craft.
			</p>
			<OGStats stats={stats} />
		</OGTemplate>,
		{ ...size }
	);
}
