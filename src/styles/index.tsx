import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const colors = {
  background: '#FFF8F2',
  primary: '#E66767',
  secundary: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '450px'
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }

  body {
    background-color: ${colors.background};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px; /* Adiciona algum padding para evitar que o conteúdo encoste nas bordas da tela */

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 90%; /* Ajusta a largura máxima para desktops menores */
    }

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 95%; /* Ajusta a largura máxima para tablets */
    }

    @media (max-width: ${breakpoints.mobile}) {
      max-width: 100%; /* Ajusta a largura máxima para dispositivos móveis */
      padding: 0 8px; /* Reduz o padding em dispositivos móveis */
    }
  }
`

export const BtnProduct = styled.button`
  width: 100%;
  max-width: 304px; /* Garante que o botão não fique muito largo em telas grandes */
  height: 36px; /* Ajusta a altura do botão para uma aparência melhor em dispositivos móveis */
  background-color: #fff;
  color: ${colors.primary};
  border: transparent;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  cursor: pointer;
  padding: 0 16px; /* Adiciona algum padding interno ao botão para melhor espaçamento */

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px; /* Reduz o tamanho da fonte em dispositivos menores */
    height: 32px; /* Ajusta a altura para dispositivos menores */
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 10px; /* Reduz ainda mais o tamanho da fonte em dispositivos móveis */
    height: 28px; /* Ajusta a altura para dispositivos móveis */
  }
`

export default GlobalStyle
