import { useNavigate } from 'react-router-dom'
import Contato from '../../components/Contato'
import iconePesquisa from '../../icons/Searh-Icon.png'
import { BotaoAdicionar, BotaoPesquisa, Campo, Container } from './styles'
import { useDispatch } from 'react-redux'
import { pesquisa } from '../../store/reducers/Contato'

function ListaContatos() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <>
      <Container>
        <Campo
          type="text"
          placeholder="Digite pelo nome"
          onChange={(e) => dispatch(pesquisa(e.target.value))}
        />
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
