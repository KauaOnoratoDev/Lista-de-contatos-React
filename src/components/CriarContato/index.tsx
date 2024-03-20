import { Container, Header, Titulo } from '../../Styles'
import setaEsquerda from '../../icons/Seta-Esquerda.png'
import ContatoAvatar from '../../icons/Contato.png'
import { ContainerBotoes, Informacoes, InformacoesContato } from './styles'

function CriarContato() {
  return (
    <>
      <Header>
        <button type="button">
          <img src={setaEsquerda} alt="" />
        </button>
        <Titulo>Criar novo Contato</Titulo>
      </Header>
      <Container>
        <InformacoesContato>
          <img src={ContatoAvatar} alt="" />
          <Informacoes>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" />
            <label htmlFor="numero">Número</label>
            <input type="text" id="numero" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </Informacoes>
          <ContainerBotoes>
            <button type="button">Salvar</button>
          </ContainerBotoes>
        </InformacoesContato>
      </Container>
    </>
  )
}

export default CriarContato
