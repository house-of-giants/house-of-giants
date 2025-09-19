'use client';

import { CaseStudy } from '@/components/CaseStudy/CaseStudy';
import CaseStudySchema from '@/components/Schema/CaseStudySchema';

export default function ShakeyGraves() {
	const caseStudyData = {
		title: 'Shakey Graves',
		description:
			"Shakey Graves, a globally acclaimed artist known for bold creative choices, took a cosmic leap with his album 'Movie of the Week.' The concept? Compose a film score for a fictional movie, producing multiple versions of the same tracks—each exploring different dimensions of the story.",
		coverImage: '/images/shakeycase1.jpg',
		date: '2021-03-01',
		lastmod: '2023-09-01',
		client: 'Shakey Graves',
		slug: 'shakey-graves',
	};
	return (
		<>
			<CaseStudySchema caseStudy={caseStudyData} />
			<CaseStudy
				title="Shakey Graves"
				subtitle="Movie of the week"
				liveUrl="https://www.shakeygraves.com"
				heroImage="/images/shakeycase1.jpg"
				variant="green"
				projectType="Interactive Music Experience + AI-Powered Album Generator"
				year="2021"
				intro="Shakey Graves, a globally acclaimed artist known for bold creative choices, took a cosmic leap with his album “Movie of the Week.” The concept? Compose a film score for a fictional movie, producing multiple versions of the same tracks—each exploring different dimensions of the story. It was an innovative, multi-layered project that begged for an interactive, fan-driven online experience."
				challenge="How do you get fans to actually play with an album that's part real music, part imaginary soundtrack, and part retro-futuristic creation? Shakey Graves wanted a digital space that would let fans piece together their own “Movie of the Week” soundtrack—complete with custom artwork, titles, and AI-powered movie synopses. A maze of track variations, genres, and unique user experiences had to come together on one site. Simple, right?"
				solution="We designed a retro-inspired web experience built around the album’s TV-wall aesthetic—reminiscent of vintage sets playing half-remembered shows—so fans could “channel surf” through different parts of Shakey's site. Tying in an AI-driven “Movie of the Week” generator, visitors select a movie genre, unlock personalized artwork, an original title, and a short synopsis, then are given a curated soundtrack, pulled from hundreds of tracks to complete their custom soundtrack. This approach merges nostalgic vibes with modern tech, giving fans an engaging way to discover, listen, and even purchase fresh takes on the same song while feeling like they're part of a hidden cinematic universe."
				images={{
					intro: '/images/shakeycase2.jpg',
					process: ['/images/shakeycase3.jpg', '/images/shakeycase4.jpg'],
				}}
				process={{
					title: '04 - The Process',
					subtitle: 'Input your genre. Generate your soundtrack. Create your story.',
					steps: [
						{
							phase: 'Discovery & Planning',
							title: 'Understanding the Artist',
							description:
								"We began by deeply understanding Shakey Graves' unique musical style and the story behind his name. Through collaborative sessions, we identified the need for a website that would not just showcase his music, but tell his story and connect with his audience on a deeper level.",
							details: [
								'Artist brand analysis',
								'Fan research & personas',
								'Content strategy planning',
								'Technical requirements',
							],
							image: '/images/shakeycase1.jpg',
							color: '#00ffe0',
						},
						{
							phase: 'Design & Development',
							title: 'Crafting the Experience',
							description:
								"We designed a website that captures the essence of Shakey Graves' musical spirit. The development focused on creating smooth animations, intuitive navigation, and a responsive design that works seamlessly across all devices.",
							details: [
								'UI/UX design',
								'Responsive development',
								'Animation implementation',
								'Performance optimization',
							],
							image: '/images/shakeycase2.jpg',
							color: '#8e3dfd',
						},
						{
							phase: 'Content & Branding',
							title: 'Storytelling & Identity',
							description:
								'We worked closely with Shakey Graves to develop compelling content that tells his story authentically. The website showcases his music while highlighting the creativity and craftsmanship that sets him apart in the industry.',
							details: ['Content creation', 'Artist storytelling', 'Music showcase', 'Visual identity'],
							image: '/images/shakeycase3.jpg',
							color: '#d4ff35',
						},
						{
							phase: 'Launch & Optimization',
							title: 'Going Live & Growing',
							description:
								'After a successful launch, we continue to work with Shakey Graves to optimize his website based on fan feedback and analytics. The platform is designed to evolve with his musical journey and career growth.',
							details: [
								'Launch preparation',
								'Performance monitoring',
								'Fan feedback integration',
								'Ongoing optimization',
							],
							image: '/images/shakeycase4.jpg',
							color: '#e61e5e',
						},
					],
				}}
				impact={{
					blurb: (
						<>
							Through innovative design and development, we created an immersive digital experience that connects fans
							with Shakey Graves' music in a uniquely personal way.
						</>
					),
					stats: [
						{ value: '91', unit: '%', description: 'Increase in new users within the first week' },
						{ value: '285', unit: '%', description: 'Growth in page views post-launch' },
						{
							value: '1',
							unit: 'billion+',
							description:
								'Over 1 billion (yes billion) unique album combinations created with the soundtrack generator',
						},
					],
				}}
			/>
		</>
	);
}
