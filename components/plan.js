import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import { beat, fontSize, ViewType } from './design'
import { Title } from './design/components'
import TUCMCLogo from './design/logos/tucmc.svg'

const CenterTitle = styled(Title)`
  text-align: center;
`

export class Department extends React.PureComponent {
  render() {
    return (
      <div style={{ paddingTop: '50px' }}>
        <Row>
          <Col span={24}>
            <CenterTitle>ผังงาน</CenterTitle>
          </Col>
        </Row>
        <Row>
          <Col md={8} offset={8}>
            <p>คณะกรรมการนักเรียน</p>
            <p>คณะกรรมการกลางงานกิจกรรมพัฒนาผู้เรียน</p>
            <p>กลุ่มนักเรียนเอไอซี</p>
            <p>สวนพฤกษศาสตร์โรงเรียน</p>
            <TUCMCLogo />
          </Col>
        </Row>
      </div>
    )
  }
}
