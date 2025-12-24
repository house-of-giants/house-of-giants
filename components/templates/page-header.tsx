'use client';

import { cn } from '@/lib/utils';
import { Breadcrumbs, BreadcrumbItem } from '@/components/molecules';
import { GradientText } from '@/components/atoms/gradient-text';
import { GradientOrbs } from '@/components/backgrounds/gradient-orbs';
import { NoiseOverlay } from '@/components/backgrounds/noise-overlay';
import { StatusIndicator } from '@/components/atoms/status-indicator';

interface PageHeaderProps {
	/** Custom breadcrumb items. If not provided, auto-generates from URL */
	breadcrumbs?: BreadcrumbItem[];
	/** Hide breadcrumbs entirely */
	hideBreadcrumbs?: boolean;
	/** Eyebrow text above title */
	eyebrow?: string;
	/** Main page title */
	title: React.ReactNode;
	/** Subtitle or description */
	description?: React.ReactNode;
	/** Actions/buttons below description */
	actions?: React.ReactNode;
	/** Minimum height of header section */
	minHeight?: string;
	/** Show animated background orbs */
	showOrbs?: boolean;
	/** Additional className for container */
	className?: string;
	/** Additional className for content wrapper */
	contentClassName?: string;
}

export function PageHeader({
	breadcrumbs,
	hideBreadcrumbs = false,
	eyebrow,
	title,
	description,
	actions,
	minHeight = 'min-h-[60vh]',
	showOrbs = true,
	className,
	contentClassName,
}: PageHeaderProps) {
	return (
		<section
			className={cn('relative flex items-center justify-center overflow-hidden pt-32 pb-20', minHeight, className)}
		>
			{/* Background */}
			<div className="bg-background absolute inset-0 overflow-visible">
				{showOrbs && <GradientOrbs />}
				<NoiseOverlay />
			</div>

			<div className="container-wide relative z-10">
				{!hideBreadcrumbs && <Breadcrumbs items={breadcrumbs} variant="hero" className="mb-8" />}

				{/* Centered Content */}
				<div className={cn('text-center', contentClassName)}>
					{/* Eyebrow */}
					{eyebrow && (
						<div className="flex justify-center">
							<div className="bg-background/50 border-border mb-6 inline-flex items-center gap-2 border px-3 py-1 backdrop-blur-sm">
								<StatusIndicator />
								<span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">{eyebrow}</span>
							</div>
						</div>
					)}

					{/* Title */}
					<h1 className="heading-display mb-6">{title}</h1>

					{/* Description */}
					{description && <div className="body-large text-muted-foreground mx-auto mb-10 max-w-2xl">{description}</div>}

					{/* Actions */}
					{actions && <div className="flex flex-wrap justify-center gap-4">{actions}</div>}
				</div>
			</div>
		</section>
	);
}

/**
 * Helper to create gradient text in titles
 * Usage: <PageHeader title={<>Regular text <GradientTitle>gradient text</GradientTitle></>} />
 */
export function GradientTitle({ children }: { children: React.ReactNode }) {
	return (
		<>
			<br className="hidden sm:block" />
			<GradientText>{children}</GradientText>
		</>
	);
}
