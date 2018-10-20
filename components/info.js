import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import { beat, fontSize, ViewType } from './design'
import { Title } from './design/components'

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
            <p>โครงการพัฒนาศักยภาพด้านคณิตศาสตร์</p>
            <p>โครงการพัฒนาศักยภาพด้านวิทยาศาสตร์</p>
            <p>โครงการพัฒนาศักยภาพด้านภาษาไทย</p>
            <p>โครงการพัฒนาศักยภาพด้านภาษาอังกฤษ</p>
          </Col>
        </Row>
      </div>
    )
  }
}
