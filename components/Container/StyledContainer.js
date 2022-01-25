import styled from "styled-components";

export const StyledContainer = styled.div`
  background: ${props => props.background};
  color: var(--c-primary-dark);
  overflow: hidden;
  position: ${props => props.stick ? 'sticky' : 'relative'};
  padding-bottom: ${props => props.pBottom || 'var(--sp-2xl)'};
  padding-top: ${props => props.pTop};
  top: ${props => props.stick ? 'var(--sp-m)' : 0};
  z-index: ${props => props.stick ? 0 : 1};

  &.-has-background {
    color: var(--c-white);
  }

  & .wrap {
    margin: 0 auto;
    max-width: var(--container-width);
    padding: 0 var(--sp-xl);
  }
`;