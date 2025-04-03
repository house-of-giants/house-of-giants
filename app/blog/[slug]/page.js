import { notFound } from 'next/navigation';

import { getPostBySlug } from '@/lib/blog';
import markdownToHtml from '@/lib/markdownToHtml';

import PostLayout from '@/layouts/PostLayout';
import siteMetadata from '@/data/siteMetadata';
import BlogPostSchema from '@/components/Schema/BlogPostSchema';

export async function generateMetadata({ params }) {
	const post = getPostBySlug(params.slug);
	if (!post) {
		return;
	}

	const publishedAt = new Date(post.date).toISOString();
	const modifiedAt = new Date(post.lastmod || post.date).toISOString();
	let imageList = [siteMetadata.socialBanner];
	if (post.images) {
		imageList = typeof post.images === 'string' ? [post.images] : post.images;
	}
	const ogImages = [
		{
			url: `${siteMetadata.siteUrl}/api/og?title=${encodeURIComponent(post.title)}&image=${encodeURIComponent(
				post.image.startsWith('http') ? post.image : `${siteMetadata.siteUrl}${post.image}`
			)}`,
		},
	];

	return {
		title: `${post.title} | ${siteMetadata.title}`,
		description: post.summary,
		alternates: {
			canonical: `/blog/${params.slug}`,
		},
		openGraph: {
			title: post.title,
			description: post.summary,
			siteName: siteMetadata.title,
			locale: 'en_US',
			type: 'article',
			publishedTime: publishedAt,
			modifiedTime: modifiedAt,
			url: `${siteMetadata.siteUrl}/blog/${params.slug}`,
			images: ogImages,
		},
		twitter: {
			card: 'summary_large_image',
			title: post.title,
			description: post.summary,
			images: ogImages,
		},
	};
}

export default async function Post({ params }) {
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	const content = await markdownToHtml(post.content || '');
	return (
		<>
			<BlogPostSchema post={post} />
			<PostLayout post={post} content={content} />
		</>
	);
}
