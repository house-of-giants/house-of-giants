import { css } from 'styled-components'

import { colors, bodyFont } from './variables'

export const SiteResets = css`
  body{
    background-color: ${colors.mintCream};
    margin: 0;
    font-family: ${bodyFont};
  }
`