import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { slideL } from '../../utils/animationDefs'
import Saturn from '../SVG/Saturn'
import Neptune from '../SVG/Neptune'
import Uranus from '../SVG/Uranus'
import Pluto from '../SVG/Pluto'

const Services = () => {
  const [ultraRef, isInView] = useInView({
    triggerOnce: true,
    threshold: [0.0, 1.0]
  })

  return (
    <motion.section ref={ultraRef} variants={slideL} animate={isInView ? "shown" : "hidden"}>
      <div className="service">
        <div className="title">
          <h5>Fig <small>V .</small></h5>
          <h2><Saturn />Interactive Experiences</h2>
        </div>
        <div className="blurb">
          <p>We forge our web applications and development projects to ensure that you and your users are met with the most enjoyable experience possible.</p>
        </div>
      </div>
      <div className="service">
        <div className="title">
          <h5>Fig <small>VI .</small></h5>
          <h2><Neptune /> Modern Tech</h2>
        </div>
        <div className="blurb">
          <p>It's hard to sift through the buzz words these days. We'll research the best technology that fits your project. No biases, no taking the easy way out.</p>
        </div>
      </div>
      <div className="service">
        <div className="title">
          <h5>Fig <small>VII .</small></h5>
          <h2><Uranus />Data Driven UI / UX</h2>
        </div>
        <div className="blurb">
          <p>We can't stand doing something just because the other guys do it too. We take hard data and leverage that to inform our User Experience and User Interaction Design.</p>
        </div>
      </div>
      <div className="service">
        <div className="title">
          <h5>Fig <small>VIII .</small></h5>
          <h2><Pluto />Development Quality</h2>
        </div>
        <div className="blurb">
          <p>We have exceptionally high standards for ourselves, our code, our process, and each and every project. We demand the best to ensure your project stands out from the rest.</p>
        </div>
      </div>
    </motion.section>
  )
}

export default Services