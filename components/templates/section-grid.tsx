import { cn } from '@/lib/utils';
import * as React from 'react';

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
