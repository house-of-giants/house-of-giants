import { useEffect } from 'react';
import { gsap } from 'gsap';
import ThreeEyeSVG from './ThreeEyeSVG';

const ThreeEye = () => {
  useEffect(() => {
    // gsap.to("[data-name='Star']", {duration: 1, x: 100, y: 100, scale: 0.5 });
  }, [])

  return (
    <ThreeEyeSVG />
  )
}

export default ThreeEye