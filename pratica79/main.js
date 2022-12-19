// Constants
const SOMAR = 'SOMAR'
const ADD_USER = 'ADD_USER'
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'

// Actions
function somar(payload) {
	return { type: SOMAR, payload }
}

function increment() {
	return { type: INCREMENT }
}

function decrement() {
	return { type: DECREMENT }
}

function addUser(payload) {
	return { type: ADD_USER, payload }
}

// Reducer/Counter
function counter(state = 0, action) {
	switch (action.type) {
		case SOMAR:
			return state + action.payload
		case INCREMENT:
			return state + 1
		case DECREMENT:
			return state - 1
		default:
			return state
	}
}

// Reducer/Modal
function modal(state = false, action) {
	switch (action.type) {
		case OPEN_MODAL:
			return true
		case CLOSE_MODAL:
			return false
		default:
			return state
	}
}

// Reducer/Users
function users(state = [], action) {
	switch (action.type) {
		case ADD_USER:
			return [...state, action.payload]
		default:
			return state
	}
}

// Reducers
const reducer = Redux.combineReducers({
	counter,
	modal,
	users
})

// Store
const store = Redux.createStore(reducer)

// Subscribe
store.subscribe(() => {
	console.log(store.getState().users)
})

// Dispatch
store.dispatch(addUser({ name: 'Matheus' }))
store.dispatch(addUser({ name: 'John Doe' }))
