import { StyledButton } from './StyledButton';

export const Button = ({ children, href, onClick, style, className, ...rest }) => (
	<StyledButton as={href ? 'a' : 'button'} href={href} onClick={onClick} style={style} className={className} {...rest}>
		{children}
	</StyledButton>
);
