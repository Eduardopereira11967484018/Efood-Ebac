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
  background-color: rgba(0, 0, 0, 0.7); /* Ajuste de opacidade */
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
  transition: transform 0.3s ease-in-out; /* Suavização na transição */

  &.is-open {
    display: flex;
    transform: translateX(0);
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.primary};
  z-index: 2; /* Ajuste de z-index para garantir que o sidebar esteja acima do overlay */
  padding: 2.5rem 1rem 0 1rem;
  max-width: 360px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); /* Sombra para destaque */

  ${ButtonLink} {
    display: block;
    max-width: 100%;
    width: 100%;
    margin: 0;
    background-color: ${colors.secundary};
    color: ${colors.primary};
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${colors.primary}; /* Efeito de hover */
      color: ${colors.secundary};
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1.5rem;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
  margin: 1.5rem 0;
  display: flex;
  justify-content: space-between;

  span {
    font-size: 0.75rem;
    color: ${colors.secundary};
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.secundary};
  padding: 0.5rem;
  position: relative;
  margin-bottom: 1rem;
  border-radius: 5px; /* Bordas arredondadas */
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02); /* Efeito de hover */
  }

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 0.5rem;
    border-radius: 5px; /* Bordas arredondadas para a imagem */
  }

  h3 {
    color: ${colors.primary};
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 0.5rem; /* Ajuste na margem */
  }

  span {
    display: block;
    color: ${colors.primary};
    font-size: 0.875rem;
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

    &:hover {
      opacity: 0.8; /* Efeito de hover no botão */
    }
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
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.25;
    margin-bottom: 1rem;
  }

  label {
    color: ${colors.secundary};
  }

  input {
    height: 2rem;
    margin: 0.5rem 0;
    background-color: ${colors.secundary};
    border: none;
    border-radius: 5px; /* Bordas arredondadas */

    &.error {
      border: 3px solid red;
    }
  }

  > p {
    color: ${colors.secundary};
    font-size: 0.875rem;
    line-height: 1.57;
    margin-bottom: 1.5rem;
  }
`

export const InputDelivery = styled.input`
  width: 100%;
  max-width: 344px;
  height: 2rem;
  display: block;
  margin: 0.5rem 0;
  background-color: ${colors.secundary};
  border: none;
  border-radius: 5px; /* Bordas arredondadas */

  &.error {
    border: 3px solid red;
  }
`

export const InputsWithDisplayFlex = styled.div`
  display: flex;
  column-gap: 1.375rem;
  flex-wrap: wrap; /* Permite quebra de linha em telas menores */
`

export const InputNumber = styled(InputMask)`
  width: 100%;
  max-width: 218px;
  border-radius: 5px; /* Bordas arredondadas */
`

export const InputCode = styled(InputMask)`
  width: 100%;
  max-width: 87px;
  border-radius: 5px; /* Bordas arredondadas */
`
