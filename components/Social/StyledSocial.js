import styled from "styled-components";

export const StyledSocial = styled.div`
  background-color: var(--c-white);
  font-size: var(--fs-s);
  width: 100%;

  @media (min-width: 1220px) {
    background-color: transparent;
  }

  & .wrap {
    border-top: 1px solid var(--c-primary-dark);
    display: flex;
    justify-content: space-between;
    padding-top: var(--sp-s);
  }

  ul {
    margin: 0;
    padding: 0;
  }

  & li {
    display: inline;

    &:not(:last-child) {
      padding-right: var(--sp-m);
    }
  }

  & a {
    align-items: center;
    color: var(--c-primary-dark);
    display: inline-flex;
    font-family: var(--f-serif);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    & svg {
      margin-left: var(--sp-2xs);
    }
  }

  & p {
    font-size: var(--fs-s);
  }
`;