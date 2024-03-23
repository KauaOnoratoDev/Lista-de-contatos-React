import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
  nome: string
  numero: string
  email: string
  id: number
  pesquisa: string
}

const initialState: ContatoState = {
  itens: [
    new Contato(
      'Seu Espedito do Açougue',
      '11999999999',
      'espeditoDoaCougue1245@gmail.com',
      1
    )
  ],
  nome: '',
  numero: '',
  email: '',
  id: 0,
  pesquisa: ''
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const item = action.payload
      const contatoExiste = state.itens.find((e) => e.numero === item.numero)
      const idUso =
        state.itens.length > 0 ? state.itens[state.itens.length - 1].id : 0

      if (contatoExiste) {
        alert('Contato já existe')
      } else if (item.nome.length < 2 || item.numero.length <= 0) {
        alert('Adicione um nome e um número para o novo contato')
      } else {
        state.itens.push(
          new Contato(item.nome, item.numero, item.email, idUso + 1)
        )
      }
    },
    adicionar: (state, action: PayloadAction<Contato>) => {
      state.nome = action.payload.nome
      state.numero = action.payload.numero
      state.email = action.payload.email
      state.id = action.payload.id
    },
    pesquisa: (state, action: PayloadAction<string>) => {
      state.pesquisa = action.payload.toLowerCase()
    },
    remover: (state, action: PayloadAction<string>) => {
      state.itens = state.itens.filter(
        (contato) => contato.numero !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { cadastrar, adicionar, pesquisa, remover, editar } =
  contatoSlice.actions
export default contatoSlice.reducer
