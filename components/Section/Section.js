'use client';

import { useEffect, useRef } from 'react';
import { useSection } from '../SectionContext/SectionContext';
import { useInView } from 'react-intersection-observer';

export const Section = ({ count, title, children, id }) => {
	try {
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
			<section
				id={id}
				ref={ref}
				className="relative"
				style={{
					scrollMarginTop: 'calc( var(--header-height) + 32px)', // 32px is the section bar height
				}}
			>
				{children}
			</section>
		);
	} catch (error) {
		// Fallback if context is not available
		return <section className="relative">{children}</section>;
	}
};
