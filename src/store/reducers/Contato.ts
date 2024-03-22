import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: []
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const item = action.payload
      const contatoExiste = state.itens.find((e) => e.numero === item.numero)
      if (contatoExiste) {
        alert('Contato já existe')
      } else if (item.nome.length < 2 || item.numero.length <= 0) {
        alert('Adicione um nome e um número para o novo contato')
      } else {
        state.itens.push(new Contato(item.nome, item.numero, item.email))
      }
    }
  }
})

export const { cadastrar } = contatoSlice.actions
export default contatoSlice.reducer
