import { IUserData, IResponseUserData, IUser } from '../../../types/types'
import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './actionTypes'

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
