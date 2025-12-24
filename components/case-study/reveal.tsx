'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	delay?: number;
	className?: string;
}

export function Reveal({ children, delay = 0, className, ...props }: RevealProps) {
	const ref = React.useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = React.useState(false);

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{
				threshold: 0.1,
				rootMargin: '50px',
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={cn(
				'cubic-bezier(0.16, 1, 0.3, 1) transition-all duration-1000',
				isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
				className
			)}
			style={{ transitionDelay: `${delay}s` }}
			{...props}
		>
			{children}
		</div>
	);
}
