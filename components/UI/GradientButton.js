'use client';

import { Button } from '../Button/Button';

export const GradientButton = ({ href, children, disabled, onClick, ...rest }) => {
	return (
		<Button href={href} variant="gradient" disabled={disabled} onClick={onClick} {...rest}>
			{children}
		</Button>
	);
};
