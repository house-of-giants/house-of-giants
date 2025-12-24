'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/atoms/logo';
import { mainNavigation, secondaryNavigation, contactInfo } from '@/lib/data/navigation';

export function Header() {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
	const pathname = usePathname();

	const allNavigation = [...mainNavigation, ...secondaryNavigation];

	// Helper to check if link is active
	const isActiveLink = (href: string) => {
		if (href === '/') return pathname === '/';
		return pathname.startsWith(href);
	};

	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	React.useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isMobileMenuOpen]);

	return (
		<>
			<header
				className={cn(
					'fixed top-0 right-0 left-0 z-50 border-b transition-all duration-500 ease-in-out',
					isScrolled
						? 'bg-background/60 border-border backdrop-blur-xl'
						: 'border-transparent bg-transparent backdrop-blur-none'
				)}
			>
				<div className="container-wide">
					<nav className="flex h-20 items-center justify-between">
						{/* Logo */}
						<Link href="/" className="group relative z-50 flex items-center">
							<Logo width={180} className="text-foreground transition-opacity group-hover:opacity-80" />
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden items-center gap-1 lg:flex">
							{mainNavigation.map((item) => {
								const isActive = isActiveLink(item.href);
								return (
									<Link
										key={item.name}
										href={item.href}
										className={cn(
											"group relative px-4 py-2 text-sm transition-colors",
											isActive 
												? "text-foreground font-medium" 
												: "text-muted-foreground hover:text-foreground"
										)}
									>
										<span className="relative z-10">{item.name}</span>
										<span className="bg-muted absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
										{isActive && (
											<span className="bg-primary absolute right-4 bottom-0 left-4 h-0.5" />
										)}
									</Link>
								);
							})}
						</div>

						{/* CTA Button */}
						<div className="flex items-center gap-4">
							<Button href="/contact" className="group hidden gap-2 sm:flex">
								Start a Project
								<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</Button>

							{/* Mobile Menu Button */}
							<button
								className="text-foreground relative z-50 flex size-10 items-center justify-center lg:hidden"
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								aria-label="Toggle menu"
							>
								{isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
							</button>
						</div>
					</nav>
				</div>
			</header>

			{/* Mobile Menu Overlay */}
			<div
				className={cn(
					'bg-background/98 fixed inset-0 z-40 backdrop-blur-xl transition-all duration-500 lg:hidden',
					isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
				)}
			>
				<div className="flex h-full flex-col overflow-y-auto px-6 py-24 sm:px-8 sm:py-28">
					<nav className="flex flex-col gap-1 sm:gap-2">
						{allNavigation.map((item, index) => {
							const isActive = isActiveLink(item.href);
							return (
								<Link
									key={item.name}
									href={item.href}
									onClick={() => setIsMobileMenuOpen(false)}
									className={cn(
										'group border-border font-display flex items-center justify-between border-b py-3 text-3xl font-semibold transition-all duration-300 sm:py-4 sm:text-4xl',
										isActive ? 'text-primary' : 'hover:text-primary',
										isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
									)}
									style={{
										transitionDelay: isMobileMenuOpen ? `${index * 50 + 100}ms` : '0ms',
									}}
								>
									<span>{item.name}</span>
									<ArrowUpRight className={cn(
										"size-5 transition-all sm:size-6",
										isActive 
											? "translate-x-0 opacity-100" 
											: "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
									)} />
								</Link>
							);
						})}
					</nav>

					<div
						className={cn(
							'mt-8 transition-all duration-500 sm:mt-12',
							isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
						)}
						style={{
							transitionDelay: isMobileMenuOpen ? `${allNavigation.length * 50 + 150}ms` : '0ms',
						}}
					>
						<Button
							href="/contact"
							size="cta"
							className="w-full justify-center"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Start a Project
							<ArrowUpRight className="size-5" />
						</Button>
					</div>

					{/* Mobile footer info */}
					<div
						className={cn(
							'text-muted-foreground mt-8 flex flex-col justify-between gap-3 pb-4 text-sm transition-all duration-500 sm:flex-row sm:gap-4',
							isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
						)}
						style={{
							transitionDelay: isMobileMenuOpen ? `${allNavigation.length * 50 + 200}ms` : '0ms',
						}}
					>
						<span>{contactInfo.location} + Remote</span>
						<a href={`mailto:${contactInfo.email}`} className="hover:text-foreground transition-colors">
							{contactInfo.email}
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
