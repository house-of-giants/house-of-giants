import { css } from 'styled-components'

export const PrefersReducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.001s !important;
      transition-duration: 0.001s !important;
    }
  }
`