import * as React from 'react';
import { ArrowUpRight, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
	icon: LucideIcon;
	title: string;
	description: string;
	isActive: boolean;
	onClick: () => void;
}

export function ServiceCard({ icon: Icon, title, description, isActive, onClick }: ServiceCardProps) {
	return (
		<button
			onClick={onClick}
			className={cn(
				'group w-full border p-6 text-left transition-all duration-300',
				isActive ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 bg-background'
			)}
		>
			<div className="flex items-start gap-4">
				<div
					className={cn(
						'flex size-10 items-center justify-center border transition-all duration-300',
						isActive
							? 'border-primary bg-primary text-primary-foreground'
							: 'border-border text-muted-foreground group-hover:border-primary/50'
					)}
				>
					<Icon className="size-5" />
				</div>
				<div className="min-w-0 flex-1">
					<div className="flex items-center justify-between gap-4">
						<h3
							className={cn(
								'font-display text-lg font-semibold transition-colors',
								isActive ? 'text-primary' : 'text-foreground'
							)}
						>
							{title}
						</h3>
						<ArrowUpRight
							className={cn(
								'size-5 shrink-0 transition-all duration-300',
								isActive
									? 'text-primary translate-x-0 opacity-100'
									: 'text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
							)}
						/>
					</div>
					<p className="text-muted-foreground mt-1 text-sm">{description}</p>
				</div>
			</div>
		</button>
	);
}
