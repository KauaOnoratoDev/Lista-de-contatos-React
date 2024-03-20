import { Titulo } from '../../Styles'
import { Container, ContainerContato, Img } from './styles'
import ContatoAvatar from '../../icons/Contato.png'

function Contato() {
  return (
    <>
      <Container>
        <ContainerContato>
          <Img src={ContatoAvatar} alt="" />
          <ul>
            <li>
              <Titulo>O nome do contato</Titulo>
            </li>
          </ul>
        </ContainerContato>
      </Container>
    </>
  )
}

export default Contato
