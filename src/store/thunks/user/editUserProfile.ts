/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'redux'
import { IUser } from '../../../types/types'
import {
  editProfileRequest,
  editProfileSuccess,
  editProfileFailure
} from '../../actions/user/userActions'
import { UserService } from '../../../api/user/userService'

export const editUserProfile = (userId: number, editedProfile: IUser) => {
  return async (dispatch: Dispatch) => {
    dispatch(editProfileRequest(userId, editedProfile))

    try {
      const data = await UserService.editProfile(userId, editedProfile)
      if (data) {
        dispatch(editProfileSuccess(data))
      } else {
        dispatch(editProfileFailure('Failed to edit profile'))
      }
    } catch (error: any) {
      dispatch(editProfileFailure(error.message))
    }
  }
}
