import * as React from 'react';
import { cn } from '@/lib/utils';
import { StatCard } from './stat-card';

interface StatsRowProps {
	stats: Array<{ value: string; label: string }>;
	className?: string;
	mounted?: boolean;
}

export function StatsRow({ stats, className, mounted = true }: StatsRowProps) {
	return (
		<div
			className={cn(
				'border-border grid grid-cols-2 gap-8 border-t pt-12 opacity-0 md:grid-cols-4 md:gap-12',
				mounted && 'animate-slide-up',
				className
			)}
			style={{ animationDelay: '0.65s' }}
		>
			{stats.map((stat) => (
				<StatCard key={stat.label} value={stat.value} label={stat.label} />
			))}
		</div>
	);
}
