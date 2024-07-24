import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Banner = styled.div`
  width: 100%;
  height: 436px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; // Garante que a imagem não será cortada
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center; // Centraliza verticalmente
  align-items: center; // Centraliza horizontalmente

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
    z-index: 0;
  }
`

export const Category = styled.p`
  width: 101px;
  font-size: 32px;
  font-weight: 100;
  line-height: 38px;
  text-align: left;
  color: #fff;
  margin: 0;
  position: relative;
  z-index: 1;
  padding-top: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
    width: auto;
    text-align: center;
  }
`

export const Title = styled.p`
  width: 676px;
  font-size: 32px;
  font-weight: 900;
  line-height: 38px;
  text-align: left;
  color: #fff;
  margin: 0;
  padding-top: 20px;
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
    font-size: 24px;
    text-align: center;
  }
`
