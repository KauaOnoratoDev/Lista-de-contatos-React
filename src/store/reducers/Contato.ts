import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
  nome: string
  numero: string
  email: string
  pesquisa: string
}

const initialState: ContatoState = {
  itens: [
    new Contato(
      'Kauã Santos Onorato',
      '(99)9dd9999-9999',
      'kaua-santos2004@outlook.com'
    )
  ],
  nome: '',
  numero: '',
  email: '',
  pesquisa: ''
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
      state.nome = action.payload.nome
      state.numero = action.payload.numero
      state.email = action.payload.email
    },
    pesquisa: (state, action: PayloadAction<string>) => {
      state.pesquisa = action.payload.toLowerCase()
    }
  }
})

export const { cadastrar, adicionar, pesquisa } = contatoSlice.actions
export default contatoSlice.reducer
