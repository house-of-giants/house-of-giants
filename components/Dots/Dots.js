'use client';

import LazyImage from '@/components/Image/LazyImage';

export const Dots = ({ children, opacity }) => (
	<div className="p-[var(--sp-l)] relative [&>span]:overflow-visible [&>span]:pointer-events-none [&>h3]:mt-0 [&>h3]:relative [&>h3]:z-[1] [&>p]:relative [&>p]:z-[1]">
		<LazyImage
			className="dots !relative !h-[110%] !-left-[5%] !max-w-none pointer-events-none !-top-[5%] !w-[110%] z-0"
			alt=""
			src="/images/dots.png"
			fill
			sizes="100vw"
			style={{
				objectFit: 'cover',
				opacity: opacity,
			}}
		/>
		{children}
	</div>
);
