import styled from 'styled-components'
import { container, sp, colors, bp } from '../../styles/base/variables'

const StyledBox = styled.section`
  align-items: ${props => props.row ? 'normal' : 'center'};
  background-color: ${props => props.bg ? props.bg : 'transparent'};
  border-bottom: ${props => props.bb ? props.bb : 'none'};
  color: ${props => props.color ? props.color : 'inherit'};
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  min-height: ${props => props.fullH ? '100vh' : 'auto'};
  justify-content: ${props => props.row ? 'normal' : 'center'};
  position: relative;

  & .wrapper {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: ${container};
    padding: ${sp.xxl} ${sp.xl};
    width: 100%;
  }

  & .service {

    &:not(:last-child) {
      padding-bottom: ${sp.xxxl};
    }

    & h2 {
      @media (${bp.l}) {
        display: inline-flex;
        align-items: center;
      }
    }

    &:hover {
      & svg {
        color: ${colors.yellow};
      }
    }

    & .blurb {
      @media (${bp.l}) {
        text-align: justify;
      }
    }
  }

  & svg.planet {
    border: 2px solid currentColor;
    border-radius: 50%;
    display: block;
    height: 40px;
    margin-right: ${sp.lg};
    padding: ${sp.base};
    width: 40px;

    & path {
      stroke: currentColor;
    }
  }
`

export default StyledBox