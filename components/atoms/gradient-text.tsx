import * as React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
	children: React.ReactNode;
	as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'div';
	className?: string;
}

export function GradientText({ children, as: Component = 'span', className }: GradientTextProps) {
	return <Component className={cn('text-gradient', className)}>{children}</Component>;
}
