import { cn } from '@/lib/utils';

interface GradientOrbsProps {
	className?: string;
}

export function GradientOrbs({ className }: GradientOrbsProps) {
	return (
		<div className={cn('bg-background absolute inset-0 overflow-visible', className)}>
			{/* Animated gradient orbs */}
			<div
				className="bg-primary/20 absolute top-1/4 -left-1/4 h-150 w-150 animate-[glow-pulse_8s_ease-in-out_infinite] rounded-full blur-[120px]"
				style={{ animationDelay: '0s' }}
			/>
			<div
				className="bg-accent/15 absolute -right-1/4 bottom-[10%] h-150 w-150 animate-[glow-pulse_8s_ease-in-out_infinite] rounded-full blur-[100px]"
				style={{ animationDelay: '4s' }}
			/>
			<div className="bg-primary/5 absolute top-1/2 left-1/2 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />
		</div>
	);
}
