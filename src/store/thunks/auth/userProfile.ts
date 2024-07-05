import {
  userProfileFailure,
  userProfileRequest,
  userProfileSuccess
} from '../../actions/authActions'
import { Dispatch } from 'redux'
import { AuthService } from '../../../api/auth/authService'

export const userProfile = () => async () => {
  return async (dispatch: Dispatch) => {
    dispatch(userProfileRequest())
    try {
      const data = await AuthService.getProfile()
      dispatch(userProfileSuccess(data!))
      console.log(data)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(userProfileFailure(error.message))
    }
  }
}
