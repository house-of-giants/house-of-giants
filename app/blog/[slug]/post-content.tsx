'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin, Link as LinkIcon, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Header, Footer } from '@/components/organisms';
import { Section } from '@/components/templates';
import { GradientOrbs } from '@/components/backgrounds/gradient-orbs';
import { NoiseOverlay } from '@/components/backgrounds/noise-overlay';
import { GradientText } from '@/components/atoms/gradient-text';
import { Eyebrow } from '@/components/atoms/eyebrow';
import type { Post } from '#site/content';

interface PostContentProps {
	post: Post;
	shareUrl: string;
}

function formatDate(dateString: string): string {
	return new Date(dateString).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}

/**
 * Reading Progress Indicator component
 */
function ReadingProgress() {
	const [completion, setCompletion] = React.useState(0);

	React.useEffect(() => {
		const updateScrollCompletion = () => {
			const currentProgress = window.scrollY;
			const scrollHeight = document.body.scrollHeight - window.innerHeight;
			if (scrollHeight) {
				setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
			}
		};

		window.addEventListener('scroll', updateScrollCompletion);
		return () => window.removeEventListener('scroll', updateScrollCompletion);
	}, []);

	return (
		<div className="bg-border/20 fixed top-0 z-50 h-1 w-full backdrop-blur-sm">
			<div className="bg-primary h-full transition-all duration-150 ease-out" style={{ width: `${completion}%` }} />
		</div>
	);
}

