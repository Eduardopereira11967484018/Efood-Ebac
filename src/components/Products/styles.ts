import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ContainerSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 56px;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const ContainerProduct = styled.div`
  width: 100%;
  max-width: 320px;
  background-color: ${colors.primary};
  margin-bottom: 32px;
  border-radius: 8px;
  box-sizing: border-box; /* Inclui padding e borda nas dimensões */

  & > div {
    padding: 8px;
    box-sizing: border-box; /* Inclui padding e borda nas dimensões */
  }
`

export const ImagemProduto = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const TitleProduct = styled.h3`
  width: 100%;
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  margin: 8px 0; /* Ajusta o margin para melhor alinhamento */
  color: #fff;
  text-align: center;
`

export const DescriptionProduct = styled.p`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 8px 0; /* Ajusta o margin para melhor alinhamento */
  color: #fff;
  text-align: center;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  z-index: 1;
  overflow: auto;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 16px;
  }

  &.isVisible {
    display: block;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    gap: 24px;
    background-color: ${colors.primary};
    position: relative;
    box-sizing: border-box;

    h4 {
      font-size: 18px;
      font-weight: bold;
      line-height: 21px;
      color: #fff;
      text-align: center;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      color: #fff;
      text-align: center;
      margin: 16px 0;
    }

    > img {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 16px;
      right: 16px;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ImagemPrato = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;

  > img {
    cursor: pointer;
  }
`

export const productDescription = styled.p`
  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
  }
`
