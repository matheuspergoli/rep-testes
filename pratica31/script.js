"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        const data = yield response.json();
        showProduto(data);
    });
}
fetchProduto();
function showProduto(produto) {
    document.body.innerHTML = `
		<main>
			<h1>Nome: ${produto.nome}</h1>
			<p>Preço: ${produto.preco}</p>
			<p>Descrição: ${produto.descricao}</p>
			<p>Garantia: ${produto.garantia ? `${produto.garantia} Ano(s)` : 'Não tem'}</p>
			<p>Seguro: ${produto.seguroAcidentes ? 'Coberto' : 'Sem seguro'}</p>
		</main>
	`;
}
