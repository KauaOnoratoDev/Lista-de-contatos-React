import { Titulo } from '../../Styles'
import { Container, ContainerContato, Img } from './styles'
import ContatoAvatar from '../../icons/Contato.png'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useNavigate } from 'react-router-dom'

function Contato() {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const navigate = useNavigate()

  return (
    <>
      <Container>
        {itens.map((c) => {
          return (
            <ContainerContato
              key={c.numero}
              onClick={() => navigate('/detalhes')}
            >
              <Img src={ContatoAvatar} alt="" />
              <ul>
                <li>
                  <Titulo>{c.nome}</Titulo>
                </li>
              </ul>
            </ContainerContato>
          )
        })}
      </Container>
    </>
  )
}

export default Contato
