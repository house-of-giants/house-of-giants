import React from "react";
import { StyledContact } from "./StyledContact";

export const Contact = ({ children, className, background, pTop, pBottom }) => (
  <StyledContact className={className} pTop={pTop} pBottom={pBottom} background={background}>
    <div className="contact-wrap">
      {children}
    </div>
  </StyledContact>
);