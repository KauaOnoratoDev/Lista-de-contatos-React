import { Container, Header, Titulo } from '../../Styles'
import setaEsquerda from '../../icons/Seta-Esquerda.png'
import ContatoAvatar from '../../icons/Contato.png'
import { ContainerBotoes, Informacoes, InformacoesContato } from './styles'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

function DetalhesContato() {
  const navigate = useNavigate()
  const { ultimoItem } = useSelector((state: RootReducer) => state.contatos)

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
            <input type="text" id="nome" value={ultimoItem[0].nome} />
            <label htmlFor="numero">Número</label>
            <input type="text" id="numero" value={ultimoItem[0].numero} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={ultimoItem[0].email} />
          </Informacoes>
          <ContainerBotoes>
            <button type="button">Editar</button>
            <button type="button">Apagar</button>
          </ContainerBotoes>
        </InformacoesContato>
      </Container>
    </>
  )
}

export default DetalhesContato
