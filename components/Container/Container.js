'use client';

import React from 'react';
import classNames from 'classnames';

export const Container = React.forwardRef(
	({ children, className, fullWidth, onMouseEnter, onMouseLeave, background, pt, pb, stick, ...rest }, ref) => (
		<div
			className={classNames(
				'overflow-hidden z-0',
				stick ? 'sticky top-[var(--sp-m)]' : 'relative',
				background && 'text-white',
				className
			)}
			style={{
				paddingTop: pt,
				paddingBottom: pb || 'var(--sp-2xl)',
			}}
			{...rest}
		>
			<div
				className={classNames('wrap', fullWidth && 'w-full')}
				ref={ref}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				{children}
			</div>
		</div>
	)
);
