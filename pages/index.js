import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring'
import styled from 'styled-components'

import { Layout } from '../components/layout'
import { Header } from '../components/header'
import { Department } from '../components/department'
import { Info } from '../components/info'
import { Clubs } from '../components/clubs'

import { enhance, MOBILE } from '../components/design/withViewType'
import { beat, fontSize, Tracking } from '../components/design'
import 'antd/dist/antd.css'

const ScrollParent = styled.div`
  letter-spacing: ${Tracking.wide};
  font-size: ${fontSize(-3)};
`
const Scroll = styled.div`
  width: 1;
  height: ${beat(3)};
  margin: ${beat(1)} auto;
  color: white;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`

class Index extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Parallax
          pages={this.props.viewType === MOBILE ? 6 : 4}
          ref={ref => (this.parallax = ref)}
        >
          <ParallaxLayer offset={0} speed={0.5}>
            <Header />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={-1}>
            <ScrollParent>
              <Scroll>S C R O L L</Scroll>
            </ScrollParent>
          </ParallaxLayer>
          <ParallaxLayer
            factor={this.props.viewType === MOBILE ? 2 : 1}
            offset={1}
            speed={0.5}
          >
            <Info />
          </ParallaxLayer>
          <ParallaxLayer
            factor={this.props.viewType === MOBILE ? 2 : 1}
            offset={this.props.viewType === MOBILE ? 3 : 2}
            speed={0.5}
          >
            <Clubs />
          </ParallaxLayer>
          <ParallaxLayer
            offset={this.props.viewType === MOBILE ? 4 : 3}
            speed={0.5}
          >
            <Department />
          </ParallaxLayer>
        </Parallax>
      </Layout>
    )
  }
}

export default enhance(Index)
