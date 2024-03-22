import { Container, Header, Titulo } from '../../Styles'
import setaEsquerda from '../../icons/Seta-Esquerda.png'
import ContatoAvatar from '../../icons/Contato.png'
import { ContainerBotoes, Informacoes, InformacoesContato } from './styles'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/Contato'
import Contato from '../../models/Contato'

function CriarContato() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')
  const novoContato: Contato = {
    nome: nome,
    email: email,
    numero: numero
  }
  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()

    dispatch(cadastrar(novoContato))
    navigate('/')
  }

  return (
    <>
      <Header>
        <button type="button" onClick={() => navigate('/')}>
          <img src={setaEsquerda} alt="" />
        </button>
        <Titulo>Criar novo Contato</Titulo>
      </Header>
      <Container>
        <InformacoesContato onSubmit={cadastrarContato}>
          <img src={ContatoAvatar} alt="" />
          <Informacoes>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              onChange={(e) => setNome(e.target.value)}
            />
            <label htmlFor="numero">Número</label>
            <input
              type="text"
              id="numero"
              onChange={(e) => setNumero(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Informacoes>
          <ContainerBotoes>
            <button type="submit">Salvar</button>
          </ContainerBotoes>
        </InformacoesContato>
      </Container>
    </>
  )
}

export default CriarContato
