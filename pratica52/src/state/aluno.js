import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	diasRestantes: 120,
	nome: 'Matheus Pergoli',
	email: 'matheus.pergoli@yahoo.com'
}

const { reducer: alunoReducer, actions: alunoActions } = createSlice({
	name: 'aluno',
	initialState,
	reducers: {
		incrementarDiasDeAcesso(state, action) {
			state.diasRestantes++
		},
		decrementarDiasDeAcesso(state, action) {
			state.diasRestantes--
		},
		modificarEmail(state, action) {
			state.email = action.payload
		},
		modificarNome(state, action) {
			state.nome = action.payload
		}
	}
})

export { alunoReducer, alunoActions }
