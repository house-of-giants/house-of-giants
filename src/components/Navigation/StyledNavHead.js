import styled from 'styled-components'
import { colors, sp } from '../../styles/base/variables'

export const StyledNavHead = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${sp.base};
  position: sticky;
  top: 0;
  z-index: 10;

  & .logo {
    justify-self: center;
    margin-right: auto;
  }

  & .spaceship {
    height: 40px;
  }

  & .activator {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    z-index: 10;

    &::before,
    &::after {
      background-color: ${colors.richBlack};
      border-radius: 3px;
      content: "";
      display: block;
      height: 3px;
      transform-origin: 0 50%;
      transition: 300ms transform ease;
      width: 30px;
    }

    &::after {
      margin-top: 0.3rem;
    }

    &:focus {
      outline: none;

      &::before {
        transform: translateY(-.8rem);
      }
      &::after {
        transform: translateY(.8rem);
      }
    }

    &.-active {
      &::before {
        transform: rotate(45deg) translateY(-.7rem);
      }

      &::after {
        transform: rotate(-45deg) translateY(.7rem);
      }

      &:focus {
        outline-offset: 0.8rem;
        outline-style: dotted;
        outline-width: thin;
      }
    }
  }
`