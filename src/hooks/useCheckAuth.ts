import { getTokenFromLocalStorage } from '../helpers/getTokenFromLocalStorage'
import { useAppDispatch } from '../store/hooks'
import { logout } from '../store/reducers/user/userSlice'
import { getUser } from '../store/thunks/user/getUser'

const useCheckAuth = () => {
  const token = getTokenFromLocalStorage()
  const dispatch = useAppDispatch()

  const checkAuth = async () => {
    if (token) {
      try {
        dispatch(getUser())
      } catch (error) {
        console.error('Error fetching user profile:', error)
        dispatch(logout())
      }
    }
  }
  return checkAuth
}

export default useCheckAuth
