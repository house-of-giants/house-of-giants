import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

const CoverImage = ({ title, src, slug }) => {
	const image = (
		<Image
			src={src}
			alt={`Cover Image for ${title}`}
			className={cn('shadow-sm w-full 2xl:w-2/3 max-h-96 mx-auto object-cover', {
				'hover:shadow-lg transition-shadow duration-200': slug,
			})}
			width={1500}
			height={330}
		/>
	);
	return (
		<div className="sm:mx-0">
			{slug ? (
				<Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
					{image}
				</Link>
			) : (
				image
			)}
		</div>
	);
};

export default CoverImage;
