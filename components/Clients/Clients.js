'use client';

import Image from 'next/image';
import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { SectionBar } from '../SectionBar/SectionBar';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import Testimonials from '../Testimonials/Testimonials';

export const Clients = () => {
	const clientLogos = [
		{ name: 'Microsoft', src: '/images/microsoft.png', width: '157', height: '96' },
		{ name: 'Purdue', src: '/images/purdue.png', width: '169', height: '48' },
		{ name: 'Uber', src: '/images/uber.png', width: '163', height: '99' },
		{ name: 'Denver Botanic Gardens', src: '/images/botanic-gardens.png', width: '182', height: '51' },
		{ name: 'Comcast', src: '/images/comcast.png', width: '210', height: '46' },
		{ name: 'Electronic Arts', src: '/images/ea.png', width: '114', height: '114' },
		{ name: 'Shakey Graves', src: '/images/shakey.png', width: '151', height: '151' },
		{ name: 'Indiana Pacers', src: '/images/pacers.png', width: '114', height: '114' },
		{ name: 'The Nobel Prize', src: '/images/nobel.png', width: '114', height: '89' },
		{ name: 'Salesforce', src: '/images/salesforce.png', width: '163', height: '114' },
	];

	return (
		<Section count="5.0" title="Clients">
			<Container
				className="-has-background"
				background="var(--c-primary-dark)"
				pt="var(--section-spacing-top)"
				pb="var(--section-spacing-bottom)"
			>
				<SectionHeader
					title="Partners"
					subtitle="in digital excellence."
					accent="They trust us. We deliver."
					description={
						<>
							This is just a short list of the kick ass partners we've worked with.{' '}
							<span className="text-white font-bold relative">
								From startups to Fortune 500s, we transform visions into digital reality.
							</span>
						</>
					}
				/>

				{/* Logo Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[var(--content-spacing)] items-center justify-items-center mt-[var(--header-spacing)]">
					{clientLogos.map((logo) => (
						<div key={logo.name} className="client-logo">
							<Image alt={logo.name} src={logo.src} width={logo.width} height={logo.height} />
						</div>
					))}
				</div>

				<Testimonials noHeader />
			</Container>
		</Section>
	);
};
