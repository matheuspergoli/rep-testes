import * as Redux from '@reduxjs/toolkit'

// Constantes
const SOMAR = 'SOMAR'
const AUMENTAR = 'AUMENTAR'
const INCREMENTAR = 'INCREMENTAR'
const DECREMENTAR = 'DECREMENTAR'

// Action Creator
function somar(payload) {
	return { type: SOMAR, payload }
}

function incrementar() {
	return { type: INCREMENTAR }
}

function decrementar() {
	return { type: DECREMENTAR }
}

// Reducer
function contador(state = 0, action) {
	switch (action.type) {
		case SOMAR:
			return state + action.payload
		case INCREMENTAR:
			return state + 1
		case DECREMENTAR:
			return state - 1
		default:
			return state
	}
}

function modal(state = false, action) {
	switch (action.type) {
		case 'ABRIR':
			return true
		case 'FECHAR':
			return false
		default:
			return state
	}
}

function aumentarCaixa(state = 0, action) {
	switch (action.type) {
		case AUMENTAR:
      state += action.payload
			const caixa = document.querySelector('#caixa')
			caixa.style.width = `${state}px`
			return state
		default:
			return state
	}
}

const reducer = Redux.combineReducers({ contador, modal, aumentarCaixa })

const store = Redux.configureStore({ reducer })

const btn = document.querySelector('.btn')
const btnIncrementar = document.querySelector('.incrementar')
const btnDecrementar = document.querySelector('.decrementar')

store.subscribe(() => {
	btn.innerHTML = store.getState().contador
})

btnIncrementar.addEventListener('click', () => {
  store.dispatch({ type: AUMENTAR, payload: 100 })
	store.dispatch(incrementar())
})

btnDecrementar.addEventListener('click', () => {
  store.dispatch({ type: AUMENTAR, payload: -100 })
	store.dispatch(decrementar())
})
