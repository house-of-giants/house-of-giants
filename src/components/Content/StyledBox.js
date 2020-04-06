import styled from 'styled-components'
import { container, sp } from '../../styles/base/variables'

const StyledBox = styled.section`
  align-items: ${props => props.row ? 'normal' : 'center'};
  background-color: ${props => props.bg ? props.bg : 'transparent'};
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
`

export default StyledBox