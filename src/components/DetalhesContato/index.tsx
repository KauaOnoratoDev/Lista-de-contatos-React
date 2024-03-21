import { Container, Header, Titulo } from '../../Styles'
import setaEsquerda from '../../icons/Seta-Esquerda.png'
import ContatoAvatar from '../../icons/Contato.png'
import { ContainerBotoes, Informacoes, InformacoesContato } from './styles'
import { useNavigate } from 'react-router-dom'

function DetalhesContato() {
  const navigate = useNavigate()

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
            <input type="text" id="nome" value={'Fulano da silva junior'} />
            <label htmlFor="numero">Número</label>
            <input type="text" id="numero" value={'(65) 99999-9999'} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={'email@email.com'} />
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
