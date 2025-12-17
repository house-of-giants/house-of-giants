import * as React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
	value: string;
	label: string;
	className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
	return (
		<div className={cn('', className)}>
			<p className="font-display text-foreground mb-1 text-3xl font-bold md:text-4xl">{value}</p>
			<p className="text-muted-foreground text-sm">{label}</p>
		</div>
	);
}
