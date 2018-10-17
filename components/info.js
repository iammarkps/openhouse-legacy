import React from 'react'
import { beat, fontSize, ViewType } from '../components/design'
import styled from 'styled-components'
import { Row, Col } from 'antd'

const Title = styled.div`
  color: white;
  padding-bottom: ${beat(1)};
  font-size: ${fontSize(7)};
  font-weight: 400;
  font-family: Kanit;
  ${ViewType.mobile} {
    font-size: ${fontSize(4)};
  }
  ${ViewType.xsMobile} {
    font-size: ${fontSize(3)};
  }
`

export class Info extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: '50px' }}>
        <Row>
          <Col md={6} offset={1}>
            <Title>แผนการเรียน</Title>
          </Col>
        </Row>
        <Row>
          <Col md={7} offset={1}>
            <p>วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาเยอรมัน</p>
            <p>วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาฝรั่งเศส</p>
            <p>วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาสเปน</p>
            <p>วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาจีน</p>
            <p>วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาเกาหลี</p>
            <p>วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาญี่ปุ่น</p>
          </Col>
          <Col md={7} offset={1}>
            <p>ภาษา - ภาษาจีน</p>
            <p>ภาษา - ภาษาญี่ปุ่น</p>
            <p>ภาษา - ภาษาเกาหลี</p>
            <p>ภาษา - ภาษาเยอรมัน</p>
            <p>ภาษา - ภาษาสเปน</p>
            <p>ภาษา - ภาษาฝรั่งเศส</p>
          </Col>
          <Col md={7} offset={1}>
            <p>ภาษา - คณิต</p>
            <p>โครงการพัฒนาศักยภาพด้านคณิตศาสตร์ (GM)</p>
            <p>โครงการพัฒนาศักยภาพด้านวิทยาศาสตร์ (GS)</p>
            <p>โครงการพัฒนาศักยภาพด้านภาษาไทย (GT)</p>
            <p>โครงการพัฒนาศักยภาพด้านภาษาอังกฤษ (GE)</p>
          </Col>
        </Row>
      </div>
    )
  }
}
