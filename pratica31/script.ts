interface Produto {
	nome: string
	preco: string
	garantia: number
	descricao: string
	seguroAcidentes: boolean
}

async function fetchProduto() {
	const response = await fetch('https://api.origamid.dev/json/notebook.json')
	const data = await response.json()
	showProduto(data)
}
fetchProduto()

function showProduto(produto: Produto) {
	document.body.innerHTML = `
		<main>
			<h1>Nome: ${produto.nome}</h1>
			<p>Preço: ${produto.preco}</p>
			<p>Descrição: ${produto.descricao}</p>
			<p>Garantia: ${produto.garantia ? `${produto.garantia} Ano(s)` : 'Não tem'}</p>
			<p>Seguro: ${produto.seguroAcidentes ? 'Coberto' : 'Sem seguro'}</p>
		</main>
	`
}
