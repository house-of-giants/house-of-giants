'use client';

import classNames from 'classnames';

export const Grid = ({ children, cols, gap, justify, align, pt, pb, onClick, className }) => (
	<div
		className={classNames(
			'grid relative',
			'[&:not(:first-child)]:pt-0 md:[&:not(:first-child)]:pt-[var(--grid-pt)]',
			'[&_.logo]:flex [&_.logo]:items-center [&_.logo]:justify-center',
			'md:grid-cols-[var(--grid-cols)]',
			className
		)}
		style={{
			'--grid-cols': cols || 'none',
			'--grid-pt': pt || 0,
			alignItems: align || 'center',
			gap: gap,
			justifyContent: justify,
			paddingTop: pt || 0,
			paddingBottom: pb || 0,
		}}
		onClick={onClick}
	>
		{children}
	</div>
);
