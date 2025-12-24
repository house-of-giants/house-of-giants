import { ImageResponse } from 'next/og';
import { OGTemplate, OGHeadline, ogColors, ogText } from '@/lib/og-template';

export const runtime = 'edge';
export const alt = 'House of Giants - Custom Web Development Partner in Denver';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
	const techStack = ['React', 'Next.js', 'TypeScript'];

	return new ImageResponse(
		<OGTemplate
			eyebrow="Denver, Colorado"
			footer={
				<div style={{ display: 'flex', gap: '16px' }}>
					{techStack.map((tech) => (
						<div
							key={tech}
							style={{
								padding: '8px 16px',
								backgroundColor: ogColors.primaryBg,
								border: `1px solid ${ogColors.primaryBorder}`,
								color: ogColors.primary,
								fontSize: '14px',
								fontWeight: 500,
							}}
						>
							{tech}
						</div>
					))}
				</div>
			}
		>
			<OGHeadline
				size="large"
				lines={[
					{ text: 'Custom Web Development' },
					{ gradient: 'Partner.' },
				]}
			/>
			<p style={{ ...ogText.body, margin: 0, maxWidth: '700px' }}>
				No bullshit, no templates—just code that scales for teams who care about craft.
			</p>
		</OGTemplate>,
		{ ...size }
	);
}
