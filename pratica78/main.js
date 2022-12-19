// Elements
const contador = document.querySelector('.contador')
const btnIncrementar = document.querySelector('.incrementar')
const btnDecrementar = document.querySelector('.decrementar')

// Constants
const SOMAR = 'SOMAR'
const INCREMENTAR = 'INCREMENTAR'
const DECREMENTAR = 'DECREMENTAR'

// Actions
function incrementar() {
	return { type: INCREMENTAR }
}

function decrementar() {
	return { type: DECREMENTAR }
}

function somar(payload) {
	return { type: SOMAR, payload }
}

// Render
function render() {
	const state = store.getState()
	contador.innerHTML = state
}

// Initial State
const initialState = 0

function reducer(state = initialState, action) {
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

const store = Redux.createStore(reducer)

store.subscribe(render)

btnIncrementar.addEventListener('click', () => store.dispatch(incrementar()))
btnDecrementar.addEventListener('click', () => store.dispatch(decrementar()))
