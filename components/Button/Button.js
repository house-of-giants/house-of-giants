'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export const Button = ({
	children,
	href,
	onClick,
	style,
	className,
	variant = 'primary',
	size = 'md',
	disabled,
	...rest
}) => {
	const baseStyles = 'font-serif text-base leading-none m-0';

	const variantStyles = {
		primary:
			'grad-border bg-[var(--c-primary-dark)] text-[var(--c-white)] font-mono hover:bg-[var(--c-wolf-gray)] hover:border-[var(--c-neon-sky)] transition-colors duration-300 text-base px-6 py-3 rounded-lg',
		secondary:
			'border border-[var(--c-wolf-gray)] text-[var(--c-white)] font-mono hover:border-[var(--c-cyber-green)]  transition-all duration-300 text-base px-6 py-3 rounded-lg',
		text: 'text-white hover:text-[var(--c-accent)] transition-colors duration-300 font-mono',
		link: 'underline decoration-1',
		cyberPink:
			'bg-cyber-pink/10 border-2 border-cyber-pink/50 text-white font-serif text-lg italic tracking-wider text-center px-6 py-3 rounded-lg transition-all duration-300 hover:bg-cyber-pink/20 pixel-btn',
		cyberGreen:
			'bg-cyber-green/20 border-2 border-cyber-green/70 text-white font-serif text-lg italic tracking-wider text-center px-6 py-3 rounded-lg transition-all duration-300 hover:bg-cyber-green/30 pixel-btn',
		cyberPurple:
			'bg-cyber-purple/10 border-2 border-cyber-purple/50 text-white font-serif text-lg italic tracking-wider text-center px-6 py-3 rounded-lg transition-all duration-300 hover:bg-cyber-purple/20 pixel-btn',
		gradient:
			'group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#00ffe0] to-[#c1ff1d] text-black font-bold py-4 px-8 rounded-full overflow-hidden',
	};

	const sizeStyles = {
		md: 'text-base px-6 py-3 rounded-lg',
		lg: 'text-lg px-8 py-4 rounded-lg',
		xl: 'text-xl px-10 py-5 rounded-lg',
	};

	const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ''}`;

	// If it's a gradient variant
	if (variant === 'gradient') {
		if (href) {
			return (
				<motion.a
					href={href}
					style={style}
					className={styles}
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
					disabled={disabled}
					{...rest}
				>
					<div className="relative z-10">{children}</div>
					<motion.div
						className="absolute inset-0 bg-white"
						initial={{ x: '100%' }}
						whileHover={{ x: 0 }}
						transition={{ duration: 0.3 }}
					/>
				</motion.a>
			);
		}
		return (
			<motion.button className={styles} style={style} onClick={onClick} disabled={disabled} {...rest}>
				<div className="relative z-10">{children}</div>
				<motion.div
					className="absolute inset-0 bg-white"
					initial={{ x: '100%' }}
					whileHover={{ x: 0 }}
					transition={{ duration: 0.3 }}
				/>
			</motion.button>
		);
	}

	// For other variants
	// If href is provided, render as Link or anchor depending on internal/external link
	if (href) {
		if (href.startsWith('/') || href.startsWith('#')) {
			return (
				<Link href={href} style={style} className={styles} disabled={disabled} {...rest}>
					{children}
				</Link>
			);
		}
		return (
			<a href={href} style={style} className={styles} onClick={onClick} disabled={disabled} {...rest}>
				{children}
			</a>
		);
	}

	// Otherwise render as button
	return (
		<button style={style} className={styles} onClick={onClick} disabled={disabled} {...rest}>
			{children}
		</button>
	);
};
