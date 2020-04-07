import styled from 'styled-components'
import { sp, bp, fs, colors } from '../../styles/base/variables'

const { mintCream, tulip } = colors

const StyledHero = styled.div`
  align-items: center;
  display: grid;
  min-height: 100vh;
  position: relative;

  & svg {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    transform-origin: 50%;
    width: 100%;
    z-index: -1;

    & polygon {
      transform: scale(0.6) translate(40%, 25%);

      &:first-child {
        opacity: 0.7;
      }
    }

  }

  & .blurb {
    align-self: end;
    font-size: ${fs.base};

    @media(${bp.xxl}) {
      max-width: 80%;
    }
  }

  & p {
    box-shadow: none;
    color: ${mintCream};
    font-size: ${fs.lg};
    font-weight: 300;
    margin-top: 0;

    @media(${bp.xl}) {
      font-size: calc(${fs.xs} + 2.2vw);
    }

    & span {
      box-shadow: 0 -1rem 0 inset ${tulip};
      font-weight: 900;
    }
  }

  @keyframes slowtate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(1turn);
    }
  }
`

export default StyledHero