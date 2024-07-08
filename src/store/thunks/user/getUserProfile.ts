/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'redux'
import { UserService } from '../../../api/user/userService'
import {
  getProfileFailure,
  getProfileRequest,
  getProfileSuccess
} from '../../actions/user/userActions'

export const getProfile = (userId: number) => async (dispatch: Dispatch) => {
  dispatch(getProfileRequest(userId))
  try {
    const data = await UserService.getProfile(userId)
    dispatch(getProfileSuccess(data!))
    return data
  } catch (error: any) {
    dispatch(getProfileFailure(error.message))
    return undefined
  }
}
