import React from 'react'
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from './index'

export const XS_MOBILE = 'xs-mobile'
export const MOBILE = 'mobile'
export const TABLET = 'tablet'
export const DESKTOP = 'desktop'

function withViewType(Component) {
  return class Container extends React.PureComponent {
    state = { viewType: MOBILE, innerWidth: 0 }

    checkViewport = () => {
      const innerWidth = window.innerWidth
      if (innerWidth <= MOBILE_BREAKPOINT) {
        this.setState({ viewType: MOBILE, innerWidth })
      } else if (innerWidth <= TABLET_BREAKPOINT) {
        this.setState({ viewType: TABLET, innerWidth })
      } else {
        this.setState({ viewType: DESKTOP, innerWidth })
      }
    }

    componentDidMount() {
      this.timeout = setTimeout(this.checkViewport)
      window.addEventListener('resize', this.checkViewport)
    }

    componentWillUnmount() {
      clearTimeout(this.timeout)
      window.removeEventListener('resize', this.checkViewport)
    }

    render() {
      return (
        <Component
          viewType={this.state.viewType}
          innerWidth={this.state.innerWidth}
        />
      )
    }
  }
}

export const enhance = withViewType
