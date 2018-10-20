import React from 'react'
import { beat, fontSize, ViewType } from '../components/design'
import { Title } from './design/components'
import styled from 'styled-components'
import { Row, Col } from 'antd'

export class Clubs extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: '50px' }}>
        <Row>
          <Col md={6} offset={1}>
            <Title>กิจกรรมชมรม</Title>
          </Col>
        </Row>
        <Row>
          <Col md={5} offset={1}>
            <p>คณิตศาสตร์</p>
            <p>วิทยาศาสตร์</p>
            <p>สังคมศึกษา</p>
            <p>ภาษาไทย</p>
            <p>ภาษาอังกฤษ</p>
            <p>ห้องสมุด</p>
            <p>ศาสนาและวัฒนธรรม</p>
            <p>นาฎศิลป์</p>
            <p>วาทศิลป์</p>
            <p>วรรณศิลป์ ต.อ.</p>
          </Col>
          <Col md={5} offset={1}>
            <p>ดนตรีไทย</p>
            <p>ดนตรีสากล</p>
            <p>ศิลปศึกษา</p>
            <p>ดุริยางค์</p>
            <p>เพื่อนที่ปรึกษา</p>
            <p>นันทนาการกีฬา</p>
            <p>ผู้บำเพ็ญประโยชน์</p>
            <p>ผู้นำเยาวชนสาธารณสุข</p>
            <p>อนุรักษ์ธรรมชาติ ฯ</p>
            <p>เพาะพันธุ์ไม้</p>
          </Col>
          <Col md={5} offset={1}>
            <p>ครอสเวิร์ด</p>
            <p>คอมพิวเตอร์</p>
            <p>ถ่ายภาพ</p>
            <p>สิ่งละอันพันละน้อย</p>
            <p>ค้นพบตนเอง</p>
            <p>ขับร้องและประสานเสียง</p>
            <p>กฎหมายน่ารู้</p>
            <p>สร้างสรรค์หนังสือ</p>
            <p>การ์ตูน</p>
            <p>นิเทศศิลป์</p>
          </Col>
          <Col md={5} offset={1}>
            <p>พัฒนาศักยภาพทางวิทยาศาสตร์</p>
            <p>ของเล่นเพื่อการเรียนรู้</p>
            <p>ภาพยนตร์สั้นและสื่อโทรทัศน​์</p>
            <p>เศรษฐศาสตร์</p>
            <p>โลกทั้งระบบ</p>
            <p>สันทนากร</p>
            <p>โลกศาสตร์</p>
            <p>สีสรรพ์ภาษาต่างประเทศที่ 2</p>
          </Col>
        </Row>
      </div>
    )
  }
}
