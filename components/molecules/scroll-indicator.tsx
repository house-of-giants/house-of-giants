import * as React from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
	className?: string;
}

export function ScrollIndicator({ className }: ScrollIndicatorProps) {
	return (
		<div className={cn('absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2', className)}>
			<span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
			<ArrowDown className="text-muted-foreground size-4 animate-bounce" />
		</div>
	);
}
