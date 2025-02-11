'use client';

import { useEffect, useRef } from 'react';
import { useSection } from '../SectionContext/SectionContext';
import { useInView } from 'react-intersection-observer';

export const Section = ({ count, title, children }) => {
	const { setActiveSection } = useSection();
	const { ref, inView } = useInView({
		threshold: 0.3, // Adjust as needed
	});

	useEffect(() => {
		if (inView) {
			setActiveSection({ count, title });
		}
	}, [inView, count, title, setActiveSection]);

	return (
		<section ref={ref} className="relative">
			{children}
		</section>
	);
};
