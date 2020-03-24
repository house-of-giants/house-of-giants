import styled from 'styled-components'
import { colors, headerFont, sp, fs, bp } from '../../styles/base/variables'

export const StyledNav = styled.nav`
  padding: ${sp.base};

  & .activator {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    float: right;
    position: relative;
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

  & .site-nav {
    align-items: flex-start;
    background-color: ${colors.gallery};
    bottom: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 3fr;
    overflow: hidden;
    padding: ${sp.xl};
    position: absolute;
    right: 0;
    top: 0;
    width: 100vw;

    @media(${bp.m}) {
      width: 60vw;
    }

    & ul {
      box-sizing: border-box;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    & li {
      padding-bottom: ${sp.xl};

      & a {
        box-shadow: 0 0 0 inset ${colors.yellow};
        color: ${colors.richBlack};
        font-family: ${headerFont};
        font-size: ${fs.xxl};
        text-decoration: none;
        transition: 300ms ease box-shadow;

        @media(${bp.l}) {
          font-size: ${fs.xxxl};
        }

        &:hover,
        &:focus {
          box-shadow: 0 -4rem 0 inset ${colors.yellow};
          outline: none;
        }
      }
    }

  }

  & .who {
    border-top: 2px solid ${colors.mintCream};
    display: grid;
    align-self: end;
    grid-gap: ${sp.xl};
    padding-top: ${sp.base};

    @media(${bp.l}) {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }

    & h3 {
      box-shadow: 0 -1.3rem 0 inset ${colors.yellow};
      display: inline;
    }

    & p {
      font-size: ${fs.base};
      line-height: 1.6;
    }
  }
`
