import * as Redux from '@reduxjs/toolkit'

// Constantes
const AUMENTAR = 'AUMENTAR'
const DIMINUIR = 'DIMINUIR'

// Action Creators
function aumentarCaixa(valor) {
	return {
		type: AUMENTAR,
		payload: valor
	}
}

function diminuirCaixa(valor) {
	return {
		type: DIMINUIR,
		payload: valor
	}
}

// Reducer
function modificarCaixa(state = 0, action) {
	switch (action.type) {
		case AUMENTAR:
			return state + action.payload
		case DIMINUIR:
			return state - action.payload
		default:
			return state
	}
}

// Store
const store = Redux.configureStore({ reducer: modificarCaixa })

// Elementos
const caixa = document.querySelector('.caixa')
const btnAumentar = document.querySelector('.btnAumentar')
const btnDiminuir = document.querySelector('.btnDiminuir')

// Event Listeners
btnAumentar.addEventListener('click', () => {
	store.dispatch(aumentarCaixa(10))
})

btnDiminuir.addEventListener('click', () => {
	store.dispatch(diminuirCaixa(10))
})

// Subscribe
store.subscribe(() => {
	caixa.style.width = store.getState() + 'px'
})
