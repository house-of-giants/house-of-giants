'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	"focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-none border border-transparent bg-clip-padding text-xs font-medium focus-visible:ring-1 aria-invalid:ring-1 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/80',
				outline:
					'border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
				ghost:
					'hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground',
				destructive:
					'bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
				xs: "h-6 gap-1 rounded-none px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
				sm: "h-7 gap-1 rounded-none px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
				lg: 'h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3',
				// CTA sizes for prominent actions
				cta: 'h-auto gap-2 px-8 py-4 text-base',
				icon: 'size-8',
				'icon-xs': "size-6 rounded-none [&_svg:not([class*='size-'])]:size-3",
				'icon-sm': 'size-7 rounded-none',
				'icon-lg': 'size-9',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

type ButtonProps = VariantProps<typeof buttonVariants> &
	ButtonPrimitive.Props & {
		/** Render as a Next.js Link when href is provided */
		href?: string;
	};

/**
 * Button component following Base UI composition patterns.
 *
 * Usage:
 * - Standard button: <Button onClick={...}>Click</Button>
 * - Link button: <Button href="/path">Navigate</Button>
 * - Custom composition: <Button render={<CustomComponent />}>Content</Button>
 *
 * @see https://base-ui.com/react/handbook/composition
 */
function Button({ className, variant, size, href, render, children, ...props }: ButtonProps) {
	const classes = cn(buttonVariants({ variant, size, className }));

	// If custom render prop is provided, use it directly (for advanced composition)
	if (render) {
		return (
			<ButtonPrimitive data-slot="button" className={classes} render={render} {...props}>
				{children}
			</ButtonPrimitive>
		);
	}

	// If href is provided, render as Link (nativeButton=false since Link renders as <a>)
	if (href) {
		return (
			<ButtonPrimitive
				data-slot="button"
				className={classes}
				render={<Link href={href} />}
				nativeButton={false}
				{...props}
			>
				{children}
			</ButtonPrimitive>
		);
	}

	// Standard button
	return (
		<ButtonPrimitive data-slot="button" className={classes} {...props}>
			{children}
		</ButtonPrimitive>
	);
}

export { Button, buttonVariants };
export type { ButtonProps };
