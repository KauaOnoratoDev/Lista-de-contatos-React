import Contato from '../../components/Contato'
import iconePesquisa from '../../icons/Searh-Icon.png'
import { BotaoAdicionar, BotaoPesquisa, Campo, Container } from './styles'

function ListaContatos() {
  return (
    <>
      <Container>
        <Campo type="text" placeholder="Digite pelo nome" />
        <BotaoPesquisa type="button">
          <img src={iconePesquisa} alt="" />
        </BotaoPesquisa>
        <BotaoAdicionar type="button">
          <span>+</span>
        </BotaoAdicionar>
      </Container>
      <Contato />
    </>
  )
}

export default ListaContatos
