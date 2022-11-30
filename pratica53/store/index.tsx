import { contadorSlice } from './contador'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

const reducers = combineReducers({
	contador: contadorSlice
})

const store = configureStore({
	reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
