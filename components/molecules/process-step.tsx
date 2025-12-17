import * as React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProcessStepProps {
	index: number;
	icon: LucideIcon;
	label: string;
	description: string;
	className?: string;
}

export function ProcessStep({ index, icon: Icon, label, description, className }: ProcessStepProps) {
	return (
		<div className={cn('flex items-start gap-4', className)}>
			<div className="flex items-center gap-4">
				<span className="border-border bg-background font-display text-muted-foreground flex size-10 items-center justify-center border text-sm font-semibold">
					{index + 1}
				</span>
				<Icon className="text-primary size-5" />
			</div>
			<div className="pt-1.5">
				<p className="text-foreground font-medium">{label}</p>
				<p className="text-muted-foreground text-sm">{description}</p>
			</div>
		</div>
	);
}
