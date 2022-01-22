import React from "react";
import { StyledContact } from "./StyledContact";

export const Contact = ({ id, children, className, background, pTop, pBottom }) => (
  <StyledContact id={id} className={className} pTop={pTop} pBottom={pBottom} background={background}>
    <div className="contact-wrap">
      {children}
    </div>
  </StyledContact>
);