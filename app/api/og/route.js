import { ImageResponse } from 'next/og';
import siteMetadata from '@/data/siteMetadata';
import Mark from '@/components/SVG/Mark';

export const runtime = 'edge';

const getInter = async () => {
	const response = await fetch(new URL('./Inter-Black.ttf', import.meta.url));
	return await response.arrayBuffer();
};

const getNikolai = async () => {
	const response = await fetch(new URL('./Nikolai-Regular.woff', import.meta.url));
	return await response.arrayBuffer();
};

export async function GET(request) {
	try {
		const { searchParams } = new URL(request.url);
		const hasTitle = searchParams.has('title');
		const hasImage = searchParams.has('image');
		const title = hasTitle
			? decodeURIComponent(searchParams.get('title'))?.slice(0, 50) +
			  `${searchParams.get('title').length > 50 ? '...' : ''}`
			: 'DIGITAL + INTERACTIVE\nSTUDIO';

		// Convert relative image path to absolute URL
		let image = null;
		if (hasImage) {
			const imagePath = searchParams.get('image');
			// If the image path is already absolute, use it directly
			if (imagePath.startsWith('http')) {
				image = imagePath;
			} else {
				// Convert relative path to absolute URL using the request origin
				const url = new URL(request.url);
				image = `${url.protocol}//${url.host}${imagePath}`;
			}
		}

		// Add error handling and logging for image loading
		let blogImage = null;
		if (image) {
			try {
				const imageResponse = await fetch(image, {
					headers: {
						Accept: 'image/*',
					},
				});

				if (!imageResponse.ok) {
					console.error('Image fetch failed:', imageResponse.status);
					throw new Error(`Failed to load image: ${imageResponse.status}`);
				}

				blogImage = await imageResponse.arrayBuffer();
			} catch (e) {
				console.error('Image loading error:', e);
				// Continue without the blog image instead of failing
				blogImage = null;
			}
		}

		// Add error handling for font loading
		let interFont;
		let nikolaiFont;
		try {
			[interFont, nikolaiFont] = await Promise.all([getInter(), getNikolai()]);
		} catch (e) {
			console.error('Font loading error:', e);
			throw new Error('Failed to load fonts');
		}

		const options = {
			width: 1200,
			height: 630,
			fonts: [
				{
					name: 'Inter',
					data: interFont,
					style: 'normal',
					weight: 900,
				},
				{
					name: 'Nikolai',
					data: nikolaiFont,
					style: 'normal',
				},
			],
		};

		// Only add images option if we successfully loaded the blog image
		if (blogImage && image) {
			options.images = [
				{
					url: image,
					width: 1200,
					height: 630,
				},
			];
		}

		const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

		return new ImageResponse(
			(
				<div
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						backgroundColor: '#1a1f24',
						padding: '32px',
					}}
				>
					{/* Terminal Bar */}
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '8px',
							marginBottom: '16px',
						}}
					>
						<div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
						<div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
						<div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
						<div
							style={{
								marginLeft: '16px',
								color: '#00ffe0',
								fontSize: '14px',
								fontFamily: 'monospace',
								display: 'flex',
							}}
						>
							root@houseofgiants:~$ PROCESS_ID [2.4] T+{time}
						</div>
					</div>

					{/* Main Content */}
					<div
						style={{
							flex: 1,
							display: 'flex',
							position: 'relative',
							padding: '40px',
							background: 'rgba(0, 0, 0, 0.4)',
							borderRadius: '12px',
							border: '1px solid rgba(0, 255, 224, 0.2)',
							overflow: 'hidden',
						}}
					>
						{/* Grid Background */}
						<div
							style={{
								position: 'absolute',
								inset: 0,
								background:
									'linear-gradient(0deg, transparent 24%, rgba(0, 255, 224, .05) 25%, rgba(0, 255, 224, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 224, .05) 75%, rgba(0, 255, 224, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 224, .05) 25%, rgba(0, 255, 224, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 224, .05) 75%, rgba(0, 255, 224, .05) 76%, transparent 77%, transparent)',
								backgroundSize: '50px 50px',
							}}
						/>

						{/* Content Container */}
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								width: '100%',
								position: 'relative',
							}}
						>
							{/* Vertical Line */}
							<div
								style={{
									position: 'absolute',
									left: '-20px',
									top: 0,
									width: '2px',
									height: '100%',
									background: 'linear-gradient(to bottom, #00ffe0, #c1ff1d)',
								}}
							/>

							{/* Title Container */}
							<div
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									display: 'flex',
									position: 'relative',
									width: blogImage ? '60%' : '100%',
								}}
							>
								<div
									style={{
										alignItems: 'center',
										justifyContent: 'center',
										fontSize: hasTitle ? '72px' : '118px',
										lineHeight: 1.1,
										fontWeight: 900,
										letterSpacing: '-0.02em',
										color: '#00ffe0',
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									<span style={{ color: '#00ffe0' }}>{title}</span>
									<span
										style={{
											position: 'absolute',
											color: '#c1ff1d',
											opacity: 0.5,
											mixBlendMode: 'screen',
										}}
									>
										{title}
									</span>
								</div>
							</div>

							{/* Image Container */}
							{blogImage && (
								<div
									style={{
										position: 'absolute',
										right: '40px',
										top: '40px',
										width: '35%',
										height: '80%',
										display: 'flex',
										borderRadius: '8px',
										overflow: 'hidden',
										border: '1px solid rgba(0, 255, 224, 0.3)',
									}}
								>
									<img
										src={image}
										alt=""
										style={{
											width: '100%',
											height: '100%',
											objectFit: 'cover',
										}}
									/>
								</div>
							)}
						</div>
					</div>

					{/* Bottom Bar */}
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginTop: '16px',
						}}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: '16px',
							}}
						>
							<div
								style={{
									width: '32px',
									height: '32px',
									borderRadius: '50%',
									background: 'linear-gradient(135deg, #ff2a6d, #00ffe0)',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Mark width="24" height="24" fill="#1a1f24" />
							</div>
							<div
								style={{
									color: '#00ffe0',
									fontSize: '14px',
									fontFamily: 'monospace',
								}}
							>
								HOUSE OF GIANTS v2.4 // WEB DEVELOPMENT • DIGITAL INNOVATION • CREATIVE STRATEGY
							</div>
						</div>
						<div
							style={{
								color: '#6d7985',
								fontSize: '14px',
							}}
						>
							houseofgiants.com
						</div>
					</div>
				</div>
			),
			{
				...options,
				// Add explicit dimensions
				width: 1200,
				height: 630,
			}
		);
	} catch (e) {
		console.error('OG Image generation error:', e);
		return new Response(`Failed to generate the image: ${e.message}`, {
			status: 500,
		});
	}
}
