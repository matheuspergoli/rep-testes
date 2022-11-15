const numeros = [1, 2, 3, 4, 5, 6]
const frutas = ['Banana', 'Maçã', 'Pêra', 'Limão', 'Uva', 'Melância']

function firstFive<T>(lista: T[]) {
	return lista.slice(0, 5)
}

function notNull<T>(argumento: T) {
	if (argumento !== null) return argumento
	return null
}

function tipoDado<T>(argumento: T) {
	const resultado = {
		dado: argumento,
		tipo: typeof argumento
	}
	return resultado
}

console.log(tipoDado(2022))
