'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '../Button/Button';
import Mark from '../SVG/Mark';
import { StyledHeader } from './StyledHeader';

export const Header = () => (
	<StyledHeader>
		<Link href="/" className="group">
			<motion.h1
				className="flex items-center gap-2 md:gap-4"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<div className="relative">
					<Mark width="40" height="40" className="relative z-10 md:w-[50px] md:h-[50px]" />
					<motion.div
						className="absolute inset-0 bg-gradient-to-r from-[#00ffe0] to-[#c1ff1d] blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.5 }}
					/>
				</div>
				<h1 className="flex flex-col ">
					<span className="font-sans text-[var(--c-primary-dark)] text-md md:text-4xl">
						House of Giants <span className="text-[#ff2a6d] text-sm font-mono">v2.4</span>
					</span>
					<span className="text-xs md:text-sm font-mono text-wolf-gray hidden sm:block">
						<span className="text-[#ff2a6d]">// </span>
						Digital Experiences • Web Apps • Strategy
					</span>
				</h1>
			</motion.h1>
		</Link>
		<div className="flex gap-3 md:gap-6 items-center">
			<Button
				href="/blog"
				className="text-[var(--c-primary-dark)] hover:text-[#ff2a6d] min-w-[100px] text-center justify-center rounded  transition-colors duration-300 text-sm md:text-base"
			>
				Blog
			</Button>
			<Button
				href="#contact"
				className="grad-border bg-[var(--c-primary-dark)] text-white font-mono hover:scale-105 transition-transform duration-300 text-sm md:text-base px-3 py-2 md:px-4 md:py-2"
			>
				Start Project
				<span className="text-[rgba(0,255,224,1)] hidden sm:inline ml-2">→</span>
			</Button>
		</div>
	</StyledHeader>
);
