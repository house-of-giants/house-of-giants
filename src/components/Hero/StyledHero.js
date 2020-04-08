import styled from 'styled-components'
import { sp, bp, fs, colors, headerFont } from '../../styles/base/variables'

const { mintCream, tulip, richBlack } = colors

const StyledHero = styled.div`
  align-items: center;
  border-bottom: 1px solid ${tulip};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: ${sp.xxl};
  min-height: 100vh;
  padding-bottom: ${sp.xxl};
  position: relative;

  & svg {
    position: absolute;
    height: 50%;
    left: 0;
    top: 25%;
    width: 100%;
    z-index: -1;
  }

  & .blurb {
    box-sizing: border-box;
    font-size: ${fs.base};
    padding: ${sp.base};
    text-align: center;

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
      font-weight: 300;
      line-height: 0;

      @media(${bp.xl}) {
        box-shadow: 0 -1.5rem 0 inset ${tulip};
      }
    }
  }
`

export default StyledHero