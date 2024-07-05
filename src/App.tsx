import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import useCheckAuth from './hooks/useCheckAuth'
import { useEffect } from 'react'

function App() {
  const checkAuth = useCheckAuth()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return <RouterProvider router={router} />
}

export default App
