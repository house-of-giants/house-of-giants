'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Video = React.forwardRef(({ children, poster, onClick, loop }, ref) => {
	return (
		<motion.video
			initial={{ scale: 1 }}
			ref={ref}
			poster={poster}
			onClick={onClick}
			loop={loop}
			className="aspect-video rounded-[20px] cursor-none h-full object-cover object-top w-full"
		>
			{children}
		</motion.video>
	);
});
