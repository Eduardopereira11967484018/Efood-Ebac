import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const colors = {
  background: '#FFF8F2',
  primary: '#E66767',
  secundary: '#FFEBD9' // Corrigido o nome da variável de 'secundary' para 'secondary'
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
    font-size: 16px; // Define uma base para a fonte
    line-height: 1.5; // Melhora a legibilidade
  }

  .container {
    max-width: 1200px; // Ajuste para telas grandes
    width: 100%;
    margin: 0 auto;
    padding: 0 2vw; // Usa unidades relativas para padding lateral

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 90%; // Reduz o máximo para desktops menores
      padding: 0 4vw; // Aumenta o padding lateral para desktops menores
    }

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 85%; // Reduz o máximo para tablets
      padding: 0 6vw; // Aumenta o padding lateral para tablets
    }

    @media (max-width: ${breakpoints.mobile}) {
      max-width: 95%; // Reduz o máximo para dispositivos móveis
      padding: 0 8vw; // Aumenta o padding lateral para dispositivos móveis
    }
  }
`

export const BtnProduct = styled.button`
  width: 100%; // Faz o botão ocupar toda a largura disponível
  max-width: 304px; // Define uma largura máxima
  height: 18px; // Ajusta a altura para uma aparência mais consistente
  background-color: #fff;
  color: ${colors.primary};
  border: 5px; // Remove a borda
  font-family: Roboto, sans-serif;
  font-size: 1rem; // Usa uma unidade relativa para o tamanho da fonte
  font-weight: 700;
  line-height: 1.5; // Melhora a legibilidade
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem; // Adiciona padding interno para o botão
  transition: background-color 0.3s ease, transform 0.3s ease; // Adiciona uma transição suave para mudanças de cor e transformação
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Adiciona uma sombra leve para dar profundidade

  &:hover {
    background-color: ${colors.secundary}; // Altera a cor de fundo ao passar o mouse
    transform: scale(
      1.05
    ); // Adiciona um leve efeito de aumento ao passar o mouse
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 36px; // Ajusta a altura do botão para tablets
    font-size: 0.9rem; // Reduz o tamanho da fonte para tablets
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 20px; // Ajusta a altura do botão para dispositivos móveis
    font-size: 0.8rem; // Reduz o tamanho da fonte para dispositivos móveis
    padding: 0 0.8rem; // Ajusta o padding para dispositivos móveis
  }
`

export default GlobalStyle
