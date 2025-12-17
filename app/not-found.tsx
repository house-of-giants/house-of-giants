import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '404: Page Not Found | House of Giants',
	description: "The page you're looking for doesn't exist. Let's get you back on track.",
};

export default function NotFound() {
	return (
		<div className="bg-background text-foreground relative flex min-h-screen flex-col overflow-hidden">
			{/* Subtle background elements */}
			<div className="absolute inset-0 z-0">
				<div className="bg-primary/5 absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full blur-[150px]" />
				<div className="noise absolute inset-0 opacity-30" />
			</div>

			<div className="relative z-10 container mx-auto flex min-h-screen flex-col justify-center px-6 py-24">
				<div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
					{/* Text content */}
					<div className="max-w-xl space-y-8">
						{/* 404 indicator */}
						<div className="flex items-center gap-4">
							<span className="text-primary font-mono text-sm tracking-wider">404</span>
							<span className="bg-border h-px flex-1 max-w-16" />
						</div>

						{/* Headline */}
						<h1 className="heading-1">This page doesn&apos;t exist</h1>

						{/* Description */}
						<p className="text-muted-foreground max-w-md text-lg leading-relaxed">
							The page you&apos;re looking for has moved, been removed, or never existed in
							the first place. No worries—let&apos;s get you somewhere useful.
						</p>

						{/* CTA */}
						<div className="flex flex-wrap items-center gap-4 pt-4">
							<Button href="/" size="cta" className="group">
								<ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
								Go home
							</Button>
							<Button href="/contact" variant="outline" size="cta">
								Get in touch
							</Button>
						</div>
					</div>

					{/* Mascot */}
					<div className="relative shrink-0">
						<div className="relative h-[800px] w-[800px]">
							<Image
								src="/macman.webp"
								alt="Macman mascot"
								fill
								className="object-contain"
								sizes="(max-width: 768px) 800px, (max-width: 1024px) 800px, 800px"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
