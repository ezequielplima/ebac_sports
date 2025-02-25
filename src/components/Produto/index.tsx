import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { addRemoveCarrinho } from '../../store/reducers/carrinho'
import { addRemove } from '../../store/reducers/favoritos'

type Props = {
  produto: ProdutoType
  estaNosFavoritos: boolean
  estaNoCarrinho: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({
  produto,
  estaNosFavoritos,
  estaNoCarrinho
}: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(addRemove(produto))} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => dispatch(addRemoveCarrinho(produto))}
        type="button"
      >
        {estaNoCarrinho ? '- Remover Do Carrinho' : '+ Adicionar Ao Carrinho'}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
