import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user/userSlice'
import userProfileReducer from './reducers/user/userProfileReducer'
import authReducer from './reducers/auth/authReducer'
import companyReducer from './reducers/company/companyReducer'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store: any = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    company: companyReducer,
    profile: userProfileReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
