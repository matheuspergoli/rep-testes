import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
	name: string
	age: number
}

const initialState: UserState = {
	name: '',
	age: 0
}

const usersSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setName: (state, action: PayloadAction<string>) => {
			state.name = action.payload
		},
		setAge: (state, action: PayloadAction<number>) => {
			state.age = action.payload
		}
	}
})

export const users = usersSlice.reducer
export const { setName, setAge } = usersSlice.actions
