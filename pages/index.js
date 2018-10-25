import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring'
import Particles from 'react-particles-js'

import styled from 'styled-components'

import { Layout } from '../components/layout'
import { Header } from '../components/header'
import { Department } from '../components/department'
import { Info } from '../components/info'
import { Clubs } from '../components/clubs'
import { Cloud } from '../components/cloud'

import { enhance, MOBILE } from '../components/design/withViewType'
import { beat, fontSize, Tracking } from '../components/design'
import { PARTICLES_CONFIG } from '../components/design'
import 'antd/dist/antd.css'

const ScrollWrapper = styled.div`
  width: 1;
  height: ${beat(3)};
  margin: ${beat(1)} auto;
  color: white;
  position: absolute;
  text-align: center;
  bottom: 0;
  width: 100%;
  letter-spacing: ${Tracking.wide};
  font-size: ${fontSize(-3)};
`

const Scroll = React.memo(() => (
  <ParallaxLayer offset={0} speed={0.1}>
    <ScrollWrapper>S C R O L L</ScrollWrapper>
  </ParallaxLayer>
))

const StarBg = React.memo(() => (
  <Parallax.Layer
    offset={1}
    speed={0}
    factor={3}
    style={{
      backgroundImage: "url('/static/assets/svg/star.svg')",
      backgroundSize: 'cover'
    }}
  />
))

class Index extends React.PureComponent {
  render() {
    const { viewType } = this.props
    return (
      <Layout>
        <Parallax
          pages={viewType === MOBILE ? 7 : 4}
          ref={el => (this.parallax = el)}
        >
          {/* <Cloud /> */}
          <StarBg />
          <Header />
          <Scroll viewType={viewType} />
          <Info viewType={viewType} />
          <Clubs viewType={viewType} />
          <Department viewType={viewType} />
        </Parallax>
      </Layout>
    )
  }
}

export default enhance(Index)
