import { useNavigate } from 'react-router-dom'
import Contato from '../../components/Contato'
import iconePesquisa from '../../icons/Searh-Icon.png'
import { BotaoAdicionar, BotaoPesquisa, Campo, Container } from './styles'

function ListaContatos() {
  const navigate = useNavigate()
  return (
    <>
      <Container>
        <Campo type="text" placeholder="Digite pelo nome" />
        <BotaoPesquisa type="button">
          <img src={iconePesquisa} alt="" />
        </BotaoPesquisa>
        <BotaoAdicionar type="button" onClick={() => navigate('/contato')}>
          <span>+</span>
        </BotaoAdicionar>
      </Container>
      <Contato />
    </>
  )
}

export default ListaContatos
