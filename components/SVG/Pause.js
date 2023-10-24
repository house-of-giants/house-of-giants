const Pause = ({ fill = '#000', width, height }) => (
	<svg
		className="pause"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		viewBox="0 0 39 61"
	>
		<path
			d="M4.316 0h.614C7.3 0 9.224 2.358 9.224 4.27v52.46c0 2.358-1.923 4.27-4.294 4.27h-.614C1.945 61 .022 58.642.022 56.73V4.27C.022 1.912 1.945 0 4.316 0ZM34.07 0h.614c2.371 0 4.294 2.358 4.294 4.27v52.46c0 2.358-1.923 4.27-4.294 4.27h-.614c-2.371 0-4.294-2.358-4.294-4.27V4.27c0-2.358 1.923-4.27 4.294-4.27Z"
			fill={fill}
		/>
	</svg>
);

export default Pause;
