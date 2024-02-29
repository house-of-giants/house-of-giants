import { PostBody } from '@/components/Blog/PostBody';
import { PostFooter } from '@/components/Blog/PostFooter';
import { PostHeader } from '@/components/Blog/PostHeader';

export default function PostLayout({ post, content }) {
	return (
		<main>
			<article>
				<PostHeader title={post.title} coverImage={post.image} date={post.date} author={post.author} />
				<PostBody content={content} />
				<PostFooter />
			</article>
		</main>
	);
}
