import styled from 'styled-components'
import { sp, colors } from '../../styles/base/variables'

const StyledListItem = styled.div`
  display: flex;
  justify-content: center;
  padding: ${sp.xxl};
  width: 100%;

  &:last-child {
    padding-top: 0;
  }

  &:hover {
    & img {
      opacity: 0.6;
    }

    & .title {
      box-shadow: 0 -2rem 0 inset ${colors.tulip};
    }

    & .services {
      opacity: 1;

      & p {
        animation-play-state: running;
      }
    }
  }

  & img {
    filter: grayscale(1) contrast(1.5);
    height: 100%;
    left: 0;
    object-fit: cover;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition opacity 300ms ease;
    width: 100%;
  }

  & .title {
    box-shadow: 0 0 0 inset ${colors.tulip};
    line-height: 0.8;
    max-width: 400px;
    position: relative;
    text-align: center;
    transition: box-shadow 300ms ease;
    z-index: 1;
  }

  & span {
    color: ${colors.tulip};
    display: block;
    font-weight: 100;
    padding-bottom: 1rem;
    position: relative;
    text-align: center;
    width: 100%;
    z-index: 1;
  }

  & .details {
    color: ${colors.gallery};
    display: inline-block;
    overflow: hidden;
    text-decoration: none;

    &:hover,
    &:focus {
      box-shadow: none;
    }
  }

  & .services {
    font-weight: 100;
    max-width: 400px;
    opacity: 0;
    overflow: hidden;
    padding-top: 1rem;
    text-transform: uppercase;
    transition: opacity 300ms ease;
    white-space: nowrap;
    z-index: 1;

    & p {
      animation-duration: 10s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: marquee;
      animation-play-state: paused;
      animation-timing-function: linear;
      display: inline-block;
      font-size: 1.1rem;
      margin: 0;
    }

    & p:last-child {
      animation-name: marquee2;
      animation-delay: 5s;
    }
  }

  @keyframes marquee {
    from { transform: translateX(100%); }
    to { transform: translateX(-100%); }
  }

  @keyframes marquee2 {
    from { transform: translateX(0%); }
    to { transform: translateX(-200%); }
  }
`

export default StyledListItem