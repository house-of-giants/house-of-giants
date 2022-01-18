import { StyledGrid } from "./StyledGrid";

export const Grid = ({ children, cols, gap, align, pTop, pBottom, onClick }) => (
  <StyledGrid cols={cols} gap={gap} align={align} pTop={pTop} pBottom={pBottom} onClick={onClick}>
    {children}
  </StyledGrid>
);