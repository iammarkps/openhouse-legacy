import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import { Title } from './design/components'
import TUCMCLogo from '../static/logos/tucmc.svg'
import TUSCLogo from '../static/logos/tusc.svg'
import { Spring } from 'react-spring'

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
      <div style={{ paddingTop: '50px' }}>
        <Row>
          <Col span={24}>
            <CenterTitle>หน่วยงาน</CenterTitle>
          </Col>
        </Row>
        <Row>
          <Col md={8} offset={8}>
            <p>คณะกรรมการนักเรียน</p>
            <p>คณะกรรมการกลางงานกิจกรรมพัฒนาผู้เรียน</p>
            <p>กลุ่มนักเรียนเอไอซี</p>
            <p>สวนพฤกษศาสตร์โรงเรียน</p>
          </Col>
        </Row>
        <Row>
          <Col md={2} offset={4}>
            <br />
            <br />
            <LogoWrapper>
              <TUSCLogo />
            </LogoWrapper>
          </Col>
          <Col md={2} offset={2}>
            <br />
            <br />
            <LogoWrapper>
              <TUCMCLogo />
            </LogoWrapper>
          </Col>
        </Row>
      </div>
    )
  }
}
