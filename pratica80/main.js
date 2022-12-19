function reducer(state = 0, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
		default:
			return state
	}
}

const logger = (store) => (next) => (action) => {
	return next(action)
}

const middleware = Redux.applyMiddleware(logger)

const store = Redux.createStore(reducer)

store.dispatch({ type: 'INCREMENT' })
