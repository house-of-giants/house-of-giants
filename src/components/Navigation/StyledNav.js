import styled from 'styled-components'
import { colors, headerFont } from '../../styles/base/variables'

export const StyledNav = styled.nav`
  padding: 2rem;

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
        transform: translateY(-.5rem);
      }
      &::after {
        transform: translateY(.5rem);
      }
    }

    &.-active {
      &::before {
        transform: rotate(45deg) translateY(-0.6rem);
      }

      &::after {
        transform: rotate(-45deg) translateY(0.55rem);
      }

      &:focus {
        outline-offset: 0.5rem;
        outline-style: dotted;
        outline-width: thin;
      }
    }
  }

  & .site-nav {
    background-color: ${colors.gallery};
    bottom: 0;
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    white-space: nowrap;

    & li {
      padding-bottom: 3rem;
      padding-left: 3rem;
    }

    & a {
      box-shadow: 0 0 0 inset ${colors.blueGreen};
      color: ${colors.richBlack};
      font-size: 4rem;
      font-family: ${headerFont};
      text-decoration: none;
      transition: 300ms ease box-shadow;

      &:hover,
      &:focus {
        box-shadow: 0 -2rem 0 inset ${colors.blueGreen};
        outline: none;
      }
    }
  }
`
