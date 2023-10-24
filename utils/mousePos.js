import { useState, useEffect } from 'react';

const useMousePos = (el) => {
	const [position, setPosition] = useState({
		clientX: 0,
		clientY: 0,
	});

	const updatePosition = (event) => {
		const { pageX, pageY, clientX, clientY } = event;

		setPosition({
			clientX,
			clientY,
		});
	};

	useEffect(() => {
		el.current.addEventListener('mousemove', updatePosition, false);
		el.current.addEventListener('mouseenter', updatePosition, false);

		return () => {
			el.current.removeEventListener('mousemove', updatePosition);
			el.current.removeEventListener('mouseenter', updatePosition);
		};
	}, []);

	return position;
};

export default useMousePos;
