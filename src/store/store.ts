import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user/userSlice'
import authReducer from './reducers/auth/authReducer'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store: any = configureStore({
  reducer: { auth: authReducer, user: userReducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
