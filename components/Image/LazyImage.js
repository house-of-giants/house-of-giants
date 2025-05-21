'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function LazyImage({ src, alt, width, height, priority = false, className = '', ...props }) {
	const [isAboveFold, setIsAboveFold] = useState(false);

	useEffect(() => {
		const checkIfAboveFold = () => {
			const element = document.getElementById('lazy-image');
			if (element) {
				const rect = element.getBoundingClientRect();
				setIsAboveFold(rect.top < window.innerHeight);
			}
		};

		checkIfAboveFold();
		window.addEventListener('scroll', checkIfAboveFold);
		return () => window.removeEventListener('scroll', checkIfAboveFold);
	}, []);

	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			className={className}
			loading={priority || isAboveFold ? 'eager' : 'lazy'}
			{...props}
		/>
	);
}
