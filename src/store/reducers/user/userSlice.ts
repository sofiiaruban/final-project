import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../../types/types'
import { RootState } from '../../store'

interface UserState {
  user: IUser | null
  isAuth: boolean
  id: string | null
  role: string | undefined | null
}

const initialState: UserState = {
  user: null,
  isAuth: false,
  id: null,
  role: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
      state.isAuth = true
      state.role = action.payload.role
      state.id = action.payload.id
    },
    logout: (state) => {
      state.isAuth = false
      state.role = null
      state.user = null
      state.id = null
    }
  }
})

export const { login, logout } = userSlice.actions

export const selectUser = (state: RootState) => state.user.user
export const selectIsAuth = (state: RootState) => state.user.isAuth
export const selectUserRole = (state: RootState) => state.user.role
export const selectUserId = (state: RootState) => state.user.id

export default userSlice.reducer
