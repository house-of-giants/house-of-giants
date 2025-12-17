import { cn } from '@/lib/utils';

interface NoiseOverlayProps {
	opacity?: number;
	className?: string;
}

export function NoiseOverlay({ opacity = 0.3, className }: NoiseOverlayProps) {
	return <div className={cn('noise absolute inset-0', className)} style={{ opacity }} />;
}
