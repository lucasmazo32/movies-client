import { configureStore } from '@reduxjs/toolkit'
import userReducer from './substate/user'

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})
export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export { store }
