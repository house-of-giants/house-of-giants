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

interface SectionHeaderProps {
	eyebrow?: string;
	title: React.ReactNode;
	description?: string;
	align?: 'left' | 'center';
	className?: string;
}

export function SectionHeader({ eyebrow, title, description, align = 'left', className }: SectionHeaderProps) {
	return (
		<div className={cn('mb-12 md:mb-16 lg:mb-20', align === 'center' && 'mx-auto max-w-3xl text-center', className)}>
			{eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
			<h2 className="heading-2 mb-4">{title}</h2>
			{description && <p className="body-large text-muted-foreground max-w-2xl">{description}</p>}
		</div>
	);
}

export function SectionGrid({
	children,
	className,
	cols = 3,
}: {
	children: React.ReactNode;
	className?: string;
	cols?: 2 | 3 | 4;
}) {
	return (
		<div
			className={cn(
				'grid gap-6 lg:gap-8',
				cols === 2 && 'grid-cols-1 md:grid-cols-2',
				cols === 3 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
				cols === 4 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
				className
			)}
		>
			{children}
		</div>
	);
}
