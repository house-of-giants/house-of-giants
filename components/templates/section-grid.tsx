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
				cols === 2 && 'grid-cols-[repeat(auto-fit,minmax(min(100%,350px),1fr))]',
				cols === 3 && 'grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))]',
				cols === 4 && 'grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))]',
				className
			)}
		>
			{children}
		</div>
	);
}
