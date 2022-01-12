import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${props => props.background};
  overflow: hidden;
  position: relative;
  padding-bottom: ${props => props.pBottom || 'var(--sp-2xl)'};
  padding-top: ${props => props.pTop};

  &.-has-background {
    color: var(--c-white);
  }

  & .wrap {
    margin: 0 auto;
    max-width: var(--container-width);
  }
`;