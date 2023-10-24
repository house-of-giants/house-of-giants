import React from 'react';

import { StyledVideo } from './StyledVideo';

export const Video = React.forwardRef(({ children, poster, onClick, loop }, ref) => {
	return (
		<StyledVideo initial={{ scale: 1 }} ref={ref} poster={poster} onClick={onClick} loop={loop}>
			{children}
		</StyledVideo>
	);
});
