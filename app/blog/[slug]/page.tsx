import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { posts } from '#site/content';
import PostContent from './post-content';

interface PageProps {
	params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
	return posts
		.filter((post) => post.published)
		.map((post) => ({
			slug: post.slug,
		}));
}

function getPostBySlug(slug: string) {
	return posts.find((post) => post.slug === slug && post.published);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		return {
			title: 'Post Not Found',
		};
	}

	const title = `${post.title} | House of Giants`;

	return {
		title,
		description: post.excerpt,
		keywords: post.tags,
		authors: [{ name: post.author.name }],
		openGraph: {
			title: post.title,
			description: post.excerpt,
			url: `https://houseofgiants.com${post.permalink}`,
			type: 'article',
			publishedTime: post.date,
			authors: [post.author.name],
			images: post.image
				? [
						{
							url: post.image,
							width: 1200,
							height: 630,
							alt: post.title,
						},
					]
				: undefined,
		},
		twitter: {
			card: 'summary_large_image',
			title: post.title,
			description: post.excerpt,
			images: post.image ? [post.image] : undefined,
		},
		alternates: {
			canonical: post.permalink,
		},
	};
}

function generateJsonLd(post: NonNullable<ReturnType<typeof getPostBySlug>>) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.excerpt,
		image: post.image,
		datePublished: post.date,
		author: {
			'@type': 'Person',
			name: post.author.name,
		},
		publisher: {
			'@type': 'Organization',
			name: 'House of Giants',
			url: 'https://houseofgiants.com',
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `https://houseofgiants.com${post.permalink}`,
		},
		wordCount: post.metadata.wordCount,
		timeRequired: `PT${post.metadata.readingTime}M`,
	};
}

function getShareUrl(permalink: string): string {
	// Use environment variable if available, otherwise use production URL
	// Share links work fine with the production URL even when accessed locally
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://houseofgiants.com';
	return `${baseUrl}${permalink}`;
}

export default async function BlogPostPage({ params }: PageProps) {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		notFound();
	}

	const jsonLd = generateJsonLd(post);
	const shareUrl = getShareUrl(post.permalink);

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<PostContent post={post} shareUrl={shareUrl} />
		</>
	);
}
