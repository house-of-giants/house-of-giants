'use client';

import { useState, useEffect } from 'react';

export const useElementHeight = (ref) => {
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (!ref.current) return;

		const element = ref.current;
		setHeight(element.offsetHeight);

		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				setHeight(entry.target.offsetHeight);
			}
		});

		resizeObserver.observe(element);
		return () => resizeObserver.disconnect();
	}, [ref]);

	return height;
};
