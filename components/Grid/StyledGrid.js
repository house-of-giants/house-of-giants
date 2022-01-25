import styled from "styled-components";

export const StyledGrid = styled.div`
  align-items: ${props => props.align || 'center'};
  display: grid;
  gap: ${props => props.gap};
  justify-content: ${props => props.justify};
  padding: ${props => props.pTop || 0} 0 ${props => props.pBottom || 0} 0;
  position: relative;
  
  @media (min-width: 768px) {
    grid-template-columns: ${props => props.cols};
  }

  & .logo {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;