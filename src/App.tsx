import EstiloGlobal, { Container } from './Styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import CriarContatoPage from './pages/CriarContatoPage'
import DetalhesContatoPage from './pages/DetalhesContatoPage'
import { Provider } from 'react-redux'
import store from './store'

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
      <Provider store={store}>
        <EstiloGlobal />
        <Container>
          <RouterProvider router={rotas} />
        </Container>
      </Provider>
    </>
  )
}

export default App
