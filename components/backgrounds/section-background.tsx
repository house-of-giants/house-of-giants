import { cn } from '@/lib/utils';
import { NoiseOverlay } from './noise-overlay';

interface SectionBackgroundProps {
	/** Background variant */
	variant?: 'default' | 'glow' | 'subtle';
	/** Position of the glow effect */
	glowPosition?: 'top' | 'center';
	/** Additional className */
	className?: string;
}

/**
 * Standardized section background with decorative elements
 * Replaces duplicated background patterns across the site
 */
export function SectionBackground({
	variant = 'default',
	glowPosition = 'top',
	className,
}: SectionBackgroundProps) {
	return (
		<div className={cn('pointer-events-none absolute inset-0 -z-10', className)}>
			{/* Base overlay */}
			<div className="bg-muted/10 absolute inset-0" />

			{/* Gradient glow (default and glow variants) */}
			{variant !== 'subtle' && <div className="gradient-section-glow absolute inset-0" />}

			{/* Noise texture */}
			<NoiseOverlay opacity={0.2} className="mix-blend-overlay" />

			{/* Primary glow orb (glow variant only) */}
			{variant === 'glow' && (
				<div
					className={cn(
						'bg-primary/10 absolute left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full blur-[100px]',
						glowPosition === 'top' && 'top-0 -translate-y-1/2',
						glowPosition === 'center' && 'top-1/2 -translate-y-1/2'
					)}
				/>
			)}
		</div>
	);
}

