/* eslint-disable @typescript-eslint/no-explicit-any */
import * as actionTypes from '../../actions/user/actionTypes'

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
    case actionTypes.USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        user: action.payload
      }
    case actionTypes.USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case actionTypes.USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case actionTypes.USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        userData: action.payload
      }
    case actionTypes.USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload
      }
    case actionTypes.USER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case actionTypes.EDIT_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case actionTypes.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload
      }
    case actionTypes.EDIT_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case actionTypes.ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        users: action.payload,
        error: null
      }
    case actionTypes.ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null
      }
    case actionTypes.ALL_USERS_FAILURE:
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
