'use client';

import React from 'react';
import { StyledContainer } from './StyledContainer';

export const Container = React.forwardRef(
	({ children, className, onMouseEnter, onMouseLeave, background, pt, pb, stick, ...rest }, ref) => (
		<StyledContainer className={className} $pTop={pt} $pBottom={pb} $background={background} $stick={stick} {...rest}>
			<div className="wrap" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
				{children}
			</div>
		</StyledContainer>
	)
);
