const Pause = ({ fill = '#000', width, height }) => (
	<svg className="pause" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 448 512">
		<path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" fill={fill} />
	</svg>
);

export default Pause;