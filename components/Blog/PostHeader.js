import Link from 'next/link';
import Avatar from './Avatar';
import CoverImage from './CoverImage';

export function PostHeader({ title, coverImage, date, author }) {
	return (
		<header>
			<div className="mb-8 md:mb-6 sm:mx-0">
				<CoverImage title={title} src={coverImage} />
			</div>
			<div className="container max-w-7xl mx-auto px-4">
				<Link href="/blog" className="block mb-6 italic">
					&larr; All posts
				</Link>
				<h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-tight md:leading-none mt-0 mb-4 text-center md:text-left">
					{title}
				</h1>
				{author && <Avatar name={author?.name} picture={author?.picture} date={date} />}
			</div>
		</header>
	);
}
