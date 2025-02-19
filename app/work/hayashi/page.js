'use client';

import { CaseStudy } from '@/components/CaseStudy/CaseStudy';

export default function Hayashi() {
	return (
		<CaseStudy
			title="Hayashi Whisky"
			subtitle="Design + Development"
			liveUrl="https://hayashiwhisky.com"
			heroImage="/images/hayashicase1.jpg"
			variant="gold"
			intro="Hayashi is a fresh addition to the world of Japanese whisky, offering a luxury spirit with a distinct commitment to evolving the generations-old awamori rice spirit process..."
			challenge="Hayashi sought a launch that would exude the brand's cool and premium qualities while enlightening users about its luxury status..."
			solution="Our creative concept revolved around compelling visual storytelling, utilizing the product as a central character throughout the narrative..."
			images={{
				intro: '/images/hayashicase2.jpg',
				process: [
					'/images/hayashicase3.jpg',
					'/images/hayashicase4.jpg',
					'/images/hayashicase5.jpg',
					'/images/hayashicase6.jpg',
				],
			}}
		/>
	);
}
