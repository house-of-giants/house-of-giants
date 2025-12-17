import * as React from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
	className?: string;
	mounted?: boolean;
}

export function ScrollIndicator({ className, mounted = true }: ScrollIndicatorProps) {
	return (
		<div
			className={cn(
				'absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-0',
				mounted && 'animate-[fade-in_1s_ease_forwards]',
				className
			)}
			style={{ animationDelay: '1.2s' }}
		>
			<span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
			<ArrowDown className="text-muted-foreground size-4 animate-bounce" />
		</div>
	);
}
