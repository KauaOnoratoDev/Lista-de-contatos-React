import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
  ultimoItem: Contato[]
}

const initialState: ContatoState = {
  itens: [
    new Contato(
      'Kauã Santos Onorato',
      '(99)9dd9999-9999',
      'kaua-santos2004@outlook.com'
    )
  ],
  ultimoItem: []
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
    },
    adicionar: (state, action: PayloadAction<Contato>) => {
      state.ultimoItem.pop()
      state.ultimoItem.push(action.payload)
    }
  }
})

export const { cadastrar, adicionar } = contatoSlice.actions
export default contatoSlice.reducer
