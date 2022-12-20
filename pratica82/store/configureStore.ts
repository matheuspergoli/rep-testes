import { configureStore } from '@reduxjs/toolkit'
import { users } from './users'
import { counter } from './counter'

export const store = configureStore({
	reducer: {
		counter,
		users
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
