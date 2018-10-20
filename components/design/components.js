import styled from 'styled-components'
import { beat, fontSize, ViewType } from './index'

export const Title = styled.div`
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
