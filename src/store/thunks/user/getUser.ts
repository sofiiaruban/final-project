import { Dispatch } from 'redux'

import { login } from '../../reducers/user/userSlice'
import { UserService } from '../../../api/user/userService'
import {
  userFailure,
  userRequest,
  userSuccess
} from '../../actions/user/userActions'

export const getUser = () => {
  return async (dispatch: Dispatch) => {
    dispatch(userRequest())
    try {
      const data = await UserService.getUser()
      dispatch(userSuccess(data!))
      dispatch(login(data!))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(userFailure(error.message))
    }
  }
}
