import { useAppSelector } from '../store/hooks'
import { UserRole } from '../types/types'

interface AuthState {
  isAuth: boolean
  isAdmin: boolean
}

export const useAuth = (): AuthState => {
  const isAuth = useAppSelector((state) => state.user.isAuth)
  const role = useAppSelector((state) => state.user.role)
  const isAdmin = role === UserRole.ADMIN

  return { isAuth, isAdmin }
}
