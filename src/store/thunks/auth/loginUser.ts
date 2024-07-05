import { IUserData } from '../../../types/types'
import { Dispatch } from 'redux'
import { AuthService } from '../../../api/auth/authService'
import {
  loginFailure,
  loginRequest,
  loginSuccess
} from '../../actions/authActions'
import { setTokenToLocalStorage } from '../../../helpers/getTokenFromLocalStorage'
import { login } from '../../reducers/user/userSlice'

export const loginUser = (userData: IUserData) => {
  return async (dispatch: Dispatch) => {
    dispatch(loginRequest(userData))
    try {
      const data = await AuthService.login(userData)
      dispatch(loginSuccess(data!))
      setTokenToLocalStorage('token', data!.token)
      dispatch(login(data!))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(loginFailure(error.message))
    }
  }
}
