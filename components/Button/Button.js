import Link from 'next/link';

export const Button = ({ children, href, onClick, style, className, variant = 'primary', ...rest }) => {
	const baseStyles = 'inline-flex items-center font-serif text-base leading-none m-0';

	const variantStyles = {
		primary: 'bg-transparent border border-[var(--c-primary-dark)] cursor-pointer',
		link: 'underline decoration-1',
	};

	const styles = `${baseStyles} ${variantStyles[variant]} ${className || ''}`;

	// If href is provided, render as Link or anchor depending on internal/external link
	if (href) {
		if (href.startsWith('/') || href.startsWith('#')) {
			return (
				<Link href={href} style={style} className={styles} {...rest}>
					{children}
				</Link>
			);
		}
		return (
			<a href={href} style={style} className={styles} onClick={onClick} {...rest}>
				{children}
			</a>
		);
	}

	// Otherwise render as button
	return (
		<button style={style} className={styles} onClick={onClick} {...rest}>
			{children}
		</button>
	);
};
