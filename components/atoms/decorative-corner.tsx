import * as React from 'react';
import { cn } from '@/lib/utils';

interface DecorativeCornerProps {
	position: 'top-left' | 'bottom-right';
	className?: string;
}

export function DecorativeCorner({ position, className }: DecorativeCornerProps) {
	return (
		<div
			className={cn(
				'absolute h-8 w-8',
				position === 'top-left' && 'border-primary -top-px -left-px border-t-2 border-l-2',
				position === 'bottom-right' && 'border-accent -right-px -bottom-px border-r-2 border-b-2',
				className
			)}
		/>
	);
}
