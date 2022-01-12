import React from "react";
import { StyledContainer } from "./StyledContainer";

export const Container = React.forwardRef(({ children, onMouseEnter, onMouseLeave, background, pTop, pBottom }, ref) => (
  <StyledContainer className={background ? '-has-background' : ''} pTop={pTop} pBottom={pBottom} background={background}>
    <div className="wrap" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  </StyledContainer>
));