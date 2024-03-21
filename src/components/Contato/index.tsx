import { Titulo } from '../../Styles'
import { Container, ContainerContato, Img } from './styles'
import ContatoAvatar from '../../icons/Contato.png'
import ContatoClass from '../../models/Contato'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  nome: string
  numero: string
  email: string
}

function Contato() {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const lista: ContatoClass[] = []
  function criarContato({ nome, numero, email }: Props) {
    lista.push(new ContatoClass(nome, numero, email))
  }

  criarContato({
    nome: 'kaua santos',
    numero: '23234234',
    email: 'asdfasdf@asdfasdf'
  })

  return (
    <>
      <Container>
        {itens.map((c) => {
          return (
            <ContainerContato key={c.numero}>
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
