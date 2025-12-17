import * as React from 'react';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
	quote: string;
	author: string;
	title: string;
	company: string;
	isActive?: boolean;
}

export function TestimonialCard({ quote, author, title, company, isActive = false }: TestimonialCardProps) {
	return (
		<div
			className={cn(
				'cubic-bezier(0.16, 1, 0.3, 1) absolute inset-0 flex flex-col items-center justify-center transition-all duration-700',
				isActive ? 'z-10 translate-y-0 scale-100 opacity-100 blur-none' : 'z-0 translate-y-4 scale-95 opacity-0 blur-sm'
			)}
		>
			<div className="mb-6 md:mb-8">
				<div className="bg-primary/10 border-primary/20 flex size-12 items-center justify-center border backdrop-blur-sm">
					<Quote className="text-primary size-5" />
				</div>
			</div>

			<blockquote className="heading-3 md:heading-2 mb-8 max-w-4xl text-center text-balance md:mb-10">
				<span className="text-muted-foreground opacity-30">&ldquo;</span>
				<span className="text-foreground">{quote}</span>
				<span className="text-muted-foreground opacity-30">&rdquo;</span>
			</blockquote>

			<div className="border-gradient group relative flex items-center gap-4 border border-white/5 bg-black/40 p-1 pr-6 backdrop-blur-md transition-all hover:bg-white/5">
				<div className="flex size-10 items-center justify-center bg-white/5 text-sm font-bold tracking-wider text-white">
					{author
						.split(' ')
						.map((n) => n[0])
						.join('')}
				</div>

				<div className="flex flex-col text-left">
					<span className="text-sm font-bold tracking-wide text-white uppercase">{author}</span>
					<span className="text-muted-foreground text-xs tracking-wide uppercase">
						{title} <span className="text-primary/50">/</span> <span className="text-accent">{company}</span>
					</span>
				</div>
			</div>
		</div>
	);
}
