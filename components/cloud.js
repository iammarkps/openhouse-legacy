import React from 'react'
import { Parallax } from 'react-spring'

export class Cloud extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src="../static/assets/svg/cloud.svg"
            style={{ display: 'block', width: '20%', marginLeft: '55%' }}
          />
          <img
            src="../static/assets/svg/cloud.svg"
            style={{ display: 'block', width: '10%', marginLeft: '15%' }}
          />
        </Parallax.Layer>
        <Parallax.Layer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src="../static/assets/svg/cloud.svg"
            style={{ display: 'block', width: '20%', marginLeft: '70%' }}
          />
          <img
            src="../static/assets/svg/cloud.svg"
            style={{ display: 'block', width: '20%', marginLeft: '40%' }}
          />
        </Parallax.Layer>
        <Parallax.Layer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src="../static/assets/svg/cloud.svg"
            style={{ display: 'block', width: '10%', marginLeft: '10%' }}
          />
          <img
            src="../static/assets/svg/cloud.svg"
            style={{ display: 'block', width: '20%', marginLeft: '75%' }}
          />
        </Parallax.Layer>
        <Parallax.Layer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src="../static/assets/svg/cloud.svg"
            style={{ display: 'block', width: '20%', marginLeft: '60%' }}
          />
          <img
            src="../static/assets/svg/cloud.svg"
            style={{ display: 'block', width: '25%', marginLeft: '30%' }}
          />
          <img
            src="../static/assets/svg/cloud.svg"
            style={{ display: 'block', width: '10%', marginLeft: '80%' }}
          />
        </Parallax.Layer>
      </React.Fragment>
    )
  }
}
