import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritoState = {
  itens: Produto[]
}

const initialState: favoritoState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,

  reducers: {
    addRemove: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((produtos) => produtos.id === produto.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== produto.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { addRemove } = favoritosSlice.actions
export default favoritosSlice.reducer
