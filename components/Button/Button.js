import { StyledButton } from "./StyledButton";

export const Button = ({ children, href, onClick, style }) => (
  <StyledButton as={href ? 'a' : 'button'} href={href} onClick={onClick} style={style}>
    {children}
  </StyledButton>
);