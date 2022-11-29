import * as Redux from '@reduxjs/toolkit'

const initialState = {
	nome: 'Matheus',
	idade: 23
}

// Action Creators & Action Types
const { reducer, actions } = Redux.createSlice({
	name: 'pessoa',
	initialState,
	reducers: {
		mudarNome: (state, action) => {
			state.nome = action.payload
		},
		mudarIdade: (state, action) => {
			state.idade = action.payload
		}
	}
})

const store = Redux.configureStore({ reducer })

store.dispatch(actions.mudarNome('João'))
console.log(initialState)
console.log(store.getState())
