import React from "react";
import { Row, Col } from "antd";
import { Title } from "./design/components";
import { MOBILE } from "../components/design/withViewType";
import { ParallaxLayer } from "react-spring/dist/addons.cjs";

const sciMath = [
  "วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาเยอรมัน",
  "วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาฝรั่งเศส",
  "วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาสเปน",
  "วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาจีน",
  "วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาเกาหลี",
  "วิทยาศาสตร์ - คณิตศาสตร์ - ภาษาญี่ปุ่น"
];

const art = [
  "ภาษา - ภาษาจีน",
  "ภาษา - ภาษาญี่ปุ่น",
  "ภาษา - ภาษาเกาหลี",
  "ภาษา - ภาษาเยอรมัน",
  "ภาษา - ภาษาสเปน",
  "ภาษา - ภาษาฝรั่งเศส"
];

const gifted = [
  "โครงการพัฒนาศักยภาพด้านคณิตศาสตร์",
  "โครงการพัฒนาศักยภาพด้านวิทยาศาสตร์",
  "โครงการพัฒนาศักยภาพด้านภาษาไทย",
  "โครงการพัฒนาศักยภาพด้านภาษาอังกฤษ"
];

export class Info extends React.Component {
  render() {
    return (
      <ParallaxLayer
        factor={this.props.viewType === MOBILE ? 2 : 1}
        offset={1}
        speed={0.5}
      >
        <div style={{ marginTop: "50px" }}>
          <Row>
            <Col md={6} offset={1}>
              <Title>แผนการเรียน</Title>
            </Col>
          </Row>
          <Row>
            <Col md={7} offset={1}>
              {sciMath.map(content => (
                <p key={content}>{content}</p>
              ))}
            </Col>
            <Col md={7} offset={1}>
              {art.map(content => (
                <p key={content}>{content}</p>
              ))}
            </Col>
            <Col md={7} offset={1}>
              <p>ภาษา - คณิต</p>
              {gifted.map(content => (
                <p key={content}>{content}</p>
              ))}
            </Col>
          </Row>
        </div>
      </ParallaxLayer>
    );
  }
}
