import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AppRoute } from '../router/AppRoute'

interface ProtectedRouteProp {
  isAuthenticated: boolean
}

const ProtectedRoute: FC<ProtectedRouteProp> = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to={AppRoute.AUTH} replace />
  }

  return <Outlet />
}

export default ProtectedRoute
