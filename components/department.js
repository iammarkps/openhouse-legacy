import React from 'react'
import styled from 'styled-components'
import { Title } from './design/components'
import { ParallaxLayer } from 'react-spring'
import { MOBILE } from '../components/design/withViewType'
import TUCMCLogo from '../static/logos/tucmc.svg'
import TUSCLogo from '../static/logos/tusc.svg'
import { Grid, Row, Col } from 'react-flexbox-grid'

const Center = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
`

const CenterTitle = styled(Title)`
  text-align: center;
`

const LogoWrapper = styled.div`
  opacity: 0.5;
  transition: opacity 0.4s ease;

  :hover {
    opacity: 0.8;
  }
`

export class Department extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <ParallaxLayer
          offset={this.props.viewType === MOBILE ? 6 : 3}
          speed={0.5}
        >
          <div style={{ marginTop: '50px' }}>
            <Grid fluid>
              <Row>
                <Col xs={24}>
                  <CenterTitle>หน่วยงาน</CenterTitle>
                </Col>
              </Row>
              <Row>
                <Col md={8} mdOffset={8}>
                  <p>คณะกรรมการนักเรียน</p>
                  <p>คณะกรรมการกลางงานกิจกรรมพัฒนาผู้เรียน</p>
                  <p>กลุ่มนักเรียนเอไอซี</p>
                  <p>สวนพฤกษศาสตร์โรงเรียน</p>
                </Col>
              </Row>
            </Grid>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={this.props.viewType === MOBILE ? 6 : 3}
          speed={3}
        >
          <Center>
            <Grid fluid>
              <Row>
                <Col md={4} mdOffset={2}>
                  <br />
                  <br />
                  <LogoWrapper>
                    <TUSCLogo />
                  </LogoWrapper>
                </Col>
                <Col md={4} mdOffset={2}>
                  <br />
                  <br />
                  <LogoWrapper>
                    <TUCMCLogo />
                  </LogoWrapper>
                </Col>
                <Col md={4} mdOffset={2}>
                  <br />
                  <br />
                  <LogoWrapper>
                    <img
                      src="/static/logos/aic1.png"
                      height="110"
                      width="110"
                    />
                  </LogoWrapper>
                </Col>
                <Col md={4} mdOffset={2}>
                  <br />
                  <br />
                  <LogoWrapper>
                    <TUSCLogo />
                  </LogoWrapper>
                </Col>
              </Row>
            </Grid>
          </Center>
        </ParallaxLayer>
      </React.Fragment>
    )
  }
}
