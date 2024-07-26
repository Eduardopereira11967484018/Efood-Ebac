import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  margin-top: 80px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 40px;
  }

  h1,
  h2,
  p {
    font-size: clamp(1rem, 2vw + 0.5rem, 1.5rem); /* Ajuste responsivo */
    line-height: 1.5; /* Melhora a legibilidade */
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    column-gap: 16px;
  }

  li {
    background-color: #f9f9f9; /* Cor de fundo para destacar os itens */
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    h3 {
      font-size: clamp(1rem, 2vw + 0.5rem, 1.25rem); /* Tamanho responsivo */
    }

    span {
      font-size: clamp(
        0.875rem,
        1.5vw + 0.25rem,
        1rem
      ); /* Tamanho responsivo */
    }
  }
`
