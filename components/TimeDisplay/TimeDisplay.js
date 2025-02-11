'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const TimeDisplay = () => {
	const [time, setTime] = useState('--:--:--');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const updateTime = () => {
			setTime(new Date().toLocaleTimeString());
		};

		// Initial update
		updateTime();

		const timer = setInterval(updateTime, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<motion.div
			className="text-[10px] font-mono text-cyber-green/50"
			transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
		>
			{time}
		</motion.div>
	);
};
