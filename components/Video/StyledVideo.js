'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledVideo = styled(motion.video)`
	aspect-ratio: 16 / 9;
	border-radius: 20px;
	cursor: none;
	height: 100%;
	object-fit: cover;
	object-position: center top;
	width: 100%;
`;
