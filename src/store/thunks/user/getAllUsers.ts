import { Dispatch } from 'redux'
import { UserService } from '../../../api/user/userService'
import {
  allUsersRequest,
  allUsersSuccess,
  allUsersFailure
} from '../../actions/user/userActions'

export const getAllUsers = () => {
  return async (dispatch: Dispatch) => {
    dispatch(allUsersRequest())
    try {
      const data = await UserService.getAllUsers()
      dispatch(allUsersSuccess(data!))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(allUsersFailure(error.message))
    }
  }
}
