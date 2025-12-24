import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedArrowProps {
	/** Size variant */
	size?: 'sm' | 'md' | 'lg';
	/** Additional className */
	className?: string;
}

const sizeClasses = {
	sm: 'size-3',
	md: 'size-4',
	lg: 'size-5',
};

/**
 * Arrow icon with consistent hover animation
 * Used in CTAs and links throughout the site
 * Requires parent to have `group` class for hover effect
 */
export function AnimatedArrow({ size = 'md', className }: AnimatedArrowProps) {
	return (
		<ArrowUpRight
			className={cn(
				sizeClasses[size],
				'transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
				className
			)}
		/>
	);
}

