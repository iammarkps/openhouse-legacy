import React from 'react'
import { Header } from '../components/header'
import { Layout } from '../components/layout'
import { Parallax, ParallaxLayer } from 'react-spring'
import styled from 'styled-components'
import { beat, fontSize, Tracking } from '../components/design'
import { Info } from '../components/info'
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

export default class Index extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Parallax pages={2} ref={ref => (this.parallax = ref)}>
          <ParallaxLayer offset={0} speed={0.5}>
            <Header />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={-1}>
            <ScrollParent>
              <Scroll>S C R O L L</Scroll>
            </ScrollParent>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <Info />
          </ParallaxLayer>
        </Parallax>
      </Layout>
    )
  }
}
