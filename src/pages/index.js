import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Head from '../theme/Head'
import Layout from '../theme/Layout'
import DisplayHeading from '../components/Typography/DisplayHeading'
import StyledHero from '../components/Hero/StyledHero'
import ListItem from '../components/List/ListItem'
import StyledBox from '../components/Content/StyledBox'
import Heading from '../components/Typography/Heading'

import HeroScene from '../components/SVG/HeroScene'
import Saturn from '../components/SVG/Saturn'
import Neptune from '../components/SVG/Neptune'
import Uranus from '../components/SVG/Uranus'
import Pluto from '../components/SVG/Pluto'

import { colors } from '../styles/base/variables'
import { fade, slideL } from '../utils/animationDefs'
import Services from '../components/Content/Services'

const WorkQuery = graphql`
  query WorkItemsQuery {
    site {
      siteMetadata {
        work {
          name
          img
          url
          services
        }
      }
    }
  }
`

const Home = ({ work }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: [0.0, 1.0]
  })

  return (
    <Layout>
      <Head title="House of Giants" titleTemplate="%s" />
      <StyledHero>
        <div>
          <DisplayHeading>House of Giants</DisplayHeading>
          <motion.div className="blurb" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} transition={{ duration: 1.0, ease: "easeInOut" }}>
            <h5>Fig <small>I .</small></h5>
            <p>Dreaming of <span>innovation</span>, experimenting with <span>dedication</span>, creating web applications with <span>purpose</span>. Living in the pursuit of <span>prosperity</span>, our greatest accomplishments are ahead of us.</p>
          </motion.div>
        </div>
        <HeroScene />
        <HeroScene />
      </StyledHero>
      <StyledBox id="work" bg={colors.richBlack} bb={`1px solid ${colors.tulip}`} color={colors.mintCream} fullH>
          {work.map( (workItem, i) => <ListItem key={workItem.name} name={workItem.name} img={workItem.img} url={workItem.url} count={`${i + 1 <= 9 ? '0' : ''}${i + 1}.`} services={workItem.services} /> )}
      </StyledBox>
      <StyledBox id="about" fullH row bb={`1px solid ${colors.tulip}`} color={colors.gallery}>
        <div className="wrapper">
          <Services />
        </div>
      </StyledBox>
      <StyledBox id="contact" fullH color={colors.gallery}>
        <div className="wrapper">
          <motion.h5 ref={ref} variants={slideL} animate={inView ? "shown" : "hidden"}>Fig <small>IX .</small></motion.h5>
          <Heading>Let&rsquo;s Get Rollin&rsquo;</Heading>
          <motion.div ref={ref} variants={fade} animate={inView ? "shown" : "hidden"}>
            <p>House of Giants is a small crew of web designers and developers out of Denver, Colorado.</p>
            <p>We are currently taking new work. Get in touch and tell us about your project! <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#104;&#111;&#117;&#115;&#101;&#111;&#102;&#103;&#105;&#097;&#110;&#116;&#115;&#046;&#099;&#111;&#109;">&#104;&#101;&#108;&#108;&#111;&#064;&#104;&#111;&#117;&#115;&#101;&#111;&#102;&#103;&#105;&#097;&#110;&#116;&#115;&#046;&#099;&#111;&#109;</a></p>
          </motion.div>
        </div>
      </StyledBox>
    </Layout>
  )
}

export default () => (
  <StaticQuery
    query={WorkQuery}
    render={data => <Home work={data.site.siteMetadata.work} />}
  />
)
