import { createSlice } from '@reduxjs/toolkit'

const initialState = [
	{
		id: 1,
		nome: 'Design',
		completa: true
	},
	{
		id: 2,
		nome: 'HTML',
		completa: false
	},
	{
		id: 3,
		nome: 'CSS',
		completa: false
	},
	{
		id: 4,
		nome: 'JavaScript',
		completa: false
	},
	{
		id: 5,
		nome: 'React',
		completa: false
	}
]

const { reducer: aulaReducer, actions: aulaActions } = createSlice({
	name: 'aula',
	initialState,
	reducers: {
		completarAula(state, action) {
			const aulasAtualizadas = state.map((aula) => {
				if (aula.id === action.payload) {
					aula.completa = true
				}
			})
			state = aulasAtualizadas
		},
		completarCurso(state, action) {
			const aulasAtualizadas = state.map((aula) => {
				aula.completa = true
			})
			state = aulasAtualizadas
		},
		resetarCurso(state, action) {
			const aulasAtualizadas = state.map((aula) => {
				aula.completa = false
			})
			state = aulasAtualizadas
		}
	}
})

export { aulaReducer, aulaActions }
