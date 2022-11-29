import store from './src/store'
import { aulaActions } from './src/state/aula'
import { alunoActions } from './src/state/aluno'

store.dispatch(alunoActions.incrementarDiasDeAcesso())

console.log(store.getState().aluno)
