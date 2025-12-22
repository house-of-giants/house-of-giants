// =============================================================================
// CASE STUDY DATA MODEL
// Typed, composable modules for flexible case study content
// =============================================================================

// -----------------------------------------------------------------------------
// Module Types (Discriminated Union)
// -----------------------------------------------------------------------------

export interface ProcessStep {
	phase: string;
	title: string;
	description: string;
	bullets?: string[];
	image?: string;
}

export interface FeatureBlock {
	title: string;
	description: string;
	bullets?: string[];
	image?: string;
}

export interface MetricItem {
	value: string;
	metric: string;
	description?: string;
	context?: string;
}

export interface ShowcaseItem {
	title: string;
	description: string;
	image: string;
	bullets?: string[];
}

export type CaseStudyModule =
	| { type: 'process'; title: string; description?: string; steps: ProcessStep[] }
	| {
			type: 'featureGrid';
			title?: string;
			description?: string;
			features: FeatureBlock[];
			layout?: 'twoCol' | 'stacked';
	  }
	| { type: 'metrics'; title?: string; items: MetricItem[] }
	| { type: 'gallery'; images: string[]; caption?: string }
	| { type: 'prose'; eyebrow?: string; title: string; body: string; image?: string }
	| { type: 'quote'; quote: string; author: string; title: string; company?: string }
	| { type: 'dualShowcase'; title?: string; left: ShowcaseItem; right: ShowcaseItem };

// -----------------------------------------------------------------------------
// Core Case Study Interface
// -----------------------------------------------------------------------------

export interface CaseStudy {
	slug: string;
	title: string;
	subtitle?: string;
	hook: string;
	client: {
		name: string;
		description: string;
		logo?: string;
	};
	industry: string;
	timeline: string;
	services: string[];
	challenge: string;
	approach: string;
	solution: string;
	results: {
		metric: string;
		value: string;
		description?: string;
		context?: string;
	}[];
	testimonial?: {
		quote: string;
		author: string;
		title: string;
		company?: string;
		avatar?: string;
	};
	techStack: string[];
	images: {
		hero: string;
		thumbnail: string;
		gallery?: string[];
	};
	featured?: boolean;
	type: 'Web App' | 'Website' | 'Platform' | 'Campaign';
	liveUrl?: string;
	partnerCredit?: {
		name: string;
		url: string;
		role: string;
	};
	// Flexible content modules
	modules?: CaseStudyModule[];
}

// -----------------------------------------------------------------------------
// Case Study Data
// -----------------------------------------------------------------------------

