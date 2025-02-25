import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'
import { RootReducer } from '../store'
import { useGetProdutosQuery } from '../services/api'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()

  const favoritos = useSelector((state: RootReducer) => state.favorito.itens)
  const noCarrinho = useSelector((state: RootReducer) => state.carrinho.itens)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  const produtosEstaNoCarrinho = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsNoCarrinho = noCarrinho.map((i) => i.id)

    return IdsNoCarrinho.includes(produtoId)
  }

  if (isLoading) return <h2>Carregando parça</h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            estaNoCarrinho={produtosEstaNoCarrinho(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
