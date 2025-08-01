'use client';

import { motion, AnimatePresence } from 'framer-motion';

export const AudienceCard = ({ icon: Icon, title, description, audience, onSelect, index, isSelected }) => {
	// Refined animation variants for elegant transitions
	const cardVariants = {
		initial: {
			opacity: 0,
			y: 20,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				delay: index * 0.15,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
		hover: {
			y: -2,
			transition: {
				duration: 0.4,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
		selected: {
			y: -3,
			opacity: 1, // Keep full opacity when selected
			transition: {
				duration: 0.5,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const iconVariants = {
		initial: { opacity: 1 },
		hover: {
			scale: 1.05,
			transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
		},
		selected: {
			scale: 1.08,
			transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
		},
	};

	const selectionIndicatorVariants = {
		initial: {
			opacity: 0,
			scale: 0.8,
		},
		animate: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.4,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
		exit: {
			opacity: 0,
			scale: 0.8,
			transition: {
				duration: 0.3,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	return (
		<motion.div
			className={`relative group cursor-pointer overflow-hidden transition-all duration-700 ${
				isSelected
					? 'bg-white/[0.03] border border-white/25 shadow-xl'
					: 'bg-transparent border border-white/[0.08] hover:border-white/20'
			}`}
			// Asymmetric border radius for punk aesthetic
			style={{
				borderRadius: isSelected ? '16px 4px 16px 4px' : '4px 16px 4px 16px',
			}}
			variants={cardVariants}
			initial="initial"
			animate={isSelected ? 'selected' : 'animate'}
			whileHover={'hover'}
			onClick={() => onSelect(audience)}
		>
			{/* Industrial grid pattern overlay */}
			<motion.div
				className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500"
				animate={{
					opacity: isSelected ? 0.08 : 0.02,
				}}
			>
				<div
					className="w-full h-full"
					style={{
						backgroundImage: `
						linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
						linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
					`,
						backgroundSize: '20px 20px',
					}}
				/>
			</motion.div>

			{/* Refined background gradient */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-br from-[var(--c-neon-sky)]/3 via-[var(--c-cyber-purple)]/3 to-[var(--c-cyber-green)]/3"
				initial={{ opacity: 0 }}
				animate={{
					opacity: isSelected ? 0.1 : 0,
				}}
				transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
			/>

			{/* Subtle glitch effect on hover */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-r from-[var(--c-cyber-pink)]/0 via-[var(--c-cyber-pink)]/8 to-[var(--c-cyber-pink)]/0"
				initial={{ x: '-100%' }}
				whileHover={{ x: '100%' }}
				transition={{ duration: 0.8, ease: 'easeInOut' }}
			/>

			{/* Refined glow effect */}
			<motion.div
				className={`absolute inset-0 ${
					isSelected
						? 'bg-gradient-to-br from-[var(--c-neon-sky)]/8 to-[var(--c-cyber-green)]/8'
						: 'opacity-0 group-hover:opacity-100'
				} transition-opacity duration-500`}
				style={{
					borderRadius: isSelected ? '16px 4px 16px 4px' : '4px 16px 4px 16px',
				}}
				animate={{
					opacity: isSelected ? 0.08 : 0,
				}}
			/>

			<div className="relative z-10 p-8">
				{/* Icon with refined animations */}
				<motion.div
					className="relative flex items-center justify-center w-16 h-16 mb-6"
					variants={iconVariants}
					initial="initial"
					animate={isSelected ? 'selected' : 'initial'}
					whileHover={'hover'}
				>
					{/* Industrial frame around icon */}
					<motion.div
						className="absolute inset-0 border-2 border-moon-rock/20 group-hover:border-[var(--c-neon-sky)]/50 transition-colors duration-300"
						style={{ borderRadius: '8px 2px 8px 2px' }}
						animate={{
							borderColor: isSelected ? 'rgba(0, 255, 224, 0.6)' : 'rgba(255, 255, 255, 0.2)',
						}}
					/>
					<motion.div
						className="absolute inset-1 border border-moon-rock/10 group-hover:border-[var(--c-neon-sky)]/30 transition-colors duration-300"
						style={{ borderRadius: '6px 1px 6px 1px' }}
						animate={{
							borderColor: isSelected ? 'rgba(0, 255, 224, 0.4)' : 'rgba(255, 255, 255, 0.1)',
						}}
					/>

					<Icon
						size={28}
						className={`relative z-10 ${
							isSelected ? 'text-[var(--c-neon-sky)]' : 'text-moon-rock group-hover:text-[var(--c-neon-sky)]'
						} transition-colors duration-300`}
					/>
				</motion.div>

				{/* Typography with refined animations */}
				<motion.div
					className="space-y-4"
					animate={{
						y: isSelected ? -1 : 0,
					}}
					transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
				>
					<h3
						className={`font-sans text-xl font-bold leading-none  ${
							isSelected ? 'text-[var(--c-neon-sky)]' : 'text-moon-rock group-hover:text-[var(--c-neon-sky)]'
						} transition-colors duration-300`}
					>
						{title}
					</h3>

					<p
						className={`text-[var(--c-moon-rock)]/70 leading-relaxed text-[clamp(0.8rem,2vw,1.25rem)] ${
							isSelected ? 'text-[var(--c-moon-rock)]/90' : ''
						} transition-colors duration-300`}
					>
						{description}
					</p>
				</motion.div>

				{/* Refined CTA indicator */}
				<motion.div
					className={`flex items-center mt-6 font-medium transition-all duration-300 ${
						isSelected ? 'text-[var(--c-neon-sky)]' : 'text-[var(--c-cyber-green)] group-hover:text-[var(--c-neon-sky)]'
					}`}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
				>
					{/* Industrial line */}
					<motion.div
						className="w-8 h-[1px] bg-current mr-3 group-hover:w-12 transition-all duration-300"
						animate={{
							width: isSelected ? '3rem' : '2rem',
						}}
					/>

					<span className="text-sm tracking-wider uppercase font-mono">{isSelected ? 'SELECTED' : 'CHOOSE THIS'}</span>

					<motion.svg
						className="w-4 h-4 ml-2"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						initial={{ x: 0 }}
						whileHover={{ x: 3 }}
						animate={{
							x: isSelected ? 3 : 0,
						}}
						transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</motion.svg>
				</motion.div>
			</div>

			{/* Refined selection indicator */}
			<AnimatePresence>
				{isSelected && (
					<motion.div
						variants={selectionIndicatorVariants}
						initial="initial"
						animate="animate"
						exit="exit"
						className="absolute top-4 right-4 w-8 h-8 bg-[var(--c-neon-sky)] flex items-center justify-center"
						style={{ borderRadius: '2px 8px 2px 8px' }}
					>
						<svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Refined corner accents */}
			<motion.div
				className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[var(--c-cyber-green)]/30 group-hover:border-[var(--c-cyber-green)]/60 transition-colors duration-300"
				animate={{
					borderColor: isSelected ? 'rgba(193, 255, 29, 0.8)' : 'rgba(193, 255, 29, 0.3)',
				}}
			/>
			<motion.div
				className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[var(--c-neon-sky)]/30 group-hover:border-[var(--c-neon-sky)]/60 transition-colors duration-300"
				animate={{
					borderColor: isSelected ? 'rgba(0, 255, 224, 0.8)' : 'rgba(0, 255, 224, 0.3)',
				}}
			/>
		</motion.div>
	);
};
