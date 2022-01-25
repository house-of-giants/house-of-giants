import { StyledGrid } from "./StyledGrid";

export const Grid = ({ children, cols, gap, justify, align, pTop, pBottom, onClick }) => (
  <StyledGrid cols={cols} gap={gap} align={align} justify={justify} pTop={pTop} pBottom={pBottom} onClick={onClick}>
    {children}
  </StyledGrid>
);