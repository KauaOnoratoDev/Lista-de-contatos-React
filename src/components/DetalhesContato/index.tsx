import { Container, Header, Titulo } from '../../Styles'
import setaEsquerda from '../../icons/Seta-Esquerda.png'
import ContatoAvatar from '../../icons/Contato.png'
import { ContainerBotoes, Informacoes, InformacoesContato } from './styles'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { editar, remover } from '../../store/reducers/Contato'
import { useState } from 'react'

function DetalhesContato() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { nome, numero, email, id } = useSelector(
    (state: RootReducer) => state.contatos
  )
  const [nomeValor, setNomeValor] = useState(nome)
  const [numeroValor, setNumeroValor] = useState(numero)
  const [emailValor, setEmailValor] = useState(email)
  const [editando, setEditando] = useState(false)

  return (
    <>
      <Header>
        <button type="button" onClick={() => navigate('/')}>
          <img src={setaEsquerda} alt="" />
        </button>
        <Titulo>Detalhes do Contato</Titulo>
      </Header>
      <Container>
        <InformacoesContato>
          <img src={ContatoAvatar} alt="" />
          <Informacoes>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              value={nomeValor}
              disabled={!editando}
              onChange={(e) => setNomeValor(e.target.value)}
            />
            <label htmlFor="numero">Número</label>
            <input
              type="number"
              id="numero"
              value={numeroValor}
              disabled={!editando}
              onChange={(e) => setNumeroValor(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={emailValor}
              disabled={!editando}
              onChange={(e) => setEmailValor(e.target.value)}
            />
          </Informacoes>
          <ContainerBotoes>
            <button
              type="button"
              onClick={() => {
                setEditando(!editando)
              }}
            >
              {editando ? 'Cancelar' : 'Editar'}
            </button>
            <button
              type="button"
              onClick={() => {
                if (!editando) {
                  dispatch(remover(numero))
                  navigate('/')
                } else {
                  dispatch(
                    editar({
                      nome: nomeValor,
                      numero: numeroValor,
                      email: emailValor,
                      id
                    })
                  )
                  setEditando(!editando)
                }
              }}
            >
              {editando ? 'Salvar' : 'Remover'}
            </button>
          </ContainerBotoes>
        </InformacoesContato>
      </Container>
    </>
  )
}

export default DetalhesContato
