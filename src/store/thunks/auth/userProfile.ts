import {
  userProfileFailure,
  userProfileRequest,
  userProfileSuccess
} from '../../actions/authActions'
import { Dispatch } from 'redux'
import { AuthService } from '../../../api/auth/authService'
import { login } from '../../reducers/user/userSlice'

export const userProfile = () => {
  return async (dispatch: Dispatch) => {
    dispatch(userProfileRequest())
    try {
      const data = await AuthService.getProfile()
      dispatch(userProfileSuccess(data!))
      dispatch(login(data!))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(userProfileFailure(error.message))
    }
  }
}
