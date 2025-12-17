import { cn } from '@/lib/utils';
import * as React from 'react';

interface SectionHeaderProps {
	eyebrow?: string;
	title: React.ReactNode;
	description?: string;
	align?: 'left' | 'center';
	className?: string;
}

export function SectionHeader({ eyebrow, title, description, align = 'left', className }: SectionHeaderProps) {
	return (
		<div className={cn('mb-12 md:mb-16 lg:mb-20', align === 'center' && 'mx-auto max-w-3xl text-center', className)}>
			{eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
			<h2 className="heading-2 mb-4">{title}</h2>
			{description && <p className="body-large text-muted-foreground max-w-2xl">{description}</p>}
		</div>
	);
}