export default function PostContent({ post, shareUrl }: PostContentProps) {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	const copyToClipboard = () => {
		if (typeof window !== 'undefined') {
			navigator.clipboard.writeText(shareUrl);
			// Optional: add a toast or feedback here
		}
	};

	return (
		<>
			<Header />
			{mounted && <ReadingProgress />}
			<main className="relative">
				{/* Premium Hero Section */}
				<Section
					padding="none"
					container="none"
					className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden pt-32 pb-20"
				>
					{/* Animated Background */}
					<div className="bg-background absolute inset-0 overflow-visible">
						<GradientOrbs />
						<NoiseOverlay />
						<div className="via-background/50 to-background absolute inset-0 bg-linear-to-b from-transparent" />
					</div>

					<div className="relative z-10 container max-w-5xl">
						{/* Back Button & Breadcrumb */}
						<div
							className={cn(
								'mb-12 flex items-center gap-4 opacity-0 transition-all duration-500',
								mounted && 'animate-slide-up'
							)}
							style={{ animationDelay: '0.1s' }}
						>
							<Link
								href="/blog"
								className="group bg-background/50 border-border hover:border-primary/50 flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-sm transition-all hover:pl-3"
							>
								<ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
								<span className="text-muted-foreground group-hover:text-foreground font-medium">Back to Insights</span>
							</Link>
							<div className="text-muted-foreground/30 flex items-center gap-2 text-xs font-medium tracking-widest uppercase">
								<ChevronRight className="size-3" />
								<span>Blog Post</span>
							</div>
						</div>

						{/* Title Section */}
						<div className="text-center md:text-left">
							{post.tags && post.tags.length > 0 && (
								<div
									className={cn(
										'mb-6 flex flex-wrap justify-center gap-2 opacity-0 md:justify-start',
										mounted && 'animate-slide-up'
									)}
									style={{ animationDelay: '0.15s' }}
								>
									{post.tags.map((tag) => (
										<span
											key={tag}
											className="bg-primary/10 text-primary border-primary/20 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase"
										>
											{tag}
										</span>
									))}
								</div>
							)}

							<h1
								className={cn(
									'heading-1 mb-8 max-w-4xl text-balance opacity-0 md:mb-10',
									mounted && 'animate-slide-up'
								)}
								style={{ animationDelay: '0.2s' }}
							>
								<GradientText as="span">{post.title}</GradientText>
							</h1>

							{/* Post Meta */}
							<div
								className={cn(
									'border-border/50 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-0 md:justify-start',
									mounted && 'animate-slide-up'
								)}
								style={{ animationDelay: '0.3s' }}
							>
								<div className="flex items-center gap-3">
									<div className="border-primary/20 relative size-10 overflow-hidden rounded-full border-2">
										<Image src={post.author.picture} alt={post.author.name} fill className="object-cover" />
									</div>
									<div className="flex flex-col text-left">
										<span className="text-foreground text-sm font-semibold">{post.author.name}</span>
										<span className="text-muted-foreground text-xs">Author</span>
									</div>
								</div>

								<div className="bg-border/50 hidden h-8 w-px sm:block" />

								<div className="flex items-center gap-6">
									<div className="text-muted-foreground flex items-center gap-2 text-sm">
										<Calendar className="text-primary size-4" />
										<time className="font-medium">{formatDate(post.date)}</time>
									</div>

									<div className="text-muted-foreground flex items-center gap-2 text-sm">
										<Clock className="text-primary size-4" />
										<span className="font-medium">{post.metadata.readingTime} min read</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Section>

				{/* Featured Image Section */}
				{post.image && (
					<Section padding="none" className="relative -mt-10 pb-20">
						<div className="container-wide max-w-6xl">
							<div
								className={cn(
									'border-border group relative aspect-video overflow-hidden rounded-3xl border opacity-0 shadow-2xl transition-all duration-700',
									mounted && 'animate-slide-up'
								)}
								style={{ animationDelay: '0.4s' }}
							>
								<Image
									src={post.image}
									alt={post.title}
									fill
									className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
									priority
								/>
								<div className="from-background/40 absolute inset-0 bg-linear-to-t to-transparent" />
							</div>
						</div>
					</Section>
				)}

				{/* Article Content Section */}
				<Section padding="none" className="pb-32">
					<div className="relative container grid grid-cols-1 gap-12 lg:grid-cols-12">
						{/* Side Actions (Desktop) */}
						<aside className="sticky top-32 hidden h-fit flex-col gap-6 lg:col-span-1 lg:flex">
							<button
								onClick={copyToClipboard}
								className="bg-card hover:bg-muted border-border hover:border-primary/50 flex size-12 items-center justify-center rounded-xl border transition-all"
								title="Copy Link"
							>
								<LinkIcon className="size-5" />
							</button>
							<a
								href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-card hover:bg-muted border-border hover:border-primary/50 flex size-12 items-center justify-center rounded-xl border transition-all"
								title="Share on Twitter"
							>
								<Twitter className="size-5" />
							</a>
							<a
								href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-card hover:bg-muted border-border hover:border-primary/50 flex size-12 items-center justify-center rounded-xl border transition-all"
								title="Share on LinkedIn"
							>
								<Linkedin className="size-5" />
							</a>
						</aside>

						<div className="lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
							<article
								className={cn(
									'prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:mt-16 prose-headings:mb-6 first:prose-headings:mt-0 prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-a:text-primary prose-a:font-medium prose-a:no-underline prose-a:hover:underline prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:my-10 prose-blockquote:py-3 prose-blockquote:pl-6 prose-blockquote:pr-6 prose-blockquote:italic prose-code:text-primary prose-code:before:content-none prose-code:after:content-none prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border prose-pre:my-8 prose-pre:p-6 prose-pre:overflow-x-auto prose-img:rounded-2xl prose-img:my-10 prose-hr:border-border prose-hr:my-12 prose-li:text-muted-foreground prose-li:mb-2 prose-ol:mb-6 prose-ol:text-muted-foreground prose-ul:mb-6 prose-ul:text-muted-foreground prose-strong:text-foreground prose-strong:font-semibold max-w-[65ch] opacity-0',
									mounted && 'animate-slide-up'
								)}
								style={{ animationDelay: '0.5s' }}
								dangerouslySetInnerHTML={{ __html: post.content }}
							/>

							{/* Post Footer / Author Bio */}
							<div
								className={cn(
									'border-border bg-card mt-24 overflow-hidden rounded-3xl border p-8 opacity-0 md:p-12',
									mounted && 'animate-slide-up'
								)}
								style={{ animationDelay: '0.6s' }}
							>
								<div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
									<div className="border-primary/20 relative size-48 shrink-0 overflow-hidden rounded-2xl border-2">
										<Image
											src={post.author.picture}
											alt={post.author.name}
											fill
											className="object-cover"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									</div>
									<div className="flex-1">
										<Eyebrow className="text-primary mb-2">Written By</Eyebrow>
										<h3 className="heading-3 mb-4">{post.author.name}</h3>
										<p className="text-muted-foreground mb-6 max-w-xl text-sm leading-relaxed">
											Building high-performance web applications and sharing insights on the craft of software
											development.
										</p>
										<div className="flex items-center gap-4">
											<Link
												href="/blog"
												className="text-primary hover:text-primary/80 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
											>
												View all posts <ChevronRight className="size-4" />
											</Link>
										</div>
									</div>
								</div>
							</div>

							{/* Share Section (Mobile) */}
							<div className="border-border mt-12 flex flex-col items-center justify-center gap-6 border-t pt-12 lg:hidden">
								<span className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
									Share this post
								</span>
								<div className="flex gap-4">
									<button
										onClick={copyToClipboard}
										className="bg-card hover:bg-muted border-border flex size-12 items-center justify-center rounded-xl border transition-all"
									>
										<LinkIcon className="size-5" />
									</button>
									<a
										href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
										target="_blank"
										rel="noopener noreferrer"
										className="bg-card hover:bg-muted border-border flex size-12 items-center justify-center rounded-xl border transition-all"
									>
										<Twitter className="size-5" />
									</a>
									<a
										href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
										target="_blank"
										rel="noopener noreferrer"
										className="bg-card hover:bg-muted border-border flex size-12 items-center justify-center rounded-xl border transition-all"
									>
										<Linkedin className="size-5" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</Section>
			</main>
			<Footer />
		</>
	);
}
