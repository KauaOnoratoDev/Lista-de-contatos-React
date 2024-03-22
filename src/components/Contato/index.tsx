import { Titulo } from '../../Styles'
import { Container, ContainerContato, Img } from './styles'
import ContatoAvatar from '../../icons/Contato.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useNavigate } from 'react-router-dom'
import { adicionar } from '../../store/reducers/Contato'

function Contato() {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <>
      <Container>
        {itens.map((c) => {
          return (
            <ContainerContato
              key={c.numero}
              onClick={() => {
                navigate('/detalhes')
                const ultimoContato = {
                  nome: c.nome,
                  numero: c.numero,
                  email: c.email
                }
                dispatch(adicionar(ultimoContato))
              }}
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
