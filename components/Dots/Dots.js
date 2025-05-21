'use client';

import styled from 'styled-components';
import LazyImage from '@/components/Image/LazyImage';
const StyledDots = styled.div`
	padding: var(--sp-l);
	position: relative;

	& span {
		overflow: visible !important;
		pointer-events: none;
	}

	& img {
		position: relative;
		height: 110% !important;
		left: -5% !important;
		max-width: none !important;
		opacity: ${(props) => props.opacity};
		pointer-events: none;
		top: -5% !important;
		width: 110% !important;
		z-index: 0;
	}

	& h3 {
		margin-top: 0;
	}

	& h3,
	& p {
		position: relative;
		z-index: 1;
	}
`;

export const Dots = ({ children, opacity }) => (
	<StyledDots opacity={opacity}>
		<LazyImage
			className="dots"
			alt=""
			src="/images/dots.png"
			fill
			sizes="100vw"
			style={{
				objectFit: 'cover',
			}}
		/>
		{children}
	</StyledDots>
);
