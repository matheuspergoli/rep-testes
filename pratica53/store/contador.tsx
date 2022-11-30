import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: 0
}

const { reducer: contadorSlice, actions: contadorActions } = createSlice({
	name: 'contador',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		}
	}
})

export { contadorSlice, contadorActions }
