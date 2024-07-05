import { useEffect } from 'react'
import { getTokenFromLocalStorage } from '../helpers/getTokenFromLocalStorage'
import { userProfileRequest } from '../store/actions/authActions'
import { useAppDispatch } from '../store/hooks'
import { login, logout } from '../store/reducers/user/userSlice'

const useCheckAuth = () => {
  const token = getTokenFromLocalStorage()
  const dispatch = useAppDispatch()

  const checkAuth = async () => {
    if (token) {
      try {
        const data = dispatch(userProfileRequest())
        if (data) {
          console.log(data)
          dispatch(login(data))
        } else {
          dispatch(logout())
        }
      } catch (error) {
        console.error('Error fetching user profile:', error)
      }
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])
}

export default useCheckAuth
