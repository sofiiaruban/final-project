import { IUserData } from '../../../types/types'
import { Dispatch } from 'redux'
import {
  registrationFailure,
  registrationRequest,
  registrationSuccess
} from '../../actions/auth/authActions'
import { AuthService } from '../../../api/auth/authService'

export const registerUser = (userData: IUserData) => {
  return async (dispatch: Dispatch) => {
    dispatch(registrationRequest(userData))
    try {
      const data = await AuthService.registration(userData)
      dispatch(registrationSuccess(data!))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(registrationFailure(error.message))
    }
  }
}
