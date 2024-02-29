import Link from 'next/link';
import Avatar from './Avatar';
import CoverImage from './CoverImage';

export function PostHeader({ title, coverImage, date, author }) {
	return (
		<>
			<header className="grid lg:grid-cols-[2fr_3fr] gap-y-8 md:gap-x-12 mb-12">
				<div className="contianer max-w-[1440px] col-span-full mx-auto px-4 w-full">
					<Link href="/blog" className="block mb-6 italic ">
						&larr; All posts
					</Link>
				</div>
				<div className="sm:mx-0">
					<CoverImage title={title} src={coverImage} />
				</div>
				<div className="container max-w-7xl lg:min-h-[400px] px-4 lg:px-0 lg:pr-8 flex flex-col justify-between gap-y-8">
					{author && <Avatar name={author?.name} picture={author?.picture} date={date} />}
					<h1 className="text-3xl md:text-5xl lg:text-8xl font-black tracking-tighter leading-tight md:leading-none mt-0 mb-4 text-center md:text-left">
						{title}
					</h1>
				</div>
			</header>
		</>
	);
}
