import React from 'react'
import styled from 'styled-components'
import {Row,Col} from 'antd'
import { MOBILE } from "../components/design/withViewType";
import {ParallaxLayer} from 'react-spring/dist/addons'

class Plan extends React.Component {
    render() {
        return(
            <React.Fragment>
                <ParallaxLayer offset={this.props.viewType} speed={}>
                <span>Plan!</span>
                </ParallaxLayer>
            </React.Fragment>
        )
    }
}