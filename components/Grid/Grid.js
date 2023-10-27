import { StyledGrid } from './StyledGrid';

export const Grid = ({ children, cols, gap, justify, align, pt, pb, onClick }) => (
	<StyledGrid $cols={cols} $gap={gap} $align={align} $justify={justify} $pTop={pt} $pBottom={pb} onClick={onClick}>
		{children}
	</StyledGrid>
);
