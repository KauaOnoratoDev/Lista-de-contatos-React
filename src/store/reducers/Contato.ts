import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatoSlice = createSlice({
  name: 'contatos',
  initialState: {
    itens: [
      new Contato(
        'Kauã Santos Onorato',
        '65999128926',
        'kaua-santos2004@outlook.com'
      )
    ]
  },
  reducers: {
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const item = action.payload
      state.itens.push(new Contato(item.nome, item.numero, item.email))
    }
  }
})

export const { cadastrar } = contatoSlice.actions
export default contatoSlice.reducer
