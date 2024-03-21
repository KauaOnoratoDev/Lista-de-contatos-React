import EstiloGlobal, { Container } from './Styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import CriarContatoPage from './pages/CriarContatoPage'
import DetalhesContatoPage from './pages/DetalhesContatoPage'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contato',
    element: <CriarContatoPage />
  },
  {
    path: '/detalhes',
    element: <DetalhesContatoPage />
  }
])
function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </>
  )
}

export default App
