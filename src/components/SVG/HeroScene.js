import React from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion"

const draw = {
  strokeDasharray: [2950, 2950, 2950],
  strokeDashoffset: [2950, 0, 0]
}

const fade = {
  opacity: [0, 1, 1]
}

const t = (delay) => ({
  duration: 6.0,
  delay: delay ? delay : 0,
  ease: "linear",
})

const HeroScene = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1587 919">
    <style>
      {".st0,.st2,.st4,.st5{fill:none;stroke:#999;strokeWidth:2}.st2,.st4,.st5{stroke:#b3b3b3;strokeWidth:2}.st4,.st5{stroke:#999}.st5{strokeWidth:6}"}
    </style>
    <filter id="blursed">
      <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
    </filter>
    <g id="circles">
      <g id="circle-right">
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="453"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="340.59"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="256.06"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="192.51"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="144.73"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="108.8"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="81.79"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="61.48"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="46.21"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="34.73"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="26.09"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="19.6"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="14.72"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="11.05"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="8.3"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="6.22"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="4.66"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="3.49"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="2.61"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="1.94"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="1.44"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r="1.07"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r=".79"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r=".58"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r=".42"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r=".3"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r=".21"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r=".14"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r=".09"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r=".05"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130" cy="458.5" r=".02"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="393.48"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="295.84"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="222.42"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="167.22"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="125.71"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="94.51"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="71.04"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="53.4"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="40.14"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="30.17"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="22.67"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="17.03"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="12.79"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="9.6"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="7.21"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="5.4"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="4.05"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="3.03"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="2.26"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="1.69"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r="1.26"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r=".93"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r=".68"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r=".5"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r=".36"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r=".26"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r=".18"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r=".12"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r=".08"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r=".04"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="1130.63" cy="460.48" r=".02"/>
      </g>
      <g id="circle-left">
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="453"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="340.59"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="256.06"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="192.51"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="144.73"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="108.8"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="81.79"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="61.48"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="46.21"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="34.73"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="26.09"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="19.6"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="14.72"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="11.05"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="8.3"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="6.22"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="4.66"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="3.49"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="2.61"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="1.94"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="1.44"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r="1.07"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r=".79"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r=".58"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r=".42"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r=".3"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r=".21"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r=".14"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r=".09"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r=".05"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="455.63" cy="461.48" r=".02"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="393.48"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="295.84"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="222.42"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="167.22"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="125.71"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="94.51"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="71.04"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="53.4"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="40.14"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="30.17"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="22.67"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="17.03"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="12.79"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="9.6"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="7.21"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="5.4"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="4.05"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="3.03"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="2.26"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="1.69"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r="1.26"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r=".93"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r=".68"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r=".5"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r=".36"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r=".26"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r=".18"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r=".12"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r=".08"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r=".04"/>
        <motion.circle animate={draw} transition={t()} strokeWidth="2" className="st0" cx="456.26" cy="463.46" r=".02"/>
      </g>
    </g>
    <g id="triangles">
      <g id="tri-5">
        <motion.path animate={fade} transition={t(3)} fill="#030809" d="M797 5L322.58 826.72h948.84z"/>
        <motion.path animate={draw} strokeWidth="2" transition={t(3)} className="st2" d="M797 5L322.58 826.72h948.84z"/>
      </g>
      <motion.circle animate={draw} strokeWidth="2" transition={t(3)} id="circle-inner" className="st4" cx="795.92" cy="552.09" r="319.41"/>
      <motion.circle animate={draw} strokeWidth="2" transition={t(3)} id="circle-outer" className="st4" cx="792.72" cy="551.85" r="355.35"/>
      <motion.path animate={draw} strokeWidth="2" transition={t(3)} className="st2" d="M797 47.15L358.89 805.97h876.22z" id="tri-4"/>
      <motion.path animate={draw} strokeWidth="2" transition={t(3)} className="st2" d="M797.47 104.88L410.22 775.61h774.5z" id="tri-3"/>
      <motion.path animate={draw} strokeWidth="2" transition={t(3)} className="st2" d="M798.47 157.33L457.42 748.06h682.11z" id="tri-2"/>
      <motion.path animate={draw} strokeWidth="2" transition={t(3)} fill="none" stroke="#ff3d00" stroke-width="2" stroke-miterlimit="10" d="M798.47 218L509.39 718.71h578.17z" id="tri-1"/>
      <motion.path animate={draw} strokeWidth="2" transition={t(3)} fill="none" stroke="#ff3d00" stroke-width="2" stroke-miterlimit="10" d="M798.47 218L509.39 718.71h578.17z" id="tri-1" className="blursed" filter="url(#blursed)"/>
    </g>
    <g id="logo">
      <g id="ship">
        <motion.path animate={draw} transition={t(6)} strokeWidth="3" className="st5" d="M801.77 296h-1.07c-5.37 4.82-130.37 118.97-130.37 378.36v16.08l15.56-3.22c4.29-1.07 59.55-13.4 114.81-51.98 55.26 38.59 111.06 50.91 114.81 51.98l15.56 3.22v-16.08c.54-259.39-123.93-373.54-129.3-378.36z"/>
        <motion.path animate={draw} transition={t(6)} strokeWidth="3" className="st5" d="M801.24 333.51c20.39 24.65 55.26 75.56 78.87 154.88-14.49 50.91-45.6 87.89-78.87 114.69-33.26-26.26-64.38-63.24-78.87-114.69 10.73-35.91 23.07-64.85 34.87-87.35 16.1-31.08 32.19-53.59 44-67.53zM696.62 657.74c1.07-47.7 6.44-89.5 14.49-125.94 17.17 36.44 41.85 64.85 68.14 86.82-32.74 20.9-64.39 33.23-82.63 39.12zm126.61-39.12c26.29-21.97 50.97-50.38 68.14-87.35 8.05 36.98 13.41 78.78 14.49 125.94-18.25-5.36-49.9-17.15-82.63-38.59z"/>
      </g>
      <motion.ellipse animate={draw} transition={t(8)} strokeWidth="5" cx="802.86" cy="461.66" rx="31.17" ry="30.87" fill="none" stroke="#ff3d00" stroke-width="4" stroke-miterlimit="10" id="eye"/>
      <motion.ellipse animate={draw} transition={t(8)} strokeWidth="5" cx="802.86" cy="461.66" rx="31.17" ry="30.87" fill="none" stroke="#ff3d00" stroke-width="4" stroke-miterlimit="10" id="eye" className="blursed" filter="url(#blursed)" />
    </g>
  </svg>
  )
}

export default HeroScene