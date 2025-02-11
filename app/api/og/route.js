import Mark from '@/components/SVG/Mark';
import { ImageResponse } from 'next/og';

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
		const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'Crafting Bold Digital Experiences';

		return new ImageResponse(
			(
				<div
					style={{
						height: '100%',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						backgroundColor: '#1a1f24', // Dark background from your header
						color: '#F4F3EC', // Light text color from your site
						padding: '68px',
					}}
				>
					{/* Background Gradient Circle */}
					<div
						style={{
							position: 'absolute',
							top: '-20%',
							right: '-20%',
							width: '666px',
							height: '666px',
							background: 'linear-gradient(-270deg, rgb(0, 255, 224) 0%, rgb(193, 255, 29) 100%)',
							borderRadius: '50%',
							filter: 'blur(90px)',
							opacity: '0.33',
						}}
					/>

					{/* Main Title */}
					<div
						style={{
							flex: 1,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							position: 'relative',
						}}
					>
						<h1
							style={{
								fontSize: '72px',
								fontFamily: 'Inter',
								margin: 0,
								lineHeight: 1.1,
								letterSpacing: '-0.02em',
							}}
						>
							{title}
						</h1>
					</div>

					{/* Bottom Section with Logo, Services, and URL */}
					<div
						style={{
							position: 'relative',
							paddingTop: '32px',
							marginTop: '32px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						{/* Gradient Border */}
						<div
							style={{
								position: 'absolute',
								top: 0,
								left: '-68px',
								right: '-68px',
								height: '1px',
								background:
									'linear-gradient(90deg, rgba(0, 255, 224, 0.1) 0%, rgba(193, 255, 29, 0.1) 50%, rgba(0, 255, 224, 0.1) 100%)',
							}}
						/>
						<div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
							<div style={{ display: 'flex' }}>
								<Mark fill="#F4F3EC" />
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<p
										style={{
											marginLeft: '16px',
											marginTop: 0,
											marginBottom: '0',
											lineHeight: '1.2',
											fontSize: '24px',
											fontFamily: 'Inter',
										}}
									>
										House of Giants
									</p>
									<p
										style={{
											fontFamily: 'Nikolai',
											fontSize: '18px',
											marginLeft: '16px',
											marginTop: '0',
											background: 'linear-gradient(-270deg, rgb(0, 255, 224) 0%, rgb(193, 255, 29) 100%)',
											WebkitBackgroundClip: 'text',
											WebkitTextFillColor: 'transparent',
											backgroundClip: 'text',
											color: 'transparent',
										}}
									>
										Custom Websites • Web Apps • Interactive Design • Digital Strategy
									</p>
								</div>
							</div>
						</div>
						<p
							style={{
								fontSize: '20px',
								fontFamily: 'Inter',
								opacity: '0.8',
							}}
						>
							houseofgiants.com
						</p>
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
					},
					{
						name: 'Nikolai',
						data: await getNikolai(),
						style: 'normal',
					},
				],
			}
		);
	} catch (e) {
		console.log(`${e.message}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
