import styled from 'styled-components'
import { sp, bp, fs } from '../../styles/base/variables'

const StyledHero = styled.div`
  align-items: center;
  display: grid;
  padding: ${sp.base} ${sp.lg};

  @media(${bp.xl}) {
    grid-template-columns:1fr 4fr;
    grid-gap: ${sp.xxxl};
    padding: ${sp.base} ${sp.xxl} ${sp.xxl};
  }

  & .blurb {
    font-size: ${fs.base};

    @media(${bp.xxl}) {
      max-width: 80%;
    }
  }

  & p {
    box-shadow: none;
    font-size: ${fs.lg};
    font-weight: 300;
    margin-top: 0;

    @media(${bp.xl}) {
      font-size: calc(${fs.xs} + 2.2vw);
    }

    & span {
      font-weight: 900;
    }
  }
`

export default StyledHero