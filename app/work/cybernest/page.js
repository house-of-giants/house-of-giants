'use client';

import { CaseStudy } from '@/components/CaseStudy/CaseStudy';
import CaseStudySchema from '@/components/Schema/CaseStudySchema';
import { motion } from 'framer-motion';
import LazyImage from '@/components/Image/LazyImage';

export default function CyberNest() {
	const caseStudyData = {
		title: 'The CyberNest',
		description:
			'How House of Giants built a next-generation cybersecurity intelligence platform that transforms how security professionals access and trust threat intelligence.',
		coverImage: '/images/cybernest-hero.jpg',
		date: '2024-11-15',
		lastmod: '2024-11-15',
		client: 'The CyberNest',
		slug: 'cybernest',
	};

	return (
		<>
			<CaseStudySchema caseStudy={caseStudyData} />
			<CaseStudy
				title="The CyberNest"
				subtitle="Cybersecurity Intelligence Platform"
				liveUrl="https://thecybernest.com"
				heroImage="/images/cybernest-hero.jpg"
				variant="default"
				projectType="Enterprise SaaS Platform + Cybersecurity Intelligence"
				client="The CyberNest"
				year="2024"
				intro="Security professionals face a daily challenge: too much information, too little trust. Between vendor reports, internal tools, and online discussions, the volume of threat intelligence has exploded, but confidence in that information hasn't kept pace. CyberNest came to us with a bold vision: build a platform that could surface high quality, community verified intelligence that actually helps security teams make better decisions faster."
				challenge="This wasn't just a website. It was a complete intelligence platform that needed to serve two different audiences seamlessly. The platform had to work for both community members and expert networks, with sophisticated user management, real time collaboration on sensitive information, smart content filtering to cut through the noise, and enterprise grade security. The challenge was making something this powerful feel as intuitive as your favorite social media app."
				solution="We built a next generation platform that combines cutting edge technology with thoughtful user experience design. Using modern web architecture, intelligent content systems, and real time collaboration tools, we created an enterprise scale cybersecurity platform that feels effortless to use. The result is a platform that security professionals actually want to use, one that helps them find, trust, and act on the intelligence that matters most."
				images={{
					intro: '/images/cybernest-easy.webp',
					process: [
						'/images/cybernest-dashboard.webp',
						'/images/cybernest-search.webp',
						'/images/cybernest-collaboration.webp',
						'/images/cybernest-mobile.webp',
					],
				}}
				impact={{
					blurb: (
						<>
							By combining enterprise grade security with consumer grade ease of use, we created a platform that
							<span className="text-cyber-green"> transforms how cybersecurity professionals</span> access, trust, and
							act on threat intelligence, helping them cut through the noise to find what really matters.
						</>
					),
				}}
				testimonial={{
					quote: "They are the best team I've ever worked with regarding application development thus far.",
					author: 'Ben Siegel',
					role: 'CEO',
				}}
				process={{
					title: '04 - The Journey',
					subtitle: 'Building Trust Through Design',
					description:
						'From initial concept to final launch, we focused on creating a platform that security professionals would actually want to use every day.',
					steps: [
						{
							phase: 'Discovery & Planning',
							title: 'Understanding the Problem',
							description:
								'We spent time with cybersecurity professionals to understand their daily workflow, how they discover, validate, and act on threat intelligence. We learned that the dual audience challenge (serving both community members and expert networks) required careful planning for user management, data security, and scalable permissions.',
							details: [
								'User research & workflow analysis',
								'Platform architecture planning',
								'User management system design',
								'Performance & scalability planning',
							],
							image: '/images/cybernest-dashboard.webp',
							color: '#00FFE0',
						},
						{
							phase: 'Platform Development',
							title: 'Modern Web Architecture',
							description:
								'We built the platform using the latest web technologies to create a fast, responsive experience. The system intelligently serves different content based on user roles, provides seamless navigation between different sections, and ensures users can quickly find what they need without getting lost.',
							details: [
								'Modern web architecture',
								'Role-based user experience',
								'Intelligent navigation design',
								'Performance optimization',
							],
							image: '/images/cybernest-search.webp',
							color: '#8FFF5D',
						},
						{
							phase: 'Intelligence & Collaboration',
							title: 'Smart Content & Real-time Features',
							description:
								'We developed intelligent systems that help users find the most relevant and trustworthy content. The platform uses community feedback, expert ratings, and smart algorithms to surface high quality intelligence. Real time collaboration tools let teams work together on sensitive research without conflicts.',
							details: [
								'Smart content filtering',
								'Community rating systems',
								'Real-time collaboration tools',
								'Document sharing & annotation',
							],
							image: '/images/cybernest-collaboration.webp',
							color: '#C1FF1D',
						},
						{
							phase: 'Security & Launch',
							title: 'Enterprise-Grade Security',
							description:
								'We implemented robust security measures to protect sensitive threat intelligence while keeping the platform easy to use. The system includes sophisticated access controls, data isolation between teams, and comprehensive security monitoring, all designed to meet enterprise security requirements.',
							details: [
								'Advanced access controls',
								'Data isolation & compliance',
								'Security monitoring',
								'Scalable deployment',
							],
							image: '/images/cybernest-mobile.webp',
							color: '#E2FF1D',
						},
					],
				}}
				additionalSections={[
					{
						type: 'split-content',
						content: (
							<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
								<div className="lg:col-span-5 space-y-8">
									<h4 className="text-2xl text-cyber-green mb-4">Smart User Management</h4>
									<p className="text-moon-rock leading-relaxed">
										We built a flexible user management system that adapts to different team structures and security
										requirements. The system includes role based access controls, team workspaces for collaboration, and
										feature flags for gradual rollout of new capabilities, all while maintaining compatibility with
										existing systems.
									</p>
									<div className="space-y-4">
										<div className="border border-cyber-green/20 rounded-lg p-4">
											<h5 className="text-cyber-green font-semibold mb-2">Key Features</h5>
											<ul className="text-moon-rock text-sm space-y-1">
												<li>• Flexible role based access</li>
												<li>• Team workspace isolation</li>
												<li>• Gradual feature rollout</li>
												<li>• Legacy system compatibility</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="lg:col-span-7">
									<motion.div className="relative aspect-[4/3] overflow-hidden rounded-lg">
										<LazyImage
											src="/images/cybernest-login.webp"
											alt="CyberNest user management interface"
											fill
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
										/>
									</motion.div>
								</div>
							</div>
						),
					},
					{
						type: 'split-content-reverse',
						content: (
							<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
								<div className="lg:col-span-7">
									<motion.div className="relative aspect-[4/3] overflow-hidden rounded-lg">
										<LazyImage
											src="/images/cybernest-intelligence.webp"
											alt="CyberNest content intelligence features"
											fill
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
										/>
									</motion.div>
								</div>
								<div className="lg:col-span-5 space-y-8">
									<h4 className="text-2xl text-cyber-green mb-4">Content Intelligence</h4>
									<p className="text-moon-rock leading-relaxed">
										Our intelligent content system helps users find the most relevant and trustworthy information. The
										platform uses AI to summarize long documents, combines community feedback with expert ratings, and
										uses smart algorithms to surface trending topics. The result is a system that cuts through industry
										noise to deliver actionable insights.
									</p>
									<div className="space-y-4">
										<div className="border border-cyber-green/20 rounded-lg p-4">
											<h5 className="text-cyber-green font-semibold mb-2">Intelligence Features</h5>
											<ul className="text-moon-rock text-sm space-y-1">
												<li>• AI powered document summaries</li>
												<li>• Community + expert ratings</li>
												<li>• Smart trending algorithms</li>
												<li>• Quality filtering systems</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						),
					},
					{
						type: 'centered-text',
						content: (
							<motion.p className="max-w-5xl mx-auto text-3xl leading-[3rem] text-center text-moon-rock">
								By focusing on user experience while maintaining enterprise grade security, we've created a platform
								that security professionals actually want to use. The result is a{' '}
								<span className="text-cyber-green">community driven intelligence platform</span> that builds trust
								through transparency and peer validation, helping teams make better decisions faster.
							</motion.p>
						),
					},
					{
						type: 'split-content',
						content: (
							<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
								<div className="lg:col-span-5 space-y-8">
									<h4 className="text-2xl text-cyber-green mb-4">Real-Time Collaboration</h4>
									<p className="text-moon-rock leading-relaxed">
										Security teams need to work together on sensitive research without stepping on each other's toes. We
										built live collaboration tools that let teams annotate documents, share context, and discuss
										findings in real time, all while maintaining proper data isolation and security controls.
									</p>
									<div className="space-y-4">
										<div className="border border-cyber-green/20 rounded-lg p-4">
											<h5 className="text-cyber-green font-semibold mb-2">Collaboration Tools</h5>
											<ul className="text-moon-rock text-sm space-y-1">
												<li>• Live document annotation</li>
												<li>• Team workspace isolation</li>
												<li>• Change tracking & conflict resolution</li>
												<li>• Real time document sharing</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="lg:col-span-7">
									<motion.div className="relative aspect-[4/3] overflow-hidden rounded-lg">
										<LazyImage
											src="/images/cybernest-collaboration.webp"
											alt="CyberNest real-time collaboration features"
											fill
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
										/>
									</motion.div>
								</div>
							</div>
						),
					},
					{
						type: 'full-width-image',
						content: (
							<motion.div
								className="aspect-[21/9] relative rounded-lg overflow-hidden"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true, margin: '-20%' }}
								transition={{ duration: 0.8 }}
							>
								<LazyImage
									src="/images/cybernest-home.webp"
									alt="CyberNest platform overview"
									fill
									className="w-full h-full object-contain"
								/>
							</motion.div>
						),
					},
				]}
			/>
		</>
	);
}
