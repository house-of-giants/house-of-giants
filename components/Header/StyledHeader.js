import styled from "styled-components";
import { StyledButton } from "../Button/StyledButton";

export const StyledHeader = styled.nav`
  align-items: center;
  display: flex;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: var(--sp-s) var(--sp-2xs);

  @media (min-width: calc(1440px + (var(--sp-2xs) * 2))) {
    padding: var(--sp-s) 0;
  }

  & h1 {
    align-items: center;
    display: flex;
    font-size: var(--fs-m);
    margin-bottom: 0;

    & svg {
      margin-right: var(--sp-2xs);
    }
  }

  ${StyledButton} {
    margin-left: auto;
  }
`;