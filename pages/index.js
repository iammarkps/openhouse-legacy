import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring'
import styled from 'styled-components'

import { Layout } from '../components/layout'
import { Header } from '../components/header'
import { Department } from '../components/department'
import { Info } from '../components/info'
import { Clubs } from '../components/clubs'
import { Cloud } from '../components/cloud'

import { enhance, MOBILE } from '../components/design/withViewType'
import { beat, fontSize, Tracking } from '../components/design'
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

const Scroll = () => (
  <ParallaxLayer offset={0} speed={0.1}>
    <ScrollWrapper>S C R O L L</ScrollWrapper>
  </ParallaxLayer>
)

class Index extends React.PureComponent {
  componentDidMount() {
    console.log(`
    แต่สิ่งที่ ไม่เปลี่ยน ยังเวียนวน
    คือความรัก ศักดิ์ตน ทุกสมัย
    ได้ชื่อว่า ต.อ. ย่อมพอใจ
    พระเกี้ยวน้อย ยิ่งใหญ่ ตลอดกาล`)
  }
  render() {
    return (
      <Layout>
        <Parallax
          pages={this.props.viewType === MOBILE ? 7 : 4}
          ref={el => (this.parallax = el)}
        >
          {/* <Cloud /> */}
          <Parallax.Layer
            offset={1}
            speed={0}
            factor={3}
            style={{
              backgroundImage: "url('/static/assets/svg/star.svg')",
              backgroundSize: 'cover'
            }}
          />
          <Header />
          <Scroll viewType={this.props.viewType} />
          <Info viewType={this.props.viewType} />
          <Clubs viewType={this.props.viewType} />
          <Department viewType={this.props.viewType} />
        </Parallax>
      </Layout>
    )
  }
}

export default enhance(Index)
