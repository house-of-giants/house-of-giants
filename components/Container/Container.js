import React from "react";
import { StyledContainer } from "./StyledContainer";

export const Container = React.forwardRef(({ children, className, onMouseEnter, onMouseLeave, background, pTop, pBottom, stick }, ref) => (
  <StyledContainer className={className} pTop={pTop} pBottom={pBottom} background={background} stick={stick}>
    <div className="wrap" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  </StyledContainer>
));