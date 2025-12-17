import * as React from 'react';
import { cn } from '@/lib/utils';

interface StatusIndicatorProps {
	size?: 'sm' | 'md';
	className?: string;
}

export function StatusIndicator({ size = 'sm', className }: StatusIndicatorProps) {
	const sizeClasses = {
		sm: 'h-2 w-2',
		md: 'h-2.5 w-2.5',
	};

	return (
		<span className={cn('relative flex', sizeClasses[size], className)}>
			<span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
			<span className={cn('bg-primary relative inline-flex rounded-full', sizeClasses[size])}></span>
		</span>
	);
}
