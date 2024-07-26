import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { BtnProduct, colors } from '../../styles'

import close from '../../assets/images/close.png'

import { useGetTypeQuery } from '../../services/api'

import { openModal, closeModal } from '../../store/reducers/modal'
import { RootReducer } from '../../store'
import { addToCart, openCart } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'
import Loader from '../Loader'

const Products = () => {
  // Seleciona o estado do modal do Redux
  const { isOpen } = useSelector((state: RootReducer) => state.modal)
  const dispatch = useDispatch()

  // Obtém o parâmetro 'id' da URL
  const { id } = useParams()

  // Obtém os dados do alimento com base no 'id'
  const { data: food } = useGetTypeQuery(id!)

  // Estado local para armazenar o produto selecionado
  const [produto, setProduto] = useState<Item>()

  // Exibe um loader enquanto os dados do cardápio não estão disponíveis
  if (!food?.cardapio) {
    return <Loader />
  }

  // Função para obter uma descrição truncada se for muito longa
  const getDescription = (descricao: string) => {
    if (descricao.length > 120) {
      return descricao.slice(0, 117) + '...'
    }
  }

  // Função para abrir o modal e definir o produto selecionado
  const toOpenModal = (item: Item) => {
    setProduto(item)
    dispatch(openModal())
  }

  // Função para fechar o modal
  const toCloseModal = () => {
    dispatch(closeModal())
  }

  // Função para adicionar o produto ao carrinho e abrir o carrinho
  const toAddCart = () => {
    if (produto) {
      dispatch(addToCart(produto))
      dispatch(openCart())
      dispatch(closeModal())
    } else {
      // Exibe um erro se o produto não estiver definido
      ;<div>erro</div>
    }
  }

  return (
    <>
      <div className="container">
        <S.ContainerSection>
          {/* Verifica se há itens no cardápio e os exibe */}
          {food?.cardapio && food.cardapio.length > 0 ? (
            food.cardapio.map((item) => (
              <div key={item.id}>
                <div>
                  <S.ContainerProduct>
                    <div>
                      {/* Exibe a imagem do produto, o nome e uma descrição truncada */}
                      <S.ImagemProduto src={item.foto} alt="imagem do prato" />
                      <S.TitleProduct>{item.nome}</S.TitleProduct>
                      <S.DescriptionProduct>
                        {getDescription(item.descricao)}
                      </S.DescriptionProduct>
                      {/* Botão para adicionar o produto ao carrinho e abrir o modal */}
                      <BtnProduct
                        title={`Cliquei aqui para adicionar ${item.nome} ao carrinho`}
                        onClick={() => {
                          toOpenModal(item)
                        }}
                        style={{ backgroundColor: `${colors.secundary}` }}
                      >
                        Adicionar ao carrinho
                      </BtnProduct>
                    </div>
                  </S.ContainerProduct>
                </div>
              </div>
            ))
          ) : (
            // Mensagem exibida se nenhum item for encontrado
            <h2>Nenhum item encontrado</h2>
          )}
        </S.ContainerSection>
      </div>

      {/* Modal para exibir detalhes do produto selecionado */}
      <S.Modal className={isOpen ? 'isVisible' : ''}>
        <S.ModalContent className="container">
          <div>
            <S.ImagemPrato src={produto?.foto} alt="imagem do prato" />
          </div>

          {/* Imagem de fechamento do modal */}
          <img src={close} alt="fechar" onClick={toCloseModal} />

          <div>
            <h4>{produto?.nome}</h4>
            <S.productDescription>{produto?.descricao}</S.productDescription>
            <p>{produto?.porcao}</p>
            {/* Botão para adicionar o produto ao carrinho */}
            <BtnProduct
              title={`Cliquei aqui para adicionar ${produto?.nome} ao carrinho`}
              onClick={toAddCart}
            >
              Adicionar ao carrinho - {parseToBrl(produto?.preco)}
            </BtnProduct>
          </div>
        </S.ModalContent>
        {/* Overlay para fechar o modal ao clicar fora */}
        <div className="overlay" onClick={toCloseModal}></div>
      </S.Modal>
    </>
  )
}

export default Products
