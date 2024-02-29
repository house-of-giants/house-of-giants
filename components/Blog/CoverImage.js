import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

const CoverImage = ({ title, src, slug }) => {
	const image = (
		<Image
			src={src}
			alt={`Cover Image for ${title}`}
			className={cn('shadow-sm 2xl:w-2/3 mx-auto object-cover lg:rounded-r-2xl', {
				'hover:shadow-lg transition-shadow duration-200': slug,
			})}
			fill
		/>
	);
	return (
		<div className="sm:mx-0 min-h-96 relative w-full h-full">
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
