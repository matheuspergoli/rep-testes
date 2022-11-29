// Constants
const INCREMENTAR = 'counter/INCREMENTAR'
const DECREMENTAR = 'counter/DECREMENTAR'

// Action Creators
export const incrementar = () => ({ type: INCREMENTAR })
export const decrementar = () => ({ type: DECREMENTAR })

// Initial State
const initialState = { value: 0 }

// Reducer
function counter(state = initialState, action) {
	switch (action.type) {
		case INCREMENTAR:
			return { ...state, value: state.value + 1 }
		case DECREMENTAR:
			return { ...state, value: state.value - 1 }
		default:
			return state
	}
}

export default counter
