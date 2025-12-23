import { cn } from '@/lib/utils';
import * as React from 'react';
import { GradientText } from '@/components/atoms';

interface SectionHeaderProps {
	eyebrow?: string;
	title: React.ReactNode;
	subtitle?: React.ReactNode;
	description?: React.ReactNode;
	align?: 'left' | 'center';
	className?: string;
}

export function SectionHeader({ eyebrow, title, subtitle, description, align = 'left', className }: SectionHeaderProps) {
	return (
		<div className={cn('mb-12 md:mb-16 lg:mb-20', align === 'center' && 'mx-auto max-w-3xl text-center', className)}>
			{eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
			<h2 className="heading-2 mb-4">{title} {subtitle && <GradientText className="block">{subtitle}</GradientText>}</h2>
			{description && (
				<div className={cn('body-large text-muted-foreground max-w-2xl', align === 'center' && 'mx-auto')}>
					{description}
				</div>
			)}
		</div>
	);
}
