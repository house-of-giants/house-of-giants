import * as React from 'react';
import { cn } from '@/lib/utils';
import { StatCard } from './stat-card';

interface StatsRowProps {
	stats: Array<{ value: string; label: string }>;
	className?: string;
}

export function StatsRow({ stats, className }: StatsRowProps) {
	return (
		<div
			className={cn(
				'border-border grid grid-cols-[repeat(auto-fit,minmax(min(100%,140px),1fr))] gap-8 border-t pt-12 md:gap-12',
				className
			)}
		>
			{stats.map((stat) => (
				<StatCard key={stat.label} value={stat.value} label={stat.label} />
			))}
		</div>
	);
}
