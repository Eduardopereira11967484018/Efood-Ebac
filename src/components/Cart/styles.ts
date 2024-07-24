import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonLink } from '../Button/styles'
import lixeira from '../../assets/images/lixeira.svg'
import InputMask from 'react-input-mask'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  overflow-y: auto;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.primary};
  z-index: 1;
  padding: 2.5rem 1rem 0 1rem; /* Usar unidades relativas */
  max-width: 360px;
  width: 100%;
  box-sizing: border-box;

  ${ButtonLink} {
    display: block;
    max-width: 100%;
    width: 100%;
    margin: 0;
    background-color: ${colors.secundary};
    color: ${colors.primary};
    font-weight: bold;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1.5rem;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 1rem; /* Usar unidades relativas */
  color: #fff;
  margin: 1.5rem 0; /* Usar unidades relativas */
  display: flex;
  justify-content: space-between;

  span {
    font-size: 0.75rem; /* Usar unidades relativas */
    color: ${colors.secundary};
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.secundary};
  padding: 0.5rem;
  position: relative;
  margin-bottom: 1rem; /* Usar unidades relativas */

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 0.5rem;
  }
  h3 {
    color: ${colors.primary};
    font-weight: bold;
    font-size: 1rem; /* Usar unidades relativas */
    margin-bottom: 1rem; /* Usar unidades relativas */
  }
  span {
    display: block;
    color: ${colors.primary};
    font-size: 0.875rem; /* Usar unidades relativas */
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    img {
      height: 60px;
      width: 60px;
    }
    button {
      width: 20px;
      height: 20px;
    }
  }
`

export const Delivery = styled.div`
  h3 {
    color: ${colors.secundary};
    width: 100%;
    height: 19px;
    font-weight: bold;
    font-size: 1rem; /* Usar unidades relativas */
    line-height: 1.25;
    margin-bottom: 1rem; /* Usar unidades relativas */
  }
  label {
    color: ${colors.secundary};
  }
  input {
    height: 2rem;
    margin: 0.5rem 0; /* Usar unidades relativas */
    background-color: ${colors.secundary};
    border: none;

    &.error {
      border: 3px solid red;
    }
  }

  > p {
    color: ${colors.secundary};
    font-size: 0.875rem; /* Usar unidades relativas */
    line-height: 1.57;
    margin-bottom: 1.5rem; /* Usar unidades relativas */
  }
`

export const InputDelivery = styled.input`
  width: 100%;
  max-width: 344px; /* Ajustar largura máxima */
  height: 2rem;
  display: block;
  margin: 0.5rem 0; /* Usar unidades relativas */
  background-color: ${colors.secundary};
  border: none;

  &.error {
    border: 3px solid red;
  }
`

export const InputsWithDisplayFlex = styled.div`
  display: flex;
  column-gap: 1.375rem; /* Usar unidades relativas */
  flex-wrap: wrap; /* Permite quebra de linha em telas menores */
`

export const InputNumber = styled(InputMask)`
  width: 100%;
  max-width: 218px; /* Ajustar largura máxima */
`

export const InputCode = styled(InputMask)`
  width: 100%;
  max-width: 87px; /* Ajustar largura máxima */
`
