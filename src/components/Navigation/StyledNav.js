import styled from 'styled-components'
import { colors, headerFont, sp, fs, bp } from '../../styles/base/variables'

export const StyledNav = styled.nav`
  & .site-nav {
    align-items: flex-start;
    background-color: ${colors.gallery};
    bottom: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 3fr;
    left: 0;
    overflow: auto;
    padding: ${sp.xxxl} ${sp.lg};
    position: fixed;
    right: 0;
    top: 0;
    width: 100vw;

    @media(${bp.l}) {
      padding: ${sp.xxxl};
    }

    & ul {
      background-color: ${colors.gallery};
      box-sizing: border-box;
      list-style: none;
      margin: 0;
      padding-bottom: ${sp.lg};
    }

    & li:not(:last-child) {
      padding-bottom: ${sp.xl};
    }

    & li {
      & a {
        box-shadow: 0 0 0 inset ${colors.yellow};
        color: ${colors.richBlack};
        font-family: ${headerFont};
        font-size: ${fs.xxl};
        text-decoration: none;
        transition: 300ms ease box-shadow;

        @media(${bp.l}) and (min-height: 62.5em) {
          font-size: ${fs.xxxl};
        }

        &:hover,
        &:focus,
        &[aria-current] {
          box-shadow: 0 -4rem 0 inset ${colors.yellow};
          outline: none;
        }
      }
    }

  }

  & .who {
    background-color: ${colors.gallery};
    border-top: 2px solid ${colors.mintCream};
    display: grid;
    align-self: end;
    grid-gap: ${sp.xl};
    padding: ${sp.xl};

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
