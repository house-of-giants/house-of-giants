import { cn } from '@/lib/utils';
import * as React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
	children: React.ReactNode;
	container?: 'wide' | 'narrow' | 'none';
	padding?: 'default' | 'none' | 'top' | 'bottom';
	background?: 'default' | 'muted' | 'card';
	/** Clip-path mask shape at top of section */
	maskTop?: 'wave' | 'angle' | 'none';
	/** Clip-path mask shape at bottom of section */
	maskBottom?: 'wave' | 'angle' | 'chevron' | 'asymmetric' | 'none';
	/** Whether masks should use muted background color */
	maskMuted?: boolean;
}

export function Section({
	children,
	className,
	container = 'wide',
	padding = 'default',
	background = 'default',
	maskTop = 'none',
	maskBottom = 'none',
	maskMuted = false,
	...props
}: SectionProps) {
	return (
		<section
			className={cn(
				'relative',
				padding === 'default' && 'section-padding',
				padding === 'top' && 'pt-24 md:pt-32 lg:pt-40',
				padding === 'bottom' && 'pb-24 md:pb-32 lg:pb-40',
				background === 'muted' && 'bg-muted/30',
				background === 'card' && 'bg-card',
				// Mask top shapes
				maskTop === 'wave' && 'section-mask-wave-top',
				maskTop === 'angle' && 'section-mask-angle-top',
				// Mask bottom shapes
				maskBottom === 'wave' &&
					(maskMuted ? 'section-mask-wave-bottom section-mask-wave-bottom-muted' : 'section-mask-wave-bottom'),
				maskBottom === 'angle' &&
					(maskMuted ? 'section-mask-angle-bottom section-mask-angle-bottom-muted' : 'section-mask-angle-bottom'),
				maskBottom === 'chevron' && 'section-mask-chevron-bottom',
				maskBottom === 'asymmetric' && 'section-mask-asymmetric-bottom',
				className
			)}
			{...props}
		>
			<div className={cn(container === 'wide' && 'container-wide', container === 'narrow' && 'container-narrow')}>
				{children}
			</div>
		</section>
	);
}
