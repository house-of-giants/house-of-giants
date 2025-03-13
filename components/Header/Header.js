'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../Button/Button';
import Mark from '../SVG/Mark';
import { StyledHeader } from './StyledHeader';
import { Socials } from '../Social/Socials';
import { useElementHeight } from '../../hooks/useElementHeight';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export const Header = () => {
	const headerRef = useRef(null);
	const headerHeight = useElementHeight(headerRef);
	const [servicesOpen, setServicesOpen] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();
	const dropdownTimeoutRef = useRef(null);

	// Expose header height to CSS custom property
	useEffect(() => {
		document.documentElement.style.setProperty('--header-height', `${headerHeight - 1}px`);
	}, [headerHeight]);

	// Handle dropdown mouseenter/mouseleave with delay to prevent accidental closures
	const handleDropdownMouseEnter = () => {
		if (dropdownTimeoutRef.current) {
			clearTimeout(dropdownTimeoutRef.current);
			dropdownTimeoutRef.current = null;
		}
		setServicesOpen(true);
	};

	const handleDropdownMouseLeave = () => {
		dropdownTimeoutRef.current = setTimeout(() => {
			setServicesOpen(false);
		}, 150); // Small delay to allow movement between button and dropdown
	};

	// Check if a path is active or a child of an active path
	const isActive = (path) => {
		// Home page work section
		if (path === '/#work' && pathname === '/') return true;

		// Services pages
		if (path === '/services') {
			return (
				pathname.startsWith('/web-development') ||
				pathname.startsWith('/web-design') ||
				pathname.startsWith('/ux-architecture') ||
				pathname.startsWith('/digital-innovation')
			);
		}

		// Blog page and nested blog posts
		if (path === '/blog' && pathname.startsWith('/blog')) return true;

		// Contact page
		if (path === '/contact' && pathname.startsWith('/contact')) return true;

		// Exact match
		return pathname === path;
	};

	return (
		<StyledHeader ref={headerRef}>
			{/* Left Side - Brand Identity */}
			<Link href="/" className="group flex-shrink-0">
				<motion.h1 className="flex items-center gap-2 md:gap-4">
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
						className={`font-serif font-bold italic transition-colors duration-300 text-2xl ${
							isActive('/#work') ? 'text-[#00ffe0]' : 'text-white hover:text-[#00ffe0]'
						}`}
					>
						Work
					</Link>
					<div className="relative" onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
						<button
							className={`font-serif font-bold italic transition-colors duration-300 text-2xl flex items-center gap-1 ${
								isActive('/services') ? 'text-[#00ffe0]' : 'text-white hover:text-[#00ffe0]'
							}`}
							onClick={() => setServicesOpen(!servicesOpen)}
						>
							Services
						</button>

						{/* Invisible bridge element to prevent hover gap issues */}
						{servicesOpen && <div className="absolute left-0 w-full h-4 bottom-0 translate-y-full z-10"></div>}

						<AnimatePresence>
							{servicesOpen && (
								<motion.div
									initial={{ opacity: 0, y: 5 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 5 }}
									transition={{ duration: 0.15 }}
									className="absolute top-full left-0 mt-1 bg-black bg-opacity-90 backdrop-blur-sm rounded-lg p-2 min-w-[230px] border border-gray-800 shadow-xl z-20"
								>
									<Link
										href="/web-development"
										className={`block px-4 py-3 hover:bg-[var(--c-accent)] hover:bg-opacity-20 rounded text-white transition-all ${
											pathname === '/web-development' ? 'bg-[var(--c-accent)] bg-opacity-20 font-bold' : ''
										}`}
									>
										Web Development
									</Link>
									<Link
										href="/web-design"
										className={`block px-4 py-3 hover:bg-[var(--c-accent)] hover:bg-opacity-20 rounded text-white transition-all ${
											pathname === '/web-design' ? 'bg-[var(--c-accent)] bg-opacity-20 font-bold' : ''
										}`}
									>
										Web Design
									</Link>
									<Link
										href="/ux-architecture"
										className={`block px-4 py-3 hover:bg-[var(--c-accent)] hover:bg-opacity-20 rounded text-white transition-all ${
											pathname === '/ux-architecture' ? 'bg-[var(--c-accent)] bg-opacity-20 font-bold' : ''
										}`}
									>
										UX Architecture
									</Link>
									<Link
										href="/digital-innovation"
										className={`block px-4 py-3 hover:bg-[var(--c-accent)] hover:bg-opacity-20 rounded text-white transition-all ${
											pathname === '/digital-innovation' ? 'bg-[var(--c-accent)] bg-opacity-20 font-bold' : ''
										}`}
									>
										Digital Innovation
									</Link>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
					<Link
						href="/blog"
						className={`font-serif font-bold italic transition-colors duration-300 text-2xl ${
							isActive('/blog') ? 'text-[#00ffe0]' : 'text-white hover:text-[#00ffe0]'
						}`}
					>
						Blog
					</Link>
				</nav>

				<div className="relative h-10 w-px mx-6 hidden md:block">
					<div className="absolute inset-0 w-[1px] h-full bg-gradient-to-b from-[rgba(255,42,109,0.6)] via-[rgba(155,77,255,0.6)] to-[rgba(0,255,224,0.6)]"></div>
					<div className="absolute inset-0 w-[3px] h-full blur-sm bg-gradient-to-b from-[rgba(255,42,109,0.3)] via-[rgba(155,77,255,0.3)] to-[rgba(0,255,224,0.3)]"></div>
				</div>

				{/* Social Links with Gradient Border Separator - Desktop Only */}
				<div className="hidden md:flex items-center">
					<div className="flex items-center">
						<Socials theme="dark" compact={true} />
					</div>
				</div>

				{/* CTA Button */}
				<Button
					href="/contact"
					className="max-w-[135px] grad-border bg-[var(--c-primary-dark)] text-white font-serif italic font-bold text-lg md:text-xl px-4 py-2.5 md:px-6 md:py-3 transition-all duration-300 hover:scale-105 hover:shadow-glow"
				>
					Start Project
				</Button>

				{/* Mobile Menu Toggle Button */}
				<button
					className="md:hidden flex items-center justify-center w-10 h-10 text-white focus:outline-none"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					aria-label="Toggle mobile menu"
				>
					<div className="relative w-6 h-5">
						<span
							className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
								mobileMenuOpen ? 'rotate-45 top-2' : 'top-0'
							}`}
						></span>
						<span
							className={`absolute h-0.5 w-full bg-white top-2 transition-all duration-300 ${
								mobileMenuOpen ? 'opacity-0' : 'opacity-100'
							}`}
						></span>
						<span
							className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
								mobileMenuOpen ? '-rotate-45 top-2' : 'top-4'
							}`}
						></span>
					</div>
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
						transition={{ duration: 0.3 }}
						className="absolute top-full left-0 w-full bg-[var(--c-primary-dark)] z-50 md:hidden overflow-hidden border-t border-gray-800"
					>
						<div className="px-6 py-8 max-h-[80vh] overflow-y-auto">
							<div className="space-y-1">
								<Link
									href="/#work"
									className={`block py-4 px-3 text-xl rounded-lg transition-all ${
										isActive('/#work')
											? 'text-[#00ffe0] bg-black bg-opacity-40'
											: 'text-white hover:bg-black hover:bg-opacity-20 hover:text-[#00ffe0]'
									}`}
									onClick={() => setMobileMenuOpen(false)}
								>
									Work
								</Link>
							</div>

							{/* Mobile Services Dropdown */}
							<div className="mt-1">
								<button
									className={`flex justify-between items-center w-full py-4 px-3 text-xl rounded-lg transition-all ${
										isActive('/services')
											? 'text-[#00ffe0] bg-black bg-opacity-40'
											: 'text-white hover:bg-black hover:bg-opacity-20 hover:text-[#00ffe0]'
									}`}
									onClick={() => setServicesOpen(!servicesOpen)}
								>
									Services
									<span className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>↓</span>
								</button>

								<AnimatePresence>
									{servicesOpen && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: 'auto' }}
											exit={{ opacity: 0, height: 0 }}
											transition={{ duration: 0.2 }}
											className="overflow-hidden"
										>
											<div className="pl-6 pr-2 py-2 space-y-1 my-2 border-l-2 border-gray-800 ml-3">
												<Link
													href="/web-development"
													className={`block py-3 px-3 rounded-lg transition-colors ${
														pathname === '/web-development'
															? 'text-[#00ffe0] bg-black bg-opacity-40'
															: 'text-white hover:bg-black hover:bg-opacity-20 hover:text-[#00ffe0]'
													}`}
													onClick={() => setMobileMenuOpen(false)}
												>
													Web Development
												</Link>
												<Link
													href="/web-design"
													className={`block py-3 px-3 rounded-lg transition-colors ${
														pathname === '/web-design'
															? 'text-[#00ffe0] bg-black bg-opacity-40'
															: 'text-white hover:bg-black hover:bg-opacity-20 hover:text-[#00ffe0]'
													}`}
													onClick={() => setMobileMenuOpen(false)}
												>
													Web Design
												</Link>
												<Link
													href="/ux-architecture"
													className={`block py-3 px-3 rounded-lg transition-colors ${
														pathname === '/ux-architecture'
															? 'text-[#00ffe0] bg-black bg-opacity-40'
															: 'text-white hover:bg-black hover:bg-opacity-20 hover:text-[#00ffe0]'
													}`}
													onClick={() => setMobileMenuOpen(false)}
												>
													UX Architecture
												</Link>
												<Link
													href="/digital-innovation"
													className={`block py-3 px-3 rounded-lg transition-colors ${
														pathname === '/digital-innovation'
															? 'text-[#00ffe0] bg-black bg-opacity-40'
															: 'text-white hover:bg-black hover:bg-opacity-20 hover:text-[#00ffe0]'
													}`}
													onClick={() => setMobileMenuOpen(false)}
												>
													Digital Innovation
												</Link>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>

							<div className="space-y-1 mt-1">
								<Link
									href="/blog"
									className={`block py-4 px-3 text-xl rounded-lg transition-all ${
										isActive('/blog')
											? 'text-[#00ffe0] bg-black bg-opacity-40'
											: 'text-white hover:bg-black hover:bg-opacity-20 hover:text-[#00ffe0]'
									}`}
									onClick={() => setMobileMenuOpen(false)}
								>
									Blog
								</Link>
								<Link
									href="/contact"
									className={`block py-4 px-3 text-xl rounded-lg transition-all ${
										isActive('/contact')
											? 'text-[#00ffe0] bg-black bg-opacity-40'
											: 'text-white hover:bg-black hover:bg-opacity-20 hover:text-[#00ffe0]'
									}`}
									onClick={() => setMobileMenuOpen(false)}
								>
									Contact
								</Link>
							</div>

							{/* CTA in Mobile Menu */}
							<div className="mt-6 relative">
								{/* Gradient separator for mobile */}
								<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[rgba(255,42,109,0.5)] via-[rgba(155,77,255,0.5)] to-[rgba(0,255,224,0.5)]"></div>
								<div className="absolute top-0 left-0 w-full h-[2px] blur-sm bg-gradient-to-r from-[rgba(255,42,109,0.3)] via-[rgba(155,77,255,0.3)] to-[rgba(0,255,224,0.3)]"></div>

								<div className="pt-6">
									<Button
										href="/contact"
										className="w-full grad-border bg-[var(--c-primary-dark)] text-white font-serif italic font-bold text-lg md:text-xl px-4 py-3 rounded-lg flex items-center justify-center hover:bg-black hover:bg-opacity-20 transition-all duration-300 hover:shadow-glow"
										onClick={() => setMobileMenuOpen(false)}
									>
										Start Your Project
									</Button>
								</div>
							</div>

							<div className="mt-8 mb-6">
								<h4 className="text-md font-bold mb-4">Connect With Us</h4>
								<p className="text-sm text-moon-rock mb-3">Follow Us</p>
								<Socials theme="dark" />
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</StyledHeader>
	);
};
