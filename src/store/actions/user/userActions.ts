import { IUser } from '../../../types/types'
import {
  ALL_USERS_FAILURE,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  EDIT_PROFILE_FAILURE,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  USER_FAILURE,
  USER_PROFILE_FAILURE,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_REQUEST,
  USER_SUCCESS
} from './actionTypes'

export const userRequest = () => ({
  type: USER_REQUEST
})
export const userSuccess = (data: IUser) => ({
  type: USER_SUCCESS,
  payload: data
})
export const userFailure = (error: string) => ({
  type: USER_FAILURE,
  payload: error
})
export const getProfileRequest = (userId: number) => ({
  type: USER_PROFILE_REQUEST,
  payload: userId
})

export const getProfileSuccess = (profile: IUser) => ({
  type: USER_PROFILE_SUCCESS,
  payload: profile
})

export const getProfileFailure = (error: string) => ({
  type: USER_PROFILE_FAILURE,
  payload: error
})

export const editProfileRequest = (userId: number, profile: IUser) => ({
  type: EDIT_PROFILE_REQUEST,
  payload: { userId, profile }
})

export const editProfileSuccess = (profile: IUser) => ({
  type: EDIT_PROFILE_SUCCESS,
  payload: profile
})

export const editProfileFailure = (error: string) => ({
  type: EDIT_PROFILE_FAILURE,
  payload: error
})

export const allUsersRequest = () => ({
  type: ALL_USERS_REQUEST
})

export const allUsersSuccess = (users: IUser[]) => ({
  type: ALL_USERS_SUCCESS,
  payload: users
})

export const allUsersFailure = (error: string) => ({
  type: ALL_USERS_FAILURE,
  payload: error
})
