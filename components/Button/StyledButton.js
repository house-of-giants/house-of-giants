import styled from "styled-components";

export const StyledButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  box-shadow: 0 0 0 1px var(--c-primary-dark) inset;
  cursor: pointer;
  color: currentColor;
  display: inline-flex;
  font-family: var(--f-serif);
  font-size: var(--fs-base);
  font-style: italic;
  line-height: 1;
  padding: var(--sp-xs) var(--sp-s);
  margin: 0;
  text-decoration: none;

  &:hover,
  &:focus {
    & svg {
      transform: translateX(var(--sp-2xs));
    }
  }

  & svg {
    padding-left: var(--sp-2xs);
    transition: transform 666ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`;