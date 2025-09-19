'use client';

import { CaseStudy } from '@/components/CaseStudy/CaseStudy';
import CaseStudySchema from '@/components/Schema/CaseStudySchema';

export default function Hyperlocology() {
	const caseStudyData = {
		title: 'Hyperlocology',
		description:
			"How House of Giants built an enterprise-grade corporate website for Hyperlocology's AI-powered advertising platform using modern WordPress architecture.",
		coverImage: '/images/hyper1.jpg',
		date: '2025-08-21',
		lastmod: '2025-08-21',
		client: 'Hyperlocology',
		slug: 'hyperlocology',
	};

	return (
		<>
			<CaseStudySchema caseStudy={caseStudyData} />
			<CaseStudy
				title="Hyperlocology"
				subtitle="Enterprise Multi-Location Advertising Platform"
				liveUrl="https://hyperlocology.com"
				heroImage="/images/hyper6.gif"
				variant="default"
				projectType="Corporate Website + WordPress Architecture"
				client="Hyperlocology"
				year="2025"
				intro="Hyperlocology needed a professional corporate website that would establish enterprise credibility while showcasing their AI-powered advertising platform for multi-location businesses. Working alongside our design partner <a href='https://www.yetiisland.studio/' target='_blank' rel='noopener noreferrer' className='text-cyber-green hover:text-white transition-colors'>Yeti Island</a>, we created a sophisticated content management system that could handle diverse content types including customer success stories, job listings, and company resources."
				challenge="The business context required a website that would serve as both a lead generation platform and a demonstration of technical capabilities. Key constraints included maintaining professional appearance while implementing modern WordPress features, ensuring fast performance for enterprise users, and creating a high-quality user experience that would meet enterprise standards."
				solution="The solution involved building a custom WordPress theme with modern architecture, leveraging the latest WordPress 6.0+ features including block themes and custom post types. Our collaboration with <a href='https://www.yetiisland.studio/' target='_blank' rel='noopener noreferrer' className='text-cyber-green hover:text-white transition-colors'>Yeti Island</a> brought exceptional design expertise to the project, ensuring the technical implementation perfectly complemented the visual design. The strategic approach focused on creating a modular, maintainable codebase that could support Hyperlocology's specific business requirements while maintaining high standards for performance and quality."
				images={{
					intro: '/images/hyper1.jpg',
					process: ['/images/hyper1.jpg', '/images/hyper2.jpg', '/images/hyper3.jpg', '/images/hyper4.jpg'],
				}}
				impact={{
					blurb: (
						<>
							By combining modern WordPress architecture with enterprise-grade performance standards and the exceptional
							design work from{' '}
							<a
								href="https://www.yetiisland.studio/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-cyber-green hover:text-white transition-colors"
							>
								Yeti Island
							</a>
							, we created a platform that
							<span className="text-cyber-green"> transforms how Hyperlocology presents their brand</span> and manages
							their content, helping them establish credibility and generate leads in the competitive multi-location
							advertising market.
						</>
					),
				}}
				process={{
					title: '04 - The Journey',
					subtitle: 'Building Enterprise Credibility',
					description:
						'From initial concept to final launch, we focused on creating a professional website that would establish Hyperlocology as a credible enterprise partner.',
					steps: [
						{
							phase: 'Discovery & Planning',
							title: 'Understanding Business Requirements',
							description:
								"We analyzed Hyperlocology's business model and content management needs, identifying the need for custom post types for customer stories and job listings. Working closely with <a href='https://www.yetiisland.studio/' target='_blank' rel='noopener noreferrer' className='text-cyber-green hover:text-white transition-colors'>Yeti Island</a>, we planned a sophisticated navigation system and content organization strategy that would serve both lead generation and brand credibility goals.",
							details: [
								'Business requirements analysis',
								'Content strategy planning',
								'Information architecture design',
								'User experience planning',
							],
							image: '/images/hyper3.jpg',
							color: '#00ffe0',
						},
						{
							phase: 'WordPress Development',
							title: 'Custom Theme Architecture',
							description:
								'We built a custom WordPress theme using a modern WordPress block theme, implementing the exceptional design work from <a href="https://www.yetiisland.studio/" target="_blank" rel="noopener noreferrer" className="text-cyber-green hover:text-white transition-colors">Yeti Island</a>. The theme includes custom post types for customer stories and job listings, sophisticated block editor integration, and a modular architecture designed for maintainability and future growth.',
							details: [
								'Custom WordPress theme development',
								'Custom post types and taxonomies',
								'Block editor integration',
								'Modular architecture design',
							],
							image: '/images/hyper1.jpg',
							color: '#8e3dfd',
						},
						{
							phase: 'Performance & Accessibility',
							title: 'Enterprise-Grade Standards',
							description:
								"We implemented comprehensive performance optimization and quality assurance measures to ensure fast loading times and smooth user experience. The implementation focused on enterprise-grade standards, providing a professional and reliable platform for Hyperlocology's business needs.",
							details: [
								'Performance optimization',
								'Quality assurance testing',
								'User experience validation',
								'Cross-browser testing',
							],
							image: '/images/hyper3.jpg',
							color: '#d4ff35',
						},
						{
							phase: 'Content & Brand Integration',
							title: 'Professional Presentation',
							description:
								"We integrated Hyperlocology's brand identity throughout the website, implementing their teal and blue color scheme, Poppins typography, and professional design aesthetic crafted by <a href='https://www.yetiisland.studio/' target='_blank' rel='noopener noreferrer' className='text-cyber-green hover:text-white transition-colors'>Yeti Island</a>. The content management system was optimized for their specific business needs, including customer success stories and career opportunities.",
							details: [
								'Brand identity integration',
								'Content management optimization',
								'Professional design implementation',
								'User training and documentation',
							],
							image: '/images/hyper5.gif',
							color: '#e61e5e',
						},
					],
				}}
			/>
		</>
	);
}
