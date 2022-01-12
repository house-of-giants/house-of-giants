import React, { useEffect, useRef, useState } from "react";
import { StyledVideo } from "./StyledVideo";

export const Video = React.forwardRef(({ children, poster, onClick }, ref) => {
  return(
    <StyledVideo ref={ref} poster={poster} onClick={onClick}>
      {children}
    </StyledVideo>
  );
});