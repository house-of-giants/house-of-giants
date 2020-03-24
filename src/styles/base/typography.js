import { css } from 'styled-components'
import { headerFont } from './variables'

export const Typography = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${headerFont};
  }

  .screen-reader-text {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`