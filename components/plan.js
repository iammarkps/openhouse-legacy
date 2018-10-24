import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Title } from './design/components'

const CenterTitle = styled(Title)`
  text-align: center;
`

export class Department extends React.PureComponent {
  render() {
    return (
      <div style={{ marginTop: '50px' }}>
        <Grid fluid>
          <Row>
            <Col xs={24}>
              <CenterTitle>ผังงาน</CenterTitle>
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={8}>
              <p>คณะกรรมการนักเรียน</p>
              <p>คณะกรรมการกลางงานกิจกรรมพัฒนาผู้เรียน</p>
              <p>กลุ่มนักเรียนเอไอซี</p>
              <p>สวนพฤกษศาสตร์โรงเรียน</p>
              <TUCMCLogo />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