export const caseStudies: CaseStudy[] = [
	{
		slug: 'cybernest',
		title: 'The CyberNest',
		subtitle: 'Cybersecurity Intelligence Platform',
		hook: 'Cybersecurity intelligence platform with community-verified threat data',
		client: {
			name: 'The CyberNest',
			description: 'Cybersecurity intelligence platform helping security teams find trusted information',
		},
		industry: 'SaaS',
		type: 'Platform',
		timeline: '2024',
		services: ['Web App Design', 'Web App Development', 'AI'],
		liveUrl: 'https://thecybernest.com',
		challenge:
			'Security professionals face too much information with too little trust. CyberNest needed a complete intelligence platform serving both community members and expert networks, with sophisticated user management, real-time collaboration, smart content filtering, and enterprise-grade security.',
		approach:
			'We focused on building trust through design, combining cutting-edge technology with thoughtful UX. The dual-audience challenge required careful planning for user management, data security, and scalable permissions.',
		solution:
			'A next-generation platform using modern web architecture, intelligent content systems, and real-time collaboration tools. Features include AI-powered document summaries, community + expert ratings, smart trending algorithms, and live document annotation with team workspace isolation.',
		results: [
			{
				metric: 'User Experience',
				value: 'Enterprise',
				description: 'Consumer-grade ease with enterprise security',
			},
			{
				metric: 'Collaboration',
				value: 'Real-time',
				description: 'Live annotation and team workspaces',
			},
			{
				metric: 'Content',
				value: 'AI-Powered',
				description: 'Smart filtering and document summaries',
			},
		],
		testimonial: {
			quote: "They are the best team I've ever worked with regarding application development thus far.",
			author: 'Ben Siegel',
			title: 'CEO',
			company: 'The CyberNest',
		},
		techStack: ['Next.js', 'Real-time Collaboration', 'AI/ML', 'Prisma ORM'],
		images: {
			hero: '/images/case-studies/cybernest/cybernest-hero.jpg',
			thumbnail: '/images/case-studies/cybernest/cybernest-card.jpg',
			gallery: [
				'/images/case-studies/cybernest/cybernest-dashboard.webp',
				'/images/case-studies/cybernest/cybernest-home.webp',
				'/images/case-studies/cybernest/cybernest-search.webp',
				'/images/case-studies/cybernest/cybernest-collaboration.webp',
				'/images/case-studies/cybernest/cybernest-mobile.webp',
			],
		},
		featured: true,
		modules: [
			{
				type: 'process',
				title: 'Building Trust Through Design',
				steps: [
					{
						phase: 'Discovery & Planning',
						title: 'Understanding the Problem',
						description:
							'We spent time with cybersecurity professionals to understand their daily workflow, how they discover, validate, and act on threat intelligence. We learned that the dual audience challenge (serving both community members and expert networks) required careful planning for user management, data security, and scalable permissions.',
						bullets: [
							'User research & workflow analysis',
							'Platform architecture planning',
							'User management system design',
							'Performance & scalability planning',
						],
						image: '/images/case-studies/cybernest/cybernest-dashboard.webp',
					},
					{
						phase: 'Platform Development',
						title: 'Modern Web Architecture',
						description:
							'We built the platform using the latest web technologies to create a fast, responsive experience. The system intelligently serves different content based on user roles, provides seamless navigation between different sections, and ensures users can quickly find what they need without getting lost.',
						bullets: [
							'Modern web architecture',
							'Role-based user experience',
							'Intelligent navigation design',
							'Performance optimization',
						],
						image: '/images/case-studies/cybernest/cybernest-search.webp',
					},
					{
						phase: 'Intelligence & Collaboration',
						title: 'Smart Content & Real-time Features',
						description:
							'We developed intelligent systems that help users find the most relevant and trustworthy content. The platform uses community feedback, expert ratings, and smart algorithms to surface high quality intelligence. Real-time collaboration tools let teams work together on sensitive research without conflicts.',
						bullets: [
							'Smart content filtering',
							'Community rating systems',
							'Real-time collaboration tools',
							'Advanced search algorithms',
						],
						image: '/images/case-studies/cybernest/cybernest-collaboration.webp',
					},
					{
						phase: 'Testing & Launch',
						title: 'Quality Assurance & Deployment',
						description:
							'We conducted extensive testing across different devices and browsers, ensuring the platform works seamlessly for all users. The launch process included careful monitoring, user feedback collection, and iterative improvements based on real-world usage.',
						bullets: [
							'Cross-platform testing',
							'Performance optimization',
							'User feedback integration',
							'Launch monitoring',
						],
						image: '/images/case-studies/cybernest/cybernest-mobile.webp',
					},
				],
			},
			{
				type: 'featureGrid',
				title: 'Platform Highlights',
				features: [
					{
						title: 'Smart User Management',
						description:
							'We built a flexible user management system that adapts to different team structures and security requirements. The system includes role-based access controls, team workspaces for collaboration, and feature flags for gradual rollout of new capabilities.',
						bullets: [
							'Flexible role-based access',
							'Team workspace isolation',
							'Gradual feature rollout',
							'Legacy system compatibility',
						],
						image: '/images/case-studies/cybernest/cybernest-login.webp',
					},
					{
						title: 'Content Intelligence',
						description:
							'Our intelligent content system helps users find the most relevant and trustworthy information. The platform uses AI to summarize long documents, combines community feedback with expert ratings, and uses smart algorithms to surface trending topics.',
						bullets: [
							'AI-powered document summaries',
							'Community + expert ratings',
							'Smart trending algorithms',
							'Quality filtering systems',
						],
						image: '/images/case-studies/cybernest/cybernest-intelligence.webp',
					},
				],
				layout: 'twoCol',
			},
		],
	},
	{
		slug: 'hyperlocology',
		title: 'Hyperlocology',
		subtitle: 'Enterprise Multi-Location Advertising Platform',
		hook: 'Enterprise corporate website showcasing AI-powered advertising platform',
		client: {
			name: 'Hyperlocology',
			description: 'AI-powered advertising platform for multi-location businesses',
		},
		industry: 'SaaS',
		type: 'Website',
		timeline: '2025',
		services: ['Platform Development', 'WordPress Architecture', 'Custom CMS'],
		liveUrl: 'https://hyperlocology.com',
		partnerCredit: {
			name: 'Yeti Island',
			url: 'https://www.yetiisland.studio/',
			role: 'Design Partner',
		},
		challenge:
			'Hyperlocology needed a professional corporate website that would establish enterprise credibility while showcasing their AI-powered advertising platform for multi-location businesses. The site needed to serve as both a lead generation platform and a demonstration of technical capabilities.',
		approach:
			'Working alongside design partner Yeti Island, we planned a sophisticated navigation system and content organization strategy. We analyzed business requirements and identified the need for custom post types for customer stories and job listings.',
		solution:
			'A custom WordPress theme with modern architecture, leveraging WordPress 6.0+ features including block themes and custom post types. The modular, maintainable codebase supports diverse content types including customer success stories, job listings, and company resources.',
		results: [
			{
				metric: 'Architecture',
				value: 'Modern',
				description: 'WordPress 6.0+ block theme',
			},
			{
				metric: 'Content',
				value: 'Custom',
				description: 'Post types for stories & jobs',
			},
			{
				metric: 'Performance',
				value: 'Enterprise',
				description: 'Grade standards for speed & UX',
			},
		],
		techStack: ['WordPress', 'Block Theme', 'Custom Post Types', 'PHP', 'JavaScript'],
		images: {
			hero: '/images/case-studies/hyperlocology/hyper1.jpg',
			thumbnail: '/images/case-studies/hyperlocology/hyper1.jpg',
			gallery: [
				'/images/case-studies/hyperlocology/hyper2.jpg',
				'/images/case-studies/hyperlocology/hyper3.jpg',
				'/images/case-studies/hyperlocology/hyper4.jpg',
				'/images/case-studies/hyperlocology/hyper5.gif',
				'/images/case-studies/hyperlocology/hyper6.gif',
			],
		},
		featured: true,
		modules: [
			{
				type: 'process',
				title: 'Building Enterprise Credibility',
				steps: [
					{
						phase: 'Discovery & Planning',
						title: 'Understanding Business Requirements',
						description:
							"We analyzed Hyperlocology's business model and content management needs, identifying the need for custom post types for customer stories and job listings. Working closely with Yeti Island, we planned a sophisticated navigation system and content organization strategy that would serve both lead generation and brand credibility goals.",
						bullets: [
							'Business requirements analysis',
							'Content strategy planning',
							'Information architecture design',
							'User experience planning',
						],
						image: '/images/case-studies/hyperlocology/hyper3.jpg',
					},
					{
						phase: 'WordPress Development',
						title: 'Custom Theme Architecture',
						description:
							'We built a custom WordPress theme using a modern WordPress block theme, implementing the exceptional design work from Yeti Island. The theme includes custom post types for customer stories and job listings, sophisticated block editor integration, and a modular architecture designed for maintainability and future growth.',
						bullets: [
							'Custom WordPress theme development',
							'Custom post types and taxonomies',
							'Block editor integration',
							'Modular architecture design',
						],
						image: '/images/case-studies/hyperlocology/hyper6.gif',
					},
					{
						phase: 'Performance & Accessibility',
						title: 'Enterprise-Grade Standards',
						description:
							"We implemented comprehensive performance optimization and quality assurance measures to ensure fast loading times and smooth user experience. The implementation focused on enterprise-grade standards, providing a professional and reliable platform for Hyperlocology's business needs.",
						bullets: [
							'Performance optimization',
							'Quality assurance testing',
							'User experience validation',
							'Cross-browser testing',
						],
						image: '/images/case-studies/hyperlocology/hyper4.jpg',
					},
					{
						phase: 'Content & Brand Integration',
						title: 'Professional Presentation',
						description:
							"We integrated Hyperlocology's brand identity throughout the website, implementing their teal and blue color scheme, Poppins typography, and professional design aesthetic crafted by Yeti Island. The content management system was optimized for their specific business needs, including customer success stories and career opportunities.",
						bullets: [
							'Brand identity integration',
							'Content management optimization',
							'Professional design implementation',
							'User training and documentation',
						],
						image: '/images/case-studies/hyperlocology/hyper5.gif',
					},
				],
			},
		],
	},
	{
		slug: 'shakey-graves',
		title: 'Shakey Graves',
		subtitle: 'Movie of the Week',
		hook: 'We shipped AI-powered creative tools in 2023—before the boom. Over 1 billion unique soundtrack combinations.',
		client: {
			name: 'Shakey Graves',
			description: 'Grammy-nominated artist known for bold creative choices and genre-defying music',
		},
		industry: 'Entertainment',
		type: 'Campaign',
		timeline: '3.5 months • 2023',
		services: ['Web Design', 'Web Development', 'AI', 'Three.js'],
		liveUrl: 'https://www.shakeygraves.com',
		challenge:
			'In mid-2023, before AI tools went mainstream, Shakey Graves took a cosmic leap with his album "Movie of the Week": a film score for a fictional movie with multiple track versions. He needed a digital space where fans could piece together their own soundtrack with custom artwork, titles, and AI-powered movie synopses. The vision: turn passive listeners into active creators, powered by technology most brands hadn\'t touched yet.',
		approach:
			'We designed a retro-inspired web experience built around Shakey\'s iconic CRT TV wall. The same wall featured on his album cover and used in his live shows. Using Three.js, we recreated the nostalgic aesthetic digitally, letting fans "channel surf" through an interactive experience that felt both familiar and futuristic.',
		solution:
			'An AI-driven "Movie of the Week" generator where visitors select a movie genre, unlock personalized artwork from Shakey\'s personal library of AI-generated art, receive an original title and synopsis (generated from prompts we co-created with Shakey himself), and get a curated soundtrack pulled from hundreds of tracks—including studio sessions, outtakes, and alternate recordings. The result was so compelling that Shakey challenged his fans to produce real short films from the generated concepts.',
		results: [
			{
				metric: 'New Users',
				value: '+91%',
				description: 'Increase within the first week',
				context: 'Compared to previous site traffic',
			},
			{
				metric: 'Page Views',
				value: '+285%',
				description: 'Growth post-launch',
				context: 'Sustained engagement over launch period',
			},
			{
				metric: 'Combinations',
				value: '1B+',
				description: 'Unique soundtrack permutations',
				context: 'Every generated album is one-of-a-kind',
			},
		],
		testimonial: {
			quote:
				"They presented a site that essentially was nothing like we envisioned, but was everything we didn't know we wanted. House of Giants pushed our vision because we understood their trust in their ability to bring us a site with tools and interactivity that we didn't know existed.",
			author: 'Bodie Johnson',
			title: 'Manager',
			company: 'Shakey Graves',
		},
		techStack: ['Three.js', 'AI/ML', 'GSAP', 'Audio Integration', 'Custom Web App'],
		images: {
			hero: '/images/case-studies/shakeygraves/shakeycase1.jpg',
			thumbnail: '/images/case-studies/shakeygraves/shakeycard.jpg',
			gallery: [
				'/images/case-studies/shakeygraves/shakeycase2.jpg',
				'/images/case-studies/shakeygraves/shakeycase3.jpg',
				'/images/case-studies/shakeygraves/shakeycase4.jpg',
				'/images/case-studies/shakeygraves/shakeycase5.jpg',
				'/images/case-studies/shakeygraves/shakeycase6.jpg',
			],
		},
		featured: true,
		modules: [
			{
				type: 'process',
				title: 'Input your genre. Generate your soundtrack. Create your story.',
				steps: [
					{
						phase: 'Asset Curation',
						title: 'Mining the Archives',
						description:
							'Shakey had amassed a massive library of AI-generated artwork that mirrored the vibe of his new album—hundreds of pieces we hosted and leveraged as album covers for each generated soundtrack. We also dove deep into his recording archives: studio sessions, one-off recordings, outtakes, and alternate versions of every track. Each song on the released album had multiple recordings, making every generated soundtrack genuinely unique.',
						bullets: [
							'Curated hundreds of AI-generated artworks',
							'Catalogued full recording archive',
							'Multiple versions per track for variety',
							'Built asset delivery pipeline',
						],
						image: '/images/case-studies/shakeygraves/shakeycase1.jpg',
					},
					{
						phase: 'Technical Architecture',
						title: 'Recreating the TV Wall',
						description:
							"Using Three.js, we architected and recreated Shakey's iconic CRT TV wall. We aimed for the same aesthetic from his album cover and the physical installation he uses in live shows. The digital version lets fans channel-surf through an interactive 3D environment that captures the nostalgic warmth of vintage television while delivering a cutting-edge web experience.",
						bullets: [
							'Three.js 3D environment',
							'CRT TV visual effects',
							'Interactive channel surfing',
							'Responsive 3D scaling',
						],
						image: '/images/case-studies/shakeygraves/shakeycase2.jpg',
					},
					{
						phase: 'AI Integration',
						title: 'Crafting the Synopsis Engine',
						description:
							'This was 2023...before prompt engineering was a job title and before every agency claimed AI expertise. We collaborated directly with Shakey to architect the AI prompt that generates each movie synopsis. Every generated "film" gets a unique title, genre-appropriate artwork from his collection, and a compelling synopsis that feels like it could be a real movie. The experience was so inspiring that Shakey challenged his fans to actually produce short films based on their generated concepts.',
						bullets: [
							'Early AI adoption',
							'Custom prompt engineering',
							'Genre-aware generation',
							'Fan film challenge integration',
						],
						image: '/images/case-studies/shakeygraves/shakeycase3.jpg',
					},
					{
						phase: 'Launch & Impact',
						title: '1 Billion Combinations',
						description:
							'With hundreds of tracks, multiple versions per song, and AI-generated synopses, we created a system capable of over 1 billion unique soundtrack combinations. The launch drove a 91% increase in new users within the first week and 285% growth in page views—turning an album release into an interactive phenomenon. Two years later, this kind of AI-powered fan experience is everywhere. In 2023, it was genuinely novel.',
						bullets: [
							'+91% new users week one',
							'+285% page view growth',
							'1B+ unique combinations',
							'Ahead of the AI curve',
						],
						image: '/images/case-studies/shakeygraves/shakeycase4.jpg',
					},
				],
			},
		],
	},
	{
		slug: 'hayashi',
		title: 'Hayashi Whisky',
		subtitle: 'Web Design + Development',
		hook: 'Luxury Japanese whisky brand with immersive visual storytelling',
		client: {
			name: 'Hayashi Whisky',
			description: 'Premium Japanese whisky evolving the Okinawan awamori rice spirit tradition',
		},
		industry: 'Luxury',
		type: 'Website',
		timeline: '2022',
		services: ['Web Design', 'Web Development', 'Brand Strategy'],
		challenge:
			'Hayashi needed more than a pretty label—they wanted a digital launch that exuded upscale cool while educating consumers about their luxury status. Three core pillars—Japanese Artistry, Aged to Perfection, and Okinawan Lifestyle—had to shine through every aspect of the site.',
		approach:
			'We leaned into immersive visual storytelling to introduce Hayashi as the star of its own narrative. From gold-foil accents and intricate forest motifs to subtle nods at Ryukyu Islands culture, we built a clean, elegant website.',
		solution:
			"A luxury brand website weaving mystery, modernity, and tradition into each scroll. By showcasing the bottle as a central figure, we reinforced brand identity at every turn—ensuring Hayashi's prestige resonated with whisky aficionados and novices alike.",
		results: [
			{
				metric: 'Brand',
				value: 'Premium',
				description: 'Luxury positioning established',
			},
			{
				metric: 'Storytelling',
				value: 'Immersive',
				description: 'Visual narrative experience',
			},
			{
				metric: 'Heritage',
				value: 'Okinawan',
				description: 'Cultural authenticity showcased',
			},
		],
		techStack: ['Next.js', 'GSAP', 'Framer Motion', 'Strapi CMS'],
		images: {
			hero: '/images/case-studies/hayashi/hayashicase2.jpg',
			thumbnail: '/images/case-studies/hayashi/hayashicard.jpg',
			gallery: [
				'/images/case-studies/hayashi/hayashicase1.jpg',
				'/images/case-studies/hayashi/hayashicase3.jpg',
				'/images/case-studies/hayashi/hayashicase4.jpg',
				'/images/case-studies/hayashi/hayashicase5.jpg',
				'/images/case-studies/hayashi/hayashicase6.jpg',
			],
		},
		modules: [
			{
				type: 'process',
				title: 'The Process',
				steps: [
					{
						phase: 'Discovery & Planning',
						title: 'Understanding the Vision',
						description:
							"We began by deeply understanding Hayashi's unique position in the market and their vision for the future. Through collaborative sessions, we identified the need for a website that would not just showcase their products, but tell their story and connect with their audience on a deeper level.",
						bullets: [
							'Brand analysis & positioning',
							'User research & personas',
							'Content strategy planning',
							'Technical requirements',
						],
						image: '/images/case-studies/hayashi/hayashicase1.jpg',
					},
					{
						phase: 'Design & Development',
						title: 'Crafting the Experience',
						description:
							"We designed a website that captures the essence of Hayashi's innovative spirit. The development focused on creating smooth animations, intuitive navigation, and a responsive design that works seamlessly across all devices.",
						bullets: ['UI/UX design', 'Responsive development', 'Animation implementation', 'Performance optimization'],
						image: '/images/case-studies/hayashi/hayashicase2.jpg',
					},
					{
						phase: 'Content & Branding',
						title: 'Storytelling & Identity',
						description:
							'We worked closely with Hayashi to develop compelling content that tells their story authentically. The website showcases their products while highlighting the innovation and craftsmanship that sets them apart in the market.',
						bullets: ['Content creation', 'Brand storytelling', 'Product showcase', 'Visual identity'],
						image: '/images/case-studies/hayashi/hayashicase3.jpg',
					},
					{
						phase: 'Launch & Optimization',
						title: 'Going Live & Growing',
						description:
							'After a successful launch, we continue to work with Hayashi to optimize their website based on user feedback and analytics. The platform is designed to evolve with their business needs and market changes.',
						bullets: [
							'Launch preparation',
							'Performance monitoring',
							'User feedback integration',
							'Ongoing optimization',
						],
						image: '/images/case-studies/hayashi/hayashicase4.jpg',
					},
				],
			},
			{
				type: 'prose',
				eyebrow: 'The Result',
				title: 'A Digital Experience Worthy of the Whisky',
				body: "By blending subtle mystique, premium visuals, and a user-centric approach, House of Giants created a digital experience that embodies Hayashi's ethos: part traditional Japanese heritage, part innovative frontier. The final result? A captivating online presence that stands as proudly on the web as Hayashi does on the top shelf of any discerning whisky connoisseur's collection.",
				image: '/images/case-studies/hayashi/hayashicase5.jpg',
			},
		],
	},
	{
		slug: 'backforty',
		title: 'BackForty',
		subtitle: 'Digital Experience + Web Development',
		hook: 'Dual-business web platform for artist management and music supervision',
		client: {
			name: 'BackForty Management',
			description: 'Artist management firm and music supervision company pushing creative limits for 20+ years',
		},
		industry: 'Entertainment',
		type: 'Website',
		timeline: '2022',
		services: ['Web Design', 'Web Development', 'Brand Evolution'],
		liveUrl: 'https://backfortymgmt.com',
		challenge:
			"How do you show off two distinct sides—artist management and music supervision—without watering down either? BackForty needed a custom web solution that could highlight both ventures in a cohesive, powerful way. They wanted the energy and authenticity that's fueled their success from day one, but also a seamless user journey for potential partners, artists, and corporate clients.",
		approach:
			"BackForty's story is part grit, part innovation—two qualities we wanted front and center. We kicked off by digging deep into their dual business model, identifying how best to convey the excitement of artist management while highlighting the strategic nature of music supervision.",
		solution:
			'A responsive web application that merges modern frontend development with immersive UI, speaking directly to two different audiences—creative professionals and corporate brands. Custom animations and innovative design capture the electricity of the music world and the credibility of a seasoned industry leader.',
		results: [
			{
				metric: 'Engagement',
				value: 'High',
				description: 'Dual-audience platform success',
			},
			{
				metric: 'Experience',
				value: 'Immersive',
				description: 'Custom animations and transitions',
			},
			{
				metric: 'Conversion',
				value: 'Strong',
				description: 'Partners and artists connecting',
			},
		],
		testimonial: {
			quote:
				"I can't thank you enough for never halting, diminishing or deflecting our vision. Instead, you threw gas on the fire and guided us to make it OUR collective reality. You led us professionally to a site I can't imagine anyone has envisioned before.",
			author: 'Bodie Johnson',
			title: 'Manager',
			company: 'BackForty Management',
		},
		techStack: ['Next.js', 'GSAP', 'Custom Animations', 'Audio Integration'],
		images: {
			hero: '/images/case-studies/backforty/backfortytransitions.gif',
			thumbnail: '/images/case-studies/backforty/backfortycard.webp',
			gallery: [
				'/images/case-studies/backforty/backfortycase1.webp',
				'/images/case-studies/backforty/backfortycase2.webp',
				'/images/case-studies/backforty/backfortycase3.webp',
				'/images/case-studies/backforty/backfortycase4.webp',
				'/images/case-studies/backforty/backfortycase5.webp',
				'/images/case-studies/backforty/backfortycase6.webp',
				'/images/case-studies/backforty/backfortycase7.webp',
			],
		},
		modules: [
			{
				type: 'process',
				title: 'Crafting Digital Harmony',
				steps: [
					{
						phase: 'Discovery & Planning',
						title: 'Understanding the Vision',
						description:
							"BackForty's story is part grit, part innovation—two qualities we wanted front and center. We kicked off by digging deep into their dual business model, identifying how best to convey the excitement of artist management while highlighting the strategic nature of music supervision. We hammered out core objectives, user paths, and brand essence long before any code was written.",
						bullets: ['Brand Discovery', 'Luxury Market Positioning', 'Strategic Workshops'],
						image: '/images/case-studies/backforty/backfortycase1.webp',
					},
					{
						phase: 'Design & User Experience',
						title: 'Crafting the Experience',
						description:
							"Emphasizing minimalism, gold foil accents, and forest illustrations, we built a story-first UI that immerses users in BackForty's refined world. Large-format imagery shows off the brand's design, while subtle transitions evoke a sense of timeless ritual—mirroring the care that goes into each project. Every slide or section underlines the calm yet premium vibe the brand stands for.",
						bullets: ['Minimalist Web Design', 'Immersive UI', 'Visual Storytelling', 'Interactive Elements'],
						image: '/images/case-studies/backforty/backfortycase2.webp',
					},
					{
						phase: 'Development',
						title: 'Building the Site',
						description:
							"Behind the elegance lies a robust framework ensuring the site loads fast and adapts seamlessly on mobile. We infused interactive elements—like hover states and micro-animations—to keep users engaged, all while respecting the brand's quiet sophistication. Scalability was key: as BackForty grows and evolves, updates can be made effortlessly.",
						bullets: [
							'Responsive Web Development',
							'Performance Optimization',
							'Interactive Elements',
							'Scroll Animations',
						],
						image: '/images/case-studies/backforty/backfortytransitions.gif',
					},
					{
						phase: 'Launch',
						title: 'The Final Touch',
						description:
							'When the site went live, music industry professionals and curious newcomers alike found a platform that evokes the soul of BackForty\'s creative spirit: serene, yet brimming with potential. The golden accents, story-centric design, and frictionless UX helped elevate BackForty beyond "just another agency"—positioning it as a creative partner in a league of its own.',
						bullets: [
							'Quality Assurance & Testing',
							'Analytics Implementation',
							'Performance Monitoring',
							'Team Training & Handoff',
						],
						image: '/images/case-studies/backforty/backfortycase4.webp',
					},
				],
			},
			{
				type: 'dualShowcase',
				title: 'Two Sides of the Same Coin',
				left: {
					title: 'Music Supervision',
					description:
						"Through innovative web development and UX design, we created an engaging platform that showcases BackForty's music supervision portfolio. The interface appeals to outdoor and adventure brands while highlighting their impressive client roster, driving meaningful connections with potential partners.",
					image: '/images/case-studies/backforty/backfortycase4.webp',
					bullets: ['Brand partnerships', 'Portfolio showcase', 'Client roster', 'Industry credibility'],
				},
				right: {
					title: 'Artist Management',
					description:
						"The artist management portal leverages cutting-edge frontend development to create an authentic digital space where established artists can connect with the team. Our custom web application seamlessly presents BackForty's track record while maintaining the cool factor that artists expect.",
					image: '/images/case-studies/backforty/backfortycase3.webp',
					bullets: ['Artist connections', 'Track record showcase', 'Authentic presentation', 'Industry cool factor'],
				},
			},
			{
				type: 'prose',
				title: 'A Soundtrack for the Experience',
				body: 'By pushing the boundaries of modern web development, we created a digital experience that breaks the conventional mold. The site features some musical love from our good buddy Shakey Graves and his phenomenal song "Family and Genus" — seamlessly integrated into the user experience, showcasing the synergy between BackForty\'s artist management and digital presence.',
				image: '/images/case-studies/backforty/backfortycase7.webp',
			},
		],
	},
];

// -----------------------------------------------------------------------------
// Utility Functions
// -----------------------------------------------------------------------------

export function getFeaturedCaseStudies(): CaseStudy[] {
	return caseStudies.filter((study) => study.featured);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
	return caseStudies.find((study) => study.slug === slug);
}

export function getRelatedCaseStudies(currentSlug: string, limit: number = 4): CaseStudy[] {
	return caseStudies.filter((study) => study.slug !== currentSlug).slice(0, limit);
}

export function getAllSlugs(): string[] {
	return caseStudies.map((study) => study.slug);
}
