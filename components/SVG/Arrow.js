const Arrow = ({ fill = '#000', width, height }) => (
	<svg className="arrow" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 17 16">
		<path d="m8.523 15.974 7.79-7.662c-1.955-1.916-5.837-5.745-7.79-7.661l-.984.95c1.758 1.724 4.083 4.02 6.134 6.035H.99V8.99h12.684L7.54 15.013l.984.961Z" fill={fill} />
	</svg>
);

export default Arrow;