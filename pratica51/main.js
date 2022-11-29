import store from './src/store'
import { incrementar, decrementar } from './src/counter'

const btnValor = document.querySelector('.valor')
const btnAumentar = document.querySelector('.incrementar')
const btnDiminuir = document.querySelector('.decrementar')

btnAumentar.addEventListener('click', () => {
	store.dispatch(incrementar())
})

btnDiminuir.addEventListener('click', () => {
	store.dispatch(decrementar())
})

store.subscribe(() => {
	btnValor.innerHTML = store.getState().counter.value
})
