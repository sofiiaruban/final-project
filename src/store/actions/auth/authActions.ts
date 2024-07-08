import { IUserData, IResponseUserData, IUser } from '../../../types/types'
import * as actionTypes from './actionTypes'

export const registrationRequest = (userData: IUserData) => ({
  type: actionTypes.REGISTRATION_REQUEST,
  payload: userData
})
export const registrationSuccess = (data: IResponseUserData) => ({
  type: actionTypes.REGISTRATION_SUCCESS,
  payload: data
})
export const registrationFailure = (error: string) => ({
  type: actionTypes.REGISTRATION_FAILURE,
  payload: error
})

export const loginRequest = (userData: IUserData) => ({
  type: actionTypes.LOGIN_REQUEST,
  payload: userData
})
export const loginSuccess = (data: IUser) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: data
})
export const loginFailure = (error: string) => ({
  type: actionTypes.LOGIN_FAILURE,
  payload: error
})
