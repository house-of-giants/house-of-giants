'use client';

import { useState, useEffect } from 'react';

const chars = '!<>-_\\/[]{}—=+*^?#________';

export const TextScramble = ({ text }) => {
	const [displayText, setDisplayText] = useState(text);
	const [isScrambling, setIsScrambling] = useState(false);

	useEffect(() => {
		let frame = 0;
		let scrambleTimeout;

		const scramble = () => {
			setIsScrambling(true);

			let iteration = 0;
			const maxIterations = 20;
			let currentText = text;

			const update = () => {
				if (iteration >= maxIterations) {
					setDisplayText(text);
					setIsScrambling(false);
					return;
				}

				const scrambled = currentText
					.split('')
					.map((char, idx) => {
						if (idx < iteration) {
							return text[idx];
						}
						return chars[Math.floor(Math.random() * chars.length)];
					})
					.join('');

				setDisplayText(scrambled);
				iteration += 1;
				frame = requestAnimationFrame(update);
			};

			update();
		};

		// Start scramble effect when text changes
		scrambleTimeout = setTimeout(scramble, 100);

		return () => {
			cancelAnimationFrame(frame);
			clearTimeout(scrambleTimeout);
		};
	}, [text]);

	return <span className={`scramble-text ${isScrambling ? 'scrambling' : ''}`}>{displayText}</span>;
};
