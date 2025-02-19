'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '../Button/Button';
import Mark from '../SVG/Mark';
import { StyledHeader } from './StyledHeader';
import { Socials } from '../Social/Socials';
import { useElementHeight } from '../../hooks/useElementHeight';
import { useEffect, useRef } from 'react';

export const Header = () => {
	const headerRef = useRef(null);
	const headerHeight = useElementHeight(headerRef);

	// Expose header height to CSS custom property
	useEffect(() => {
		document.documentElement.style.setProperty('--header-height', `${headerHeight - 1}px`);
	}, [headerHeight]);

	return (
		<StyledHeader ref={headerRef}>
			{/* Left Side - Brand Identity */}
			<Link href="/" className="group flex-shrink-0">
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
					<span className="flex flex-col">
						<span className="font-sans text-moon-rock text-md md:text-4xl">
							House of Giants <span className="text-[#ff2a6d] text-sm font-mono">v2.4</span>
						</span>
						<span className="text-xs md:text-sm font-mono text-moon-rock hidden sm:block">
							<span className="text-[#ff2a6d]">// </span>
							Digital Experiences • Web Apps • Strategy
						</span>
					</span>
				</motion.h1>
			</Link>

			{/* Right Side - Navigation & Actions */}
			<div className="flex items-center gap-6 md:gap-8">
				{/* Primary Navigation */}
				<nav className="hidden md:flex items-center gap-8">
					<Link
						href="/#work"
						className="text-white font-serif font-bold italic hover:text-[#00ffe0] transition-colors duration-300 text-2xl"
					>
						Work
					</Link>
					<Link
						href="/blog"
						className="text-white font-serif font-bold italic hover:text-[#00ffe0] transition-colors duration-300 text-2xl"
					>
						Blog
					</Link>
				</nav>

				{/* Social Links - Desktop Only */}
				<div className="hidden md:block border-l border-moon-rock/20 pl-8">
					<Socials theme="dark" />
				</div>

				{/* CTA Button */}
				<Button
					href="/#contact"
					className="grad-border bg-[var(--c-primary-dark)] text-white font-mono hover:scale-105 transition-transform duration-300 text-sm md:text-base px-4 py-2 md:px-6"
				>
					Start Project
					<span className="text-[rgba(0,255,224,1)] ml-2">→</span>
				</Button>
			</div>
		</StyledHeader>
	);
};
