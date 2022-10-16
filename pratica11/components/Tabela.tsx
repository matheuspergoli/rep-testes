import React from 'react'
import Cliente from '../core/Cliente'
import { IconeEdicao, IconeLixo } from '../icons'

interface TabelaProps {
	clientes: Cliente[]
	clienteExcluido?: (cliente: Cliente) => void
	clienteSelecionado?: (cliente: Cliente) => void
}

function Tabela(props: TabelaProps) {
	const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

	function renderizarCabecalho() {
		return (
			<tr>
				<th className='text-left p-3'>Código</th>
				<th className='text-left p-3'>Nome</th>
				<th className='text-left p-3'>Idade</th>
				{exibirAcoes ? <th className='p-3'>Ações</th> : null}
			</tr>
		)
	}

	function renderizarDados() {
		return props.clientes?.map((cliente, index) => {
			return (
				<tr
					key={cliente.id}
					className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
					<td className='text-left p-3'>{cliente.id}</td>
					<td className='text-left p-3'>{cliente.nome}</td>
					<td className='text-left p-3'>{cliente.idade}</td>
					{exibirAcoes ? renderizarAcoes(cliente) : null}
				</tr>
			)
		})
	}

	function renderizarAcoes(cliente: Cliente) {
		return (
			<td className='flex justify-center'>
				{props.clienteSelecionado ? (
					<button
						onClick={() => props.clienteSelecionado?.(cliente)}
						className='flex justify-center items-center p-2 m-1 rounded-full text-green-600 hover:bg-purple-50'>
						{IconeEdicao}
					</button>
				) : null}

				{props.clienteExcluido ? (
					<button
						onClick={() => props.clienteExcluido?.(cliente)}
						className='flex justify-center items-center p-2 m-1 rounded-full text-red-600 hover:bg-purple-50'>
						{IconeLixo}
					</button>
				) : null}
			</td>
		)
	}

	return (
		<table className='w-full rounded-xl overflow-hidden'>
			<thead className='bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100'>
				{renderizarCabecalho()}
			</thead>
			<tbody>{renderizarDados()}</tbody>
		</table>
	)
}

export default Tabela
