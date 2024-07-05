/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE
} from '../../actions/authActions'

export interface AuthState {
  user: any | null
  loading: boolean
  error: string | null
  userData: any | null
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  userData: null
}

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        userData: action.payload
      }
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case REGISTRATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        userData: action.payload
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        user: action.payload
      }
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case USER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default authReducer
