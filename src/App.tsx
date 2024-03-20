import EstiloGlobal, { Container } from './Styles'
import CriarContato from './components/CriarContato'
import DetalhesContato from './components/DetalhesContato'
import ListaContatos from './containers/ListaContatos'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <ListaContatos />
        {/* <CriarContato /> */}
        {/* <DetalhesContato /> */}
      </Container>
    </>
  )
}

export default App
