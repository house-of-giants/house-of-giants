import { getSortedPostsData } from '@/lib/blog';
import ListLayout from 'layouts/ListLayout';

const POSTS_PER_PAGE = 5;

export default function Blog() {
	const posts = getSortedPostsData();

	const pageNumber = 1;
	const pagination = {
		currentPage: pageNumber,
		totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
	};

	return <ListLayout posts={posts} pagination={pagination} title="All Posts" />;
}
