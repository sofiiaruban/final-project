import { FC, ReactNode } from 'react'
import { useAuth } from '../hooks/useAuth'
import AccessDenied from './AccessDenied'

interface ProtectedRouteProp {
  children: ReactNode
  requireAdmin?: boolean
}

const ProtectedRoute: FC<ProtectedRouteProp> = ({ children, requireAdmin }) => {
  const { isAuth, isAdmin } = useAuth()

  if (isAuth && !requireAdmin) {
    return <>{children}</>
  }
  if (isAuth && requireAdmin && isAdmin) {
    return <>{children}</>
  }

  return <AccessDenied />
}
export default ProtectedRoute
