'use client';

import { motion } from 'framer-motion';
import { ContactForm } from '../Contact/ContactForm';
import { SparklesIcon, ShoppingCartIcon, Building2Icon, RocketIcon } from 'lucide-react';

export const ContactSection = ({ selectedAudience, audiences }) => {
	const selectedAudienceData = audiences.find((audience) => audience.audience === selectedAudience);

	// Use the same audience-specific content logic as ContactForm
	const getAudienceContent = () => {
		switch (selectedAudience) {
			case 'startup':
				return {
					title: 'Ready to Scale Your',
					emphasizedText: 'Startup?',
					icon: <RocketIcon className="w-10 h-10 text-[var(--c-neon-sky)]" />,
					subtitle: "Let's build your growth engine",
					description:
						'From MVP to Series A-ready platforms—we help startups build fast, scale smart, and get to market quickly.',
					buttonText: 'Get Your Startup Quote',
				};
			case 'qsr':
				return {
					title: 'Ready to Drive',
					emphasizedText: 'More Orders?',
					icon: <ShoppingCartIcon className="w-10 h-10 text-[var(--c-neon-sky)]" />,
					subtitle: 'Restaurant websites that deliver results',
					description: 'Custom QSR websites and ordering systems that cut platform fees and boost direct revenue.',
					buttonText: 'Calculate Revenue Impact',
				};
			case 'enterprise':
				return {
					title: 'Ready for',
					emphasizedText: 'Enterprise-Grade Digital?',
					icon: <Building2Icon className="w-10 h-10 text-[var(--c-neon-sky)]" />,
					subtitle: 'Strategic solutions that scale',
					description:
						'Custom enterprise platforms and marketing websites built for security, compliance, and performance.',
					buttonText: 'Schedule Strategic Consultation',
				};
			default:
				return {
					title: 'Ready to Transform Your',
					emphasizedText: 'Digital Presence?',
					icon: <SparklesIcon className="w-10 h-10 text-[var(--c-neon-sky)]" />,
					subtitle: "Let's build something amazing together",
					description: "Tell us about your project, and we'll show you how we can help drive real business results.",
					buttonText: "Let's Talk About Your Project",
				};
		}
	};

	const audienceContent = getAudienceContent();

	// Refined animation variants for elegant transitions
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const titleVariants = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				delay: 0.3,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const subtitleVariants = {
		hidden: {
			opacity: 0,
			y: 15,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				delay: 0.4,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const formVariants = {
		hidden: {
			opacity: 0,
			y: 25,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.9,
				delay: 0.5,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	return (
		<motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative">
			<div className="text-center mb-16">
				<motion.h2
					className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-moon-rock leading-tight"
					variants={titleVariants}
				>
					{audienceContent.title}{' '}
					<span className="bg-gradient-to-r from-[var(--c-neon-sky)] to-[var(--c-cyber-green)] bg-clip-text text-transparent">
						{audienceContent.emphasizedText}
					</span>
				</motion.h2>

				<motion.p
					className="text-xl text-[var(--c-moon-rock)]/80 max-w-3xl mx-auto leading-relaxed"
					variants={subtitleVariants}
				>
					{audienceContent.description}
				</motion.p>
			</div>

			<motion.div variants={formVariants} className="max-w-2xl mx-auto relative">
				<motion.div
					className="absolute inset-0 bg-gradient-to-br from-[var(--c-neon-sky)]/3 via-transparent to-[var(--c-cyber-green)]/3 rounded-2xl blur-lg"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
				/>

				<div className="relative z-10">
					<ContactForm selectedAudience={selectedAudience} audienceData={selectedAudienceData} />
				</div>
			</motion.div>
		</motion.div>
	);
};
