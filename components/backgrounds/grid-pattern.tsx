import { cn } from '@/lib/utils';

interface GridPatternProps {
	className?: string;
}

export function GridPattern({ className }: GridPatternProps) {
	return (
		<div
			className={cn(
				'grid-pattern absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-30',
				className
			)}
		/>
	);
}
