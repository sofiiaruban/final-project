import { IUserData, IResponseUserData, IUser } from '../../types/types'

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST'
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE'

export const registrationRequest = (userData: IUserData) => ({
  type: REGISTRATION_REQUEST,
  payload: userData
})
export const registrationSuccess = (data: IResponseUserData) => ({
  type: REGISTRATION_SUCCESS,
  payload: data
})
export const registrationFailure = (error: string) => ({
  type: REGISTRATION_FAILURE,
  payload: error
})

export const LOGIN_REQUEST = 'REGISTRATION_REQUEST'
export const LOGIN_SUCCESS = 'REGISTRATION_SUCCESS'
export const LOGIN_FAILURE = 'REGISTRATION_FAILURE'

export const loginRequest = (userData: IUserData) => ({
  type: LOGIN_REQUEST,
  payload: userData
})
export const loginSuccess = (data: IUser) => ({
  type: LOGIN_SUCCESS,
  payload: data
})
export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error
})

export const USER_PROFILE_REQUEST = 'USER_PROFILE_REQUEST'
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS'
export const USER_PROFILE_FAILURE = 'USER_PROFILE_FAILURE'

export const userProfileRequest = () => ({
  type: USER_PROFILE_REQUEST
})
export const userProfileSuccess = (data: IUser) => ({
  type: USER_PROFILE_SUCCESS,
  payload: data
})
export const userProfileFailure = (error: string) => ({
  type: USER_PROFILE_FAILURE,
  payload: error
})
