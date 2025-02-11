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
		const title = hasTitle ? `${searchParams.get('title')?.slice(0, 65)}...` : 'DIGITAL + INTERACTIVE\nSTUDIO';
		const image = hasImage ? searchParams.get('image') : null;

		// If we have a blog image, fetch it
		let blogImage = null;
		if (image) {
			try {
				const imageResponse = await fetch(new URL(image, siteMetadata.siteUrl));
				blogImage = await imageResponse.arrayBuffer();
			} catch (e) {
				console.log('Failed to load blog image:', e);
			}
		}

		return new ImageResponse(
			(
				<div
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						backgroundColor: '#1a1f24',
						color: '#F4F3EC',
						padding: '32px',
						fontFamily: 'Inter',
					}}
				>
					{/* Top Bar with Stats */}
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							marginBottom: '24px',
						}}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: '8px',
							}}
						>
							<div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
							<div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
							<div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
						</div>
					</div>

					{/* Main Content Area */}
					<div
						style={{
							flex: 1,
							display: 'flex',
							flexDirection: 'column',
							gap: '24px',
							position: 'relative',
							background: 'rgba(0, 0, 0, 0.4)',
							padding: '32px',
							borderRadius: '12px',
							border: '1px solid rgba(0, 255, 224, 0.2)',
						}}
					>
						{/* Grid Lines */}
						<div
							style={{
								position: 'absolute',
								inset: 0,
								background:
									'linear-gradient(0deg, transparent 24%, rgba(0, 255, 224, .05) 25%, rgba(0, 255, 224, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 224, .05) 75%, rgba(0, 255, 224, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 224, .05) 25%, rgba(0, 255, 224, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 224, .05) 75%, rgba(0, 255, 224, .05) 76%, transparent 77%, transparent)',
								backgroundSize: '50px 50px',
							}}
						/>

						{blogImage && (
							<div
								style={{
									position: 'absolute',
									top: '32px',
									right: '32px',
									width: '40%',
									height: '75%',
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
								{/* Gradient overlay */}
								<div
									style={{
										position: 'absolute',
										inset: 0,
										background: 'linear-gradient(90deg, #1a1f24 0%, transparent 20%)',
									}}
								/>
								{/* Simplified scanline effect */}
								<div
									style={{
										position: 'absolute',
										inset: 0,
										backgroundImage: 'linear-gradient(0deg, rgba(0, 255, 224, 0.1) 1px, transparent 1px)',
										backgroundSize: '100% 2px',
										mixBlendMode: 'overlay',
									}}
								/>
							</div>
						)}

						{/* Terminal Prompt */}
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '16px',
								maxWidth: blogImage ? '55%' : '100%',
								position: 'relative',
							}}
						>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: '8px',
									color: '#00ffe0',
									fontFamily: 'monospace',
									fontSize: '14px',
								}}
							>
								<span>root@houseofgiants:~$</span>
							</div>
							<div
								style={{
									color: '#1a1f24',
									display: 'flex',
									flexDirection: 'column',
									fontSize: hasTitle ? '62px' : '100px',
									lineHeight: 1,
									letterSpacing: '-0.02em',
									padding: '16px',
									fontFamily: 'Inter',
									fontWeight: 900,
									whiteSpace: 'pre-line',
									background: 'linear-gradient(to right, #00ffe0, #c1ff1d)',
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
									width: '100%',
								}}
							>
								{title}
							</div>
						</div>

						{/* Enhanced Bottom Bar */}
						<div
							style={{
								marginTop: 'auto',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								borderTop: '1px solid rgba(0, 255, 224, 0.2)',
								paddingTop: '24px',
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
										width: '40px',
										height: '40px',
										borderRadius: '50%',
										background: 'linear-gradient(135deg, #ff2a6d, #00ffe0)',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Mark width="30" height="30" fill="#1a1f24" />
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									<div
										style={{
											display: 'flex',
											fontSize: '24px',
										}}
									>
										House of Giants <span style={{ marginLeft: '8px', color: '#00ffe0', fontSize: '16px' }}>v2.4</span>
									</div>
									<div
										style={{
											display: 'flex',
											gap: '8px',
											fontSize: '14px',
											fontFamily: 'monospace',
											color: '#00ffe0',
										}}
									>
										<span>Web Development</span>
										<span>•</span>
										<span>Digital Innovation</span>
										<span>•</span>
										<span>Creative Strategy</span>
									</div>
								</div>
							</div>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'flex-end',
									gap: '4px',
								}}
							>
								<div
									style={{
										fontSize: '14px',
										color: '#6d7985',
									}}
								>
									houseofgiants.com
								</div>
							</div>
						</div>
					</div>
				</div>
			),
			{
				width: 1200,
				height: 630,
				fonts: [
					{
						name: 'Inter',
						data: await getInter(),
						style: 'normal',
						weight: 900,
					},
					{
						name: 'Nikolai',
						data: await getNikolai(),
						style: 'normal',
					},
				],
				images: blogImage
					? [
							{
								url: image,
								width: 1200,
								height: 630,
							},
					  ]
					: undefined,
			}
		);
	} catch (e) {
		console.log(`${e.message}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
