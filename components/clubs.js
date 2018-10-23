import React from 'react'
import { Title } from './design/components'
import { Row, Col } from 'antd'
import { MOBILE } from '../components/design/withViewType'
import { ParallaxLayer } from 'react-spring'

const clubsList = [
  'คณิตศาสตร์',
  'วิทยาศาสตร์',
  'สังคมศึกษา',
  'ภาษาไทย',
  'ภาษาอังกฤษ',
  'ห้องสมุด',
  'ศาสนาและวัฒนธรรม',
  'นาฎศิลป์',
  'วาทศิลป์',
  'วรรณศิลป์ ต.อ.',
  'ดนตรีไทย',
  'ดนตรีสากล',
  'ศิลปศึกษา',
  'ดุริยางค์',
  'เพื่อนที่ปรึกษา',
  'นันทนาการกีฬา',
  'ผู้บำเพ็ญประโยชน์',
  'ผู้นำเยาวชนสาธารณสุข',
  'อนุรักษ์ธรรมชาติ ฯ',
  'เพาะพันธุ์ไม้',
  'ครอสเวิร์ด',
  'คอมพิวเตอร์',
  'ถ่ายภาพ',
  'สิ่งละอันพันละน้อย',
  'ค้นพบตนเอง',
  'ขับร้องและประสานเสียง',
  'กฎหมายน่ารู้',
  'สร้างสรรค์หนังสือ',
  'การ์ตูน',
  'นิเทศศิลป์',
  'พัฒนาศักยภาพทางวิทยาศาสตร์',
  'ของเล่นเพื่อการเรียนรู้',
  'ภาพยนตร์สั้นและสื่อโทรทัศน​์',
  'เศรษฐศาสตร์',
  'โลกทั้งระบบ',
  'สันทนากร',
  'โลกศาสตร์',
  'สีสรรพ์ภาษาต่างประเทศที่ 2'
]

export class Clubs extends React.PureComponent {
  render() {
    const first = clubsList.slice(0, 10)
    const second = clubsList.slice(10, 20)
    const third = clubsList.slice(20, 30)
    const fourth = clubsList.slice(30, clubsList.length)
    return (
      <ParallaxLayer
        factor={this.props.viewType === MOBILE ? 2 : 1}
        offset={this.props.viewType === MOBILE ? 3 : 2}
        speed={0.5}
      >
        <div style={{ marginTop: '50px' }}>
          <Row>
            <Col md={6} offset={1}>
              <Title>กิจกรรมชมรม</Title>
            </Col>
          </Row>
          <Row>
            <Col md={5} offset={1}>
              {first.map(content => (
                <p>{content}</p>
              ))}
            </Col>
            <Col md={5} offset={1}>
              {second.map(content => (
                <p>{content}</p>
              ))}
            </Col>
            <Col md={5} offset={1}>
              {third.map(content => (
                <p>{content}</p>
              ))}
            </Col>
            <Col md={5} offset={1}>
              {fourth.map(content => (
                <p>{content}</p>
              ))}
            </Col>
          </Row>
        </div>
      </ParallaxLayer>
    )
  }
}
