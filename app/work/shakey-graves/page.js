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
							phase: 'Phase 01',
							title: 'Discovery & Planning',
							description:
								'We dove into Shakey Graves’ concept, analyzing how multiple song versions could be neatly packaged for curious fans. We encouraged listeners to “play creator,” mixing track variations like building blocks to spark new angles on the same tune.',
							color: '#00ffe0',
							details: ['Creative Strategy', 'Iterative Collaboration', 'Discovery Workshop'],
							image: '/images/shakeycase3.jpg',
						},
						{
							phase: 'Phase 02',
							title: 'Design & User Experience',
							description:
								'Inspired by the album artwork, we built an intuitive retro TV-wall UI. This layout speaks to the album’s “vintage meets new wave” vibe, guiding fans to the “Movie of the Week” generator page. We focused on clarity, visual intrigue, and minimal friction, ensuring each user could explore track variations without getting lost.',
							color: '#c1ff1d',
							details: [
								'Web Design',
								'User Journey Mapping',
								'Immersive UI',
								'Interactive Elements',
								'Brand-Aligned UX',
							],
							image: '/images/shakeycase4.jpg',
						},
						{
							phase: 'Phase 03',
							title: 'Development',
							description:
								"We combined sleek front-end frameworks like Next.js and Three.js with AI integration to generate a user's custom album page—complete with artwork, title, synopsis, and tracklist. Modular code structures allowed each “movie” to be saved, shared, or purchased, bridging creativity and functionality without slowing down the site.",
							color: '#ff2a6d',
							details: [
								'Custom Front-end Development',
								'AI / LLM Integration',
								'Dynamic Content Integration',
								'Randomized Album Generation',
								'Modular Code Structure',
							],
							image: '/images/shakeycase5.jpg',
						},
						{
							phase: 'Phase 04',
							title: 'Launch & Optimization',
							description:
								'Post-deployment, we monitored site performance to handle the surge of curious fans. The results were instant: a 91% jump in new user visits and a 285% spike in page views. More importantly, album sales climbed steadily as fans enjoyed the creative freedom to craft their own unique “Movie of the Week.”',
							color: '#9b4dff',
							details: [
								'Performance Optimization',
								'Global Fan Engagement',
								'Analytics & Monitoring',
								'Scalable Infrastructure',
							],
							image: '/images/shakeycase6.jpg',
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
