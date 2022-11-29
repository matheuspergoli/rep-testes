import { aulaReducer } from '../state/aula'
import { alunoReducer } from '../state/aluno'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const thunk = (store) => (next) => (action) => {
 
}

const reducers = combineReducers({ aluno: alunoReducer, aulas: aulaReducer })

const store = configureStore({ reducer: reducers })

export default store
