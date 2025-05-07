'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CircleGrad = styled.button`
	align-items: center;
	background: ${(props) =>
		props.$solid ? 'var(--c-primary-dark)' : props.$transparent ? 'transparent' : 'var(--grad)'};
	border-radius: 50%;
	border: none;
	cursor: none;
	display: flex;
	height: 254px;
	justify-content: center;
	padding: var(--sp-s);
	position: relative;
	transition: transform 233ms ease;
	width: 254px;

	& .explore,
	& .twerk {
		animation: spin 45s infinite linear;
		width: 100%;
	}

	& .play {
		position: absolute;
		transform: translateX(10px);
		width: 82px;
	}

	& .pause {
		width: 82px;
	}
`;

export const StyledCursor = styled(motion.div)`
	bottom: 0;
	cursor: none;
	left: 0;
	pointer-events: none;
	position: fixed;
	right: 0;
	top: 0;
	transition: transform 233ms cubic-bezier(0.68, -0.6, 0.32, 1.6);
	z-index: 9999;

	${CircleGrad} {
		cursor: none;
		transform: translate(-50%, -50%);
		transform-origin: 50% 50%;

		&.-is-playing {
			transform: translate(-50%, -50%) scale(0.2);
		}
	}
`;
