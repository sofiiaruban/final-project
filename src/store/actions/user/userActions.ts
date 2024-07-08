import { IUser } from '../../../types/types'
import * as actionTypes from './actionTypes'

export const userRequest = () => ({
  type: actionTypes.USER_REQUEST
})
export const userSuccess = (data: IUser) => ({
  type: actionTypes.USER_SUCCESS,
  payload: data
})
export const userFailure = (error: string) => ({
  type: actionTypes.USER_FAILURE,
  payload: error
})
export const getProfileRequest = (userId: number) => ({
  type: actionTypes.USER_PROFILE_REQUEST,
  payload: userId
})

export const getProfileSuccess = (profile: IUser) => ({
  type: actionTypes.USER_PROFILE_SUCCESS,
  payload: profile
})

export const getProfileFailure = (error: string) => ({
  type: actionTypes.USER_PROFILE_FAILURE,
  payload: error
})

export const editProfileRequest = (userId: number, profile: IUser) => ({
  type: actionTypes.EDIT_PROFILE_REQUEST,
  payload: { userId, profile }
})

export const editProfileSuccess = (profile: IUser) => ({
  type: actionTypes.EDIT_PROFILE_SUCCESS,
  payload: profile
})

export const editProfileFailure = (error: string) => ({
  type: actionTypes.EDIT_PROFILE_FAILURE,
  payload: error
})

export const allUsersRequest = () => ({
  type: actionTypes.ALL_USERS_REQUEST
})

export const allUsersSuccess = (users: IUser[]) => ({
  type: actionTypes.ALL_USERS_SUCCESS,
  payload: users
})

export const allUsersFailure = (error: string) => ({
  type: actionTypes.ALL_USERS_FAILURE,
  payload: error
})
