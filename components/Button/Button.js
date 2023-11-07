import { StyledButton } from './StyledButton';

export const Button = ({ children, href, onClick, style, ...rest }) => (
	<StyledButton as={href ? 'a' : 'button'} href={href} onClick={onClick} style={style} {...rest}>
		{children}
	</StyledButton>
);
