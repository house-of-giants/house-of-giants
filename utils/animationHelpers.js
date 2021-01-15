// Map number x from range [a, b] to [c, d]
export const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

// Linear interpolation
export const lerp = (a, b, n) => (1 - n) * a + n * b;

export const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;

// Gets the mouse position
export const getMousePos = (e) => {
		let posx = 0;
		let posy = 0;
		if (!e) e = window.event;
		if (e.pageX || e.pageY) {
				posx = e.clientX;
				posy = e.clientY;
		}

		return { x : posx, y : posy }
};
