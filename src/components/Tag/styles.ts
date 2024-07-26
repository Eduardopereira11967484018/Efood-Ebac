import styled from 'styled-components'
import { colors, breakpoints } from '../../styles'
import { Props } from '.'

export const Tag = styled.div<Props>`
  width: ${(props) => (props.size === 'big' ? '121px' : '61px')};
  height: 26px;
  background-color: ${colors.primary};
  padding: 6px 4px;
  color: ${colors.secundary};
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
  text-align: center;
  position: absolute;
  top: 16px;
  right: ${(props) => (props.size === 'big' ? '85px' : '16px')};

  @media (max-width: ${breakpoints.tablet}) {
    width: ${(props) => (props.size === 'big' ? '100px' : '50px')};
    height: 22px;
    font-size: 10px;
    line-height: 12px;
    top: 12px;
    right: ${(props) => (props.size === 'big' ? '70px' : '12px')};
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: ${(props) => (props.size === 'big' ? '80px' : '40px')};
    height: 18px;
    font-size: 8px;
    line-height: 10px;
    top: 8px;
    right: ${(props) => (props.size === 'big' ? '50px' : '8px')};
  }
`
