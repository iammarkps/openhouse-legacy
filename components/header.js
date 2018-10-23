import React from 'react'
import { beat, fontSize, Fonts, ViewType } from '../components/design'
import styled, { keyframes } from 'styled-components'
import { ParallaxLayer } from 'react-spring'

const fadein = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
const Container = styled.div`
  background-color: black;
  animation: ${fadein} 2s;
`

const Center = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`
const Title = styled.div`
  color: white;
  padding-left: 100px;
  padding-bottom: ${beat(1)};
  font-size: ${fontSize(14)};
  font-weight: 700;
  font-family: ${Fonts.display};
  ${ViewType.mobile} {
    font-size: ${fontSize(7)};
    padding-left: 50px;
  }
  ${ViewType.xsMobile} {
    font-size: ${fontSize(5)};
    padding-left: 50px;
  }
`

export class Header extends React.PureComponent {
  render() {
    return (
      <ParallaxLayer offset={0} speed={0.5}>
        <Container>
          <Center>
            <Title>TRIAM UDOM</Title>
            <Title>OPEN HOUSE</Title>
            <Title>2019</Title>
          </Center>
        </Container>
      </ParallaxLayer>
    )
  }
}
