import { ImageResponse } from 'next/og';
import { posts } from '#site/content';
import { ogColors, ogText } from '@/lib/og-template';

export const alt = 'Blog Post | House of Giants';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

function getPostBySlug(slug: string) {
	return posts.find((post) => post.slug === slug && post.published);
}

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		return new ImageResponse(
			<div
				style={{
					height: '100%',
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: ogColors.background,
					color: ogColors.foreground,
					fontSize: '48px',
				}}
			>
				Post Not Found
			</div>,
			{ ...size }
		);
	}

	// Format date
	const date = new Date(post.date).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});

	return new ImageResponse(
		<div
			style={{
				height: '100%',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				backgroundColor: ogColors.background,
				padding: '60px',
				position: 'relative',
			}}
		>
			{/* Grid pattern overlay */}
			<div
				style={{
					position: 'absolute',
					inset: 0,
					backgroundImage:
						'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
					backgroundSize: '60px 60px',
				}}
			/>

			{/* Gradient glow */}
			<div
				style={{
					position: 'absolute',
					top: '-150px',
					right: '-100px',
					width: '500px',
					height: '500px',
					background: 'radial-gradient(circle, rgba(125,216,125,0.12) 0%, transparent 70%)',
					borderRadius: '50%',
				}}
			/>

			{/* Content */}
			<div style={{ display: 'flex', flexDirection: 'column', zIndex: 10 }}>
				{/* Eyebrow with date */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '16px',
						marginBottom: '24px',
					}}
				>
					<span style={ogText.eyebrow}>Blog</span>
					<div
						style={{
							width: '4px',
							height: '4px',
							backgroundColor: ogColors.mutedDark,
							borderRadius: '50%',
						}}
					/>
					<span style={{ ...ogText.eyebrow, color: ogColors.mutedDark }}>{date}</span>
					<div
						style={{
							width: '4px',
							height: '4px',
							backgroundColor: ogColors.mutedDark,
							borderRadius: '50%',
						}}
					/>
					<span style={{ ...ogText.eyebrow, color: ogColors.mutedDark }}>{post.metadata.readingTime} min read</span>
				</div>

				{/* Title */}
				<h1
					style={{
						fontSize: '56px',
						fontWeight: 700,
						color: ogColors.foreground,
						lineHeight: 1.15,
						margin: 0,
						marginBottom: '24px',
						maxWidth: '1000px',
					}}
				>
					{post.title}
				</h1>

				{/* Tags */}
				{post.tags && post.tags.length > 0 && (
					<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
						{post.tags.slice(0, 4).map((tag, i) => (
							<div
								key={tag}
								style={{
									padding: '8px 16px',
									backgroundColor: i === 0 ? ogColors.primaryBg : ogColors.cardBg,
									border: `1px solid ${i === 0 ? ogColors.primaryBorder : ogColors.cardBorder}`,
									fontSize: '14px',
									fontWeight: 500,
									color: i === 0 ? ogColors.primary : '#c5d4e3',
								}}
							>
								{tag}
							</div>
						))}
					</div>
				)}
			</div>

			{/* Bottom bar */}
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'flex-end',
					zIndex: 10,
				}}
			>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
					<span style={ogText.logo}>House of Giants</span>
					<span style={ogText.label}>houseofgiants.com/blog</span>
				</div>

				<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
					<span style={{ ...ogText.label, fontSize: '16px' }}>By {post.author.name}</span>
				</div>
			</div>

			{/* Top accent bar */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					height: '4px',
					background: `linear-gradient(90deg, ${ogColors.primary} 0%, ${ogColors.accent} 50%, ${ogColors.primary} 100%)`,
				}}
			/>
		</div>,
		{ ...size }
	);
}
