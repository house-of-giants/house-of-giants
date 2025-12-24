'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Section } from '@/components/templates';
import { Breadcrumbs } from '@/components/molecules';
import { GradientText } from '@/components/atoms/gradient-text';
import { GradientOrbs } from '@/components/backgrounds/gradient-orbs';
import { NoiseOverlay } from '@/components/backgrounds/noise-overlay';
import { StatusIndicator } from '@/components/atoms/status-indicator';
import { posts } from '#site/content';

function formatDate(dateString: string): string {
	return new Date(dateString).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}

const sortedPosts = posts
	.filter((post) => post.published)
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function BlogContent() {
	return (
		<main>
			<Section
				padding="none"
				container="none"
				className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-32 pb-20"
			>
				<div className="bg-background absolute inset-0 overflow-visible">
					<GradientOrbs />
					<NoiseOverlay />
				</div>

				<div className="container-wide relative z-10 text-center">
					<Breadcrumbs variant="hero" className="mb-8" />

					<div className="flex justify-center">
						<div className="bg-background/50 border-border mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 backdrop-blur-sm">
							<StatusIndicator />
							<span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
								Insights & Articles
							</span>
						</div>
					</div>

					<h1 className="heading-display mb-6">
						Thoughts on building
						<br />
						<GradientText>for the web.</GradientText>
					</h1>

					<p className="body-large text-muted-foreground mx-auto mb-10 max-w-2xl">
						Practical insights on development, design, and scaling products.
					</p>
				</div>
			</Section>

			<Section className="min-h-screen">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{sortedPosts.map((post) => (
						<Link key={post.slug} href={post.permalink} className="group block">
							<article className="bg-background border-border hover:border-primary/50 group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-2xl">
								{post.image && (
									<div className="bg-muted relative aspect-video w-full overflow-hidden">
										<Image
											src={post.image}
											alt={post.title}
											fill
											className="object-cover transition-transform duration-700 group-hover:scale-105"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
										<div className="from-background/60 absolute inset-0 bg-linear-to-t via-transparent to-transparent" />
									</div>
								)}

								<div className="flex flex-1 flex-col p-6">
									<div className="mb-4 flex items-center gap-3">
										<time className="text-muted-foreground text-sm">{formatDate(post.date)}</time>
										<span className="text-muted-foreground/50">·</span>
										<span className="text-muted-foreground flex items-center gap-1 text-sm">
											<Clock className="size-3.5" />
											{post.metadata.readingTime} min read
										</span>
									</div>

									<div className="mb-4 flex items-start justify-between gap-4">
										<h2 className="heading-4 group-hover:text-primary line-clamp-2 transition-colors">{post.title}</h2>
										<ArrowUpRight className="text-muted-foreground group-hover:text-primary size-5 shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
									</div>

									<p className="text-muted-foreground line-clamp-3 flex-1 text-sm leading-relaxed">{post.excerpt}</p>

									<div className="border-border mt-6 flex items-center gap-3 border-t pt-4">
										<Image
											src={post.author.picture}
											alt={post.author.name}
											width={32}
											height={32}
											className="rounded-full"
										/>
										<span className="text-foreground text-sm font-medium">{post.author.name}</span>
									</div>
								</div>

								<div className="border-primary pointer-events-none absolute inset-0 rounded-2xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
							</article>
						</Link>
					))}
				</div>
			</Section>
		</main>
	);
}
