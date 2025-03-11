import { getSortedPostsData } from '@/lib/blog';
import ListLayout from 'layouts/ListLayout';
import { Metadata } from 'next';
import siteMetadata from '@/data/siteMetadata';

const POSTS_PER_PAGE = 99;

export const metadata = {
	title: 'The Archives | House of Giants',
	description: 'Explore our collection of arcane knowledge, industry insights, and design philosophy.',
	openGraph: {
		title: 'The Archives | House of Giants',
		description: 'Explore our collection of arcane knowledge, industry insights, and design philosophy.',
		url: `${siteMetadata.siteUrl}/blog`,
		type: 'website',
		images: [
			{
				url: 'https://houseofgiants.com/api/og?title=The%20Archives',
				width: 1200,
				height: 630,
				alt: 'The Archives | House of Giants',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'The Archives | House of Giants',
		description: 'Explore our collection of arcane knowledge, industry insights, and design philosophy.',
		images: ['https://houseofgiants.com/api/og?title=The%20Archives'],
	},
};

export default function Blog() {
	const posts = getSortedPostsData();

	const pageNumber = 1;
	const pagination = {
		currentPage: pageNumber,
		totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
	};

	return <ListLayout posts={posts} pagination={pagination} title="The Archives" />;
}
