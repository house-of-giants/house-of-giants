import * as React from 'react';
import { cn } from '@/lib/utils';
import { StatusIndicator } from '@/components/atoms/status-indicator';

interface AvailabilityBadgeProps {
	slots: number;
	period: string;
	className?: string;
}

export function AvailabilityBadge({ slots, period, className }: AvailabilityBadgeProps) {
	return (
		<div className={cn('border-border mt-8 border-t pt-6', className)}>
			<div className="flex items-center gap-3">
				<StatusIndicator size="md" />
				<span className="text-sm">
					<span className="text-foreground font-medium">{slots} slots available</span>
					<span className="text-muted-foreground"> for {period}</span>
				</span>
			</div>
		</div>
	);
}
