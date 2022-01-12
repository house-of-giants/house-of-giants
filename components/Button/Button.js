import { StyledButton } from "./StyledButton";

export const Button = ({ children, style }) => (
  <StyledButton style={style}>
    {children}
  </StyledButton>
);