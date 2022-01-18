import styled from "styled-components";
import { CircleGrad } from "../Cursor/StyledCursor";
import { StyledGrid } from "../Grid/StyledGrid";
import Arrow from "../SVG/Arrow";

export const StyledContact = styled.div`
  background: ${props => props.background};
  color: var(--c-primary-dark);
  overflow: hidden;
  position: relative;
  padding-bottom: ${props => props.pBottom || 'var(--sp-2xl)'};
  padding-top: ${props => props.pTop};

  &.-has-background {
    color: var(--c-white);
  }

  &.-active {
    overflow: visible;

    & ${CircleGrad} {
      left: 80vw;

      & .arrow {
        transform: rotate(-180deg);
      }
    }

    & .contact-wrap {
      transform: translateX(-35vw);
    }
  }

  & .arrow {
    transition: transform 666ms cubic-bezier(0.25, 1, 0.5, 1);
  }

  & .contact-wrap {
    position: relative;
    overflow: visible;
    transition: transform 333ms cubic-bezier(0.25, 1, 0.5, 1);
    will-change: transform;
  }

  & ${StyledGrid} {
    max-width: 80vw;
  }

  & ${CircleGrad} {
    cursor: pointer;
    position: absolute;
    left: 80vw;
    transform: translate(-50%, -50%);
    top: 50%;
    z-index: 5;

    & svg:last-of-type {
      position: absolute;
      width: 82px;
    }
  }

  & .form {
    background-color: var(--c-white);
    left: 80vw;
    padding: calc(var(--sp-2xl) * 2);
    position: absolute;
    top: calc(var(--sp-2xl) * -2);
    width: 80vw;
    height: 100%;
  }
`;