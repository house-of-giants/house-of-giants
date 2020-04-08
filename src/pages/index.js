import React from 'react'
import styled from 'styled-components'
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

import { colors, sp, fs } from '../styles/base/variables'
import { fade } from '../utils/animationDefs'

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

const StyledContent = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${sp.xl};

  & p {
    font-size: ${fs.lg};
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
        <DisplayHeading>House of Giants</DisplayHeading>
        <motion.div className="blurb" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} transition={{ duration: 2.0, ease: "easeInOut", delay: 10 }}>
          <p>Dreaming of <span>innovation</span>, experimenting with <span>dedication</span>, creating web applications with <span>purpose</span>. Living in the pursuit of <span>prosperity</span>, our greatest accomplishments are ahead of us.</p>
        </motion.div>
        <HeroScene />
      </StyledHero>
      <StyledBox id="work" bg={colors.richBlack} color={colors.mintCream} fullH>
          {work.map( (workItem, i) => <ListItem key={workItem.name} name={workItem.name} img={workItem.img} url={workItem.url} count={`${i + 1 <= 9 ? '0' : ''}${i + 1}.`} services={workItem.services} /> )}
      </StyledBox>
      <StyledBox fullH id="about">
        <div className="wrapper">
          <Heading>Who are we?</Heading>
          <StyledContent ref={ref} variants={fade} animate={inView ? "shown" : "hidden"}>
            <p>House of Giants is a small crew of web designers and developers out of Denver, Colorado.</p>
            <p>We are currently <strong>AVAILABLE</strong> for hire! Get at us <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#104;&#111;&#117;&#115;&#101;&#111;&#102;&#103;&#105;&#097;&#110;&#116;&#115;&#046;&#099;&#111;&#109;">&#104;&#101;&#108;&#108;&#111;&#064;&#104;&#111;&#117;&#115;&#101;&#111;&#102;&#103;&#105;&#097;&#110;&#116;&#115;&#046;&#099;&#111;&#109;</a></p>
          </StyledContent>
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
