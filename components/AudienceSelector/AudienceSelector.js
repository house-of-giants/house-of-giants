'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import { AudienceSelection } from './AudienceSelection';
import { ContactSection } from './ContactSection';
import { AUDIENCE_DATA } from './data';
import { AccentLine } from './AccentLine';
import { usePlausible } from '@/hooks/usePlausible';

export const AudienceSelector = ({ onAudienceSelect }) => {
	const [selectedAudience, setSelectedAudience] = useState(null);
	const [showContact, setShowContact] = useState(false);
	const { trackAudienceSelection } = usePlausible();

	const handleAudienceSelect = async (audience) => {
		setSelectedAudience(audience);
		setShowContact(true);

		// Track audience selection with Plausible
		trackAudienceSelection(audience);

		if (onAudienceSelect) {
			onAudienceSelect(audience);
		}
	};

	const handleBack = async () => {
		setShowContact(false);
		setSelectedAudience(null);
	};

	// Refined animation variants for elegant transitions
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.46, 0.45, 0.94],
				staggerChildren: 0.1,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.4,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const accentLineVariants = {
		hidden: {
			opacity: 0,
			x: -15,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.7,
				delay: 0.2,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const selectionVariants = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: [0.25, 0.46, 0.45, 0.94],
				staggerChildren: 0.1,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const contactVariants = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
				staggerChildren: 0.15,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.5,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	return (
		<Section count="1.5" title="Choose Your Path">
			<Container
				className="-has-background"
				background="var(--c-primary-dark)"
				pt="clamp(var(--sp-sm), 10vh, 12rem)"
				pb="var(--section-spacing-bottom)"
			>
				<motion.div variants={accentLineVariants} initial="hidden" animate="visible" className="flex flex-col gap-4">
					<AccentLine showBackButton={showContact} onBack={handleBack} />
				</motion.div>

				<motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative">
					<AnimatePresence mode="wait">
						{!showContact ? (
							<motion.div
								key="audience-selection"
								variants={selectionVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
								className="relative"
							>
								{/* Subtle background animation during selection */}
								<motion.div
									className="absolute inset-0 bg-gradient-to-br from-[var(--c-neon-sky)]/3 via-transparent to-[var(--c-cyber-green)]/3 rounded-2xl"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
								/>

								<div className="relative z-10">
									<AudienceSelection
										audiences={AUDIENCE_DATA}
										selectedAudience={selectedAudience}
										onAudienceSelect={handleAudienceSelect}
										showContact={showContact}
									/>
								</div>
							</motion.div>
						) : (
							<motion.div
								key="contact-form"
								variants={contactVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
								className="relative"
							>
								{/* Refined background animation for contact form */}
								<motion.div
									className="absolute inset-0 bg-gradient-to-br from-[var(--c-cyber-purple)]/4 via-[var(--c-neon-sky)]/3 to-[var(--c-cyber-green)]/4 rounded-2xl"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
								/>

								<div className="relative z-10">
									<ContactSection selectedAudience={selectedAudience} onBack={handleBack} audiences={AUDIENCE_DATA} />
								</div>
							</motion.div>
						)}
					</AnimatePresence>

					{/* Subtle floating elements for elegance */}
					<motion.div
						className="absolute inset-0 pointer-events-none overflow-hidden"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
					>
						{/* Refined floating elements */}
						<motion.div
							className="absolute top-1/4 left-1/4 w-1 h-1 bg-[var(--c-neon-sky)]/15 rounded-full"
							animate={{
								y: [0, -15, 0],
								x: [0, 8, 0],
								opacity: [0.15, 0.3, 0.15],
							}}
							transition={{
								duration: 6,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
						/>
						<motion.div
							className="absolute top-3/4 right-1/3 w-0.5 h-0.5 bg-[var(--c-cyber-green)]/20 rounded-full"
							animate={{
								y: [0, -12, 0],
								x: [0, -6, 0],
								opacity: [0.2, 0.4, 0.2],
							}}
							transition={{
								duration: 5,
								repeat: Infinity,
								ease: 'easeInOut',
								delay: 1,
							}}
						/>
						<motion.div
							className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[var(--c-cyber-purple)]/15 rounded-full"
							animate={{
								y: [0, -20, 0],
								x: [0, 10, 0],
								opacity: [0.15, 0.25, 0.15],
							}}
							transition={{
								duration: 7,
								repeat: Infinity,
								ease: 'easeInOut',
								delay: 2,
							}}
						/>
					</motion.div>
				</motion.div>
			</Container>
		</Section>
	);
};
