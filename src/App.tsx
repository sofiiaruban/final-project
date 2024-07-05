import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import useCheckAuth from './hooks/useCheckAuth'

function App() {
  useCheckAuth()

  return <RouterProvider router={router} />
}

export default App
