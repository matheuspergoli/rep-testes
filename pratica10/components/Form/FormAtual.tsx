import React from 'react'
import { FormAtualContext } from '../../context/FormAtualContext'
import FormCadastro from './FormCadastro'
import FormLogin from './FormLogin'

function FormAtual() {
	const { formAtual } = React.useContext(FormAtualContext)

	return <>{formAtual ? <FormCadastro /> : <FormLogin />}</>
}

export default FormAtual
