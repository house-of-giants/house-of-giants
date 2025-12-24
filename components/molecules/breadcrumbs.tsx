'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
	label: string;
	href: string;
}

type BreadcrumbVariant = 'default' | 'hero' | 'overlay';
type BreadcrumbAlign = 'left' | 'center' | 'right';

interface BreadcrumbsProps {
	items?: BreadcrumbItem[];
	className?: string;
	/** Visual variant: 'default' (minimal), 'hero' (centered with container), 'overlay' (for hero images) */
	variant?: BreadcrumbVariant;
	/** Text alignment */
	align?: BreadcrumbAlign;
}

// Keyword-rich breadcrumb labels for SEO
const BREADCRUMB_LABELS: Record<string, string> = {
	'/': 'Home',
	'/work': 'Our Work',
	'/services': 'Web Development Services',
	'/dedicated-teams': 'Dedicated Development Teams',
	'/pricing': 'Pricing & Plans',
	'/about': 'About Our Studio',
	'/blog': 'Development Blog',
	'/contact': 'Contact',
	'/partnerships': 'Partnership Programs',
	'/partnerships/white-label': 'White-Label Development',
	'/for-startups': 'Startup Development Services',
};

/**
 * Generate breadcrumb items from pathname
 */
function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
	// Always start with home
	const items: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

	// Split path and build breadcrumbs
	const segments = pathname.split('/').filter(Boolean);
	let currentPath = '';

	segments.forEach((segment, index) => {
		currentPath += `/${segment}`;

		// Use predefined label or format the segment
		const label = BREADCRUMB_LABELS[currentPath] || formatSegment(segment);

		items.push({
			label,
			href: currentPath,
		});
	});

	return items;
}

/**
 * Format URL segment into readable label
 */
function formatSegment(segment: string): string {
	return segment
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

/**
 * Generate BreadcrumbList JSON-LD schema
 */
function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.label,
			item: `https://houseofgiants.com${item.href}`,
		})),
	};
}

export function Breadcrumbs({ items: customItems, className, variant = 'default', align = 'left' }: BreadcrumbsProps) {
	const pathname = usePathname();

	// Use custom items if provided, otherwise generate from pathname
	const items = customItems || generateBreadcrumbs(pathname);

	// Don't show breadcrumbs on homepage or if only one item
	if (pathname === '/' || items.length <= 1) {
		return null;
	}

	const schema = generateBreadcrumbSchema(items);

	// Determine alignment class
	const alignClass = {
		left: 'justify-start',
		center: 'justify-center',
		right: 'justify-end',
	}[align];

	const linkClass =
		variant === 'overlay'
			? 'text-white/50 hover:text-white/75 transition-colors duration-200'
			: 'text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors duration-200';

	const currentClass = variant === 'overlay' ? 'text-white/65' : 'text-muted-foreground/70';

	const separatorClass = variant === 'overlay' ? 'text-white/25' : 'text-muted-foreground/30';

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

			<nav aria-label="Breadcrumb" className={cn('flex', alignClass, className)}>
				<ol className="flex flex-wrap items-center gap-1.5 text-xs tracking-wide">
					{items.map((item, index) => {
						const isLast = index === items.length - 1;

						return (
							<li key={item.href} className="flex items-center gap-1.5">
								{index > 0 && <ChevronRight className={cn('size-3 shrink-0', separatorClass)} aria-hidden="true" />}

								{isLast ? (
									<span className={currentClass} aria-current="page">
										{item.label}
									</span>
								) : (
									<Link href={item.href} className={linkClass}>
										{item.label}
									</Link>
								)}
							</li>
						);
					})}
				</ol>
			</nav>
		</>
	);
}

/**
 * Hook to get breadcrumb items for a page
 */
export function useBreadcrumbs(customItems?: BreadcrumbItem[]): BreadcrumbItem[] {
	const pathname = usePathname();
	return customItems || generateBreadcrumbs(pathname);
}
