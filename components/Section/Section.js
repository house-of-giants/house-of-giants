'use client';

import { useEffect } from 'react';
import { useSection } from '../SectionContext/SectionContext';
import { useInView } from 'react-intersection-observer';

export const Section = ({ count, title, children, id, className }) => {
	try {
		const { setActiveSection } = useSection();
		const { ref, inView } = useInView({
			threshold: 0.3,
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
				className={`relative ${className ? className : ''} z-10`}
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
