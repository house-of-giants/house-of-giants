import { useState, useEffect } from 'react';
import LazyImage from '@/components/Image/LazyImage';
import { getGifPlaceholder } from '@/utils/imageUtils';

export default function BlurGifImage({ src, alt, className = '', blurDataURL, priority = false, ...props }) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [hasError, setHasError] = useState(false);

	// If no explicit blurDataURL is provided, get one based on the GIF name
	const placeholderUrl = blurDataURL || getGifPlaceholder(src);

	useEffect(() => {
		// Check if element is in viewport on mount
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		const element = document.getElementById(`blur-gif-${src.replace(/\W/g, '')}`);
		if (element) observer.observe(element);

		return () => observer.disconnect();
	}, [src]);

	// Generate a safe ID from the source URL
	const safeId = `blur-gif-${src.replace(/\W/g, '')}`;

	return (
		<div id={safeId} className={`relative overflow-hidden ${className}`}>
			{/* Loading state with visible blur effect */}
			{!isLoaded && !hasError && (
				<div
					className="absolute inset-0 animate-pulse"
					style={{
						backgroundColor: '#303540',
						backgroundImage: `url(${placeholderUrl})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						filter: 'blur(20px)',
					}}
				/>
			)}
			<LazyImage
				src={src}
				alt={alt}
				fill
				className={`object-contain transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
				loading={priority || isVisible ? 'eager' : 'lazy'}
				placeholder="blur"
				blurDataURL={placeholderUrl}
				onLoad={() => setIsLoaded(true)}
				onError={() => setHasError(true)}
				sizes="(max-width: 768px) 100vw, 50vw"
				{...props}
			/>

			{/* Show a fallback if image fails to load */}
			{hasError && (
				<div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white text-sm">
					<span>Image unavailable</span>
				</div>
			)}
		</div>
	);
}
