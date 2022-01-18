import { StyledButton } from "./StyledButton";

export const Button = ({ children, onClick, style }) => (
  <StyledButton onClick={onClick} style={style}>
    {children}
  </StyledButton>
);