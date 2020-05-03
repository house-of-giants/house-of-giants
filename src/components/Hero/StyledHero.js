import styled from 'styled-components'
import { sp, bp, fs, colors, headerFont } from '../../styles/base/variables'

const { mintCream, tulip } = colors

const StyledHero = styled.div`
  align-items: center;
  border-bottom: 1px solid ${tulip};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: ${sp.xxl};
  position: relative;

  & svg {
    position: absolute;
    fill: red;
    left: 0;
    mix-blend-mode: screen;
    opacity: 0.1;
    width: 100%;
    z-index: -1;

    &:first-of-type {
      top: 0;
    }

    &:last-of-type {
      bottom: 0;
      transform: rotate(180deg);
    }
  }

  & .blurb {
    box-sizing: border-box;
    font-family: ${headerFont};
    margin: 0 auto;
    padding: ${sp.base};

    @media(${bp.xl}) {
      max-width: 75%;
    }
  }

  & p {
    box-shadow: none;
    color: ${mintCream};
    font-size: ${fs.lg};
    font-weight: 300;
    margin-top: 0;

    @media(${bp.xl}) {
      font-size: calc(${fs.xs} + 2vw);
    }

    & span {
      text-decoration: underline;
      text-decoration-color: ${tulip};
      font-weight: 300;
      line-height: 0;
    }
  }
`

export default StyledHero