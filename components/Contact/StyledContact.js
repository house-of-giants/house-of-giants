import styled from "styled-components";
import { CircleGrad } from "../Cursor/StyledCursor";
import { StyledGrid } from "../Grid/StyledGrid";

export const StyledContact = styled.div`
  align-items: center;
  background: linear-gradient(-270deg, var(--c-neon-sky) 0%, var(--c-cyber-green) 100%);
  color: var(--c-primary-dark);
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  padding-top: ${props => props.pTop};
  
  @media (min-width: 1220px) {
    background: ${props => props.background};
    padding-bottom: ${props => props.pBottom || 'var(--sp-2xl)'};
  }

  &.-has-background {
    color: var(--c-white);
  }

  &.-active {
    @media (min-width: 1220px) {
      overflow: visible;

      & ${CircleGrad} {
        left: 80vw;

        & .arrow {
          transform: rotate(-180deg);
        }
      }

      & .contact-wrap {
        transform: translateX(-60vw);
      }
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
    width: 100%;

    @media (min-width: 1220px) {
      max-width: 80vw;
    }
  }

  & ${CircleGrad} {
    cursor: pointer;
    display: none;
    position: absolute;
    left: 80vw;
    transform: translate(-50%, -50%);
    top: 50%;
    z-index: 5;

    @media (min-width: 1220px) {
      display: flex;
    }

    & svg:last-of-type {
      position: absolute;
      width: 82px;
    }
  }

  & .form {
    align-items: center;
    background-color: var(--c-white);
    box-sizing: border-box;
    display: flex;
    padding: var(--sp-xl);

    @media (min-width: 1220px) {
      min-height: calc(100vh + (calc(var(--sp-2xl) * 4)));
      height: calc(100% + (calc(var(--sp-2xl) * 4)));;
      left: 80vw;
      padding: var(--sp-2xl) var(--sp-2xl) calc(var(--sp-2xl) * 2) calc(var(--sp-2xl) * 4);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 80vw;
    }

    & form {
      width: 100%;
    }
  }

  & .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--sp-s);
  }
`;