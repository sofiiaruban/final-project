import { getTokenFromLocalStorage } from '../helpers/getTokenFromLocalStorage'
import { useAppDispatch } from '../store/hooks'
import { logout } from '../store/reducers/user/userSlice'
import { userProfile } from '../store/thunks/auth/userProfile'

const useCheckAuth = () => {
  const token = getTokenFromLocalStorage()
  const dispatch = useAppDispatch()

  const checkAuth = async () => {
    if (token) {
      try {
        dispatch(userProfile())
      } catch (error) {
        console.error('Error fetching user profile:', error)
        dispatch(logout())
      }
    }
  }
  return checkAuth
}

export default useCheckAuth
