import styled from 'styled-components'

const StyledBox = styled.section`
  align-items: center;
  background-color: ${props => props.bg ? props.bg : 'transparent'};
  color: ${props => props.color ? props.color : 'inherit'};
  display: flex;
  flex-direction: column;
  height: ${props => props.fullH ? '100vh' : 'auto'};
  justify-content: center;
  position: relative;
`

export default StyledBox