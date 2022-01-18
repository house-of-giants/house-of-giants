import styled from "styled-components";

export const StyledGridItem = styled.div`
  &.-stagger {
    padding-bottom: var(--sp-xl);

    @media (min-width: 768px) {
      padding-bottom: 0;

      &:first-child {
        padding-top: var(--sp-2xs);
      }
  
      &:nth-child(2) {
        padding-top: calc(var(--sp-2xl) * 4);
      }
  
      &:last-child {
        padding-top: var(--sp-l);
      }
    }
  }

  & .team-img {
    margin-bottom: var(--sp-l);
  }

  & h2 {
    margin-bottom: var(--sp-xs);
  }
`;