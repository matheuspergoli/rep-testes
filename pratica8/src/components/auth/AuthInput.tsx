import React from 'react'

interface AuthInputProps {
	label: string
	valor: any
	obrigatorio?: boolean
	naoRenderizarQuando?: boolean
	tipo?: 'text' | 'email' | 'password'
	valorMudou: (novoValor: any) => void
}

function AuthInput(props: AuthInputProps) {
	return props.naoRenderizarQuando ? null : (
    <div className='flex flex-col mt-4'>
			<label htmlFor=''>{props.label}</label>
			<input
        className='px-4 py-3 rounded-lg mt-2 border bg-gray-200 focus:border-blue-500 focus:outline-none focus:bg-white'
				type={props.tipo ?? 'text'}
				value={props.valor}
				required={props.obrigatorio}
				onChange={(e) => props.valorMudou?.(e.target.value)}
			/>
		</div>
  )
}

export default AuthInput
