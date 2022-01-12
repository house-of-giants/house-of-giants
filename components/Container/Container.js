import React from "react";
import { StyledContainer } from "./StyledContainer";

export const Container = React.forwardRef(({ children, onMouseEnter, onMouseLeave }, ref) => (
  <StyledContainer ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    {children}
  </StyledContainer>
));