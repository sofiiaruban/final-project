/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_REQUEST,
  USER_PROFILE_FAILURE,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_FAILURE,
  EDIT_PROFILE_SUCCESS,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAILURE
} from '../../actions/user/actionTypes'

export interface UserState {
  users: any
  user: any | null
  loading: boolean
  error: string | null
  userData: any | null
}

const initialState: UserState = {
  users: null,
  user: null,
  loading: false,
  error: null,
  userData: null
}

const userProfileReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        user: action.payload
      }
    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case USER_FAILURE:
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
        userData: action.payload
      }
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload
      }
    case USER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case EDIT_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload
      }
    case EDIT_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        users: action.payload,
        error: null
      }
    case ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null
      }
    case ALL_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default userProfileReducer
