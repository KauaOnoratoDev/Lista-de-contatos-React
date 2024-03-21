import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatoSlice = createSlice({
  name: 'contatos',
  initialState: {
    itens: []
  },
  reducers: {
    cadastrar: (state, action: PayloadAction<Contato>) => {}
  }
})

export const { cadastrar } = contatoSlice.actions
export default contatoSlice.reducer
