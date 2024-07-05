import { FC, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { AppRoute } from '../router/AppRoute'
import { useAuth } from '../hooks/useAuth'

interface ProtectedRouteProp {
  children: ReactNode
  requireAdmin?: boolean
}

const ProtectedRoute: FC<ProtectedRouteProp> = ({ children, requireAdmin }) => {
  const { isAuth, isAdmin } = useAuth()

  if ((isAuth && !requireAdmin) || (isAuth && requireAdmin && isAdmin)) {
    return <>{children}</>
  }
  return <Navigate to={AppRoute.HOME} />
}

export default ProtectedRoute
