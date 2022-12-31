import { funcionarioModel } from '../models/funcionarioModel.js'

class FuncionarioController {
	async getFuncionarios(req, res) {
		const funcionarios = await funcionarioModel.find()

		res.status(200).json(funcionarios)
	}

	async getFuncionario(req, res) {
		const id = req.params.id

		const funcionario = await funcionarioModel.findById(id)

		if (!funcionario) {
			res.status(404).json({ message: 'Funcionario não encontrado' })
		}

		res.status(200).json(funcionario)
	}

	async createFuncionario(req, res) {
		const funcionario = req.body

		const newFuncionario = new funcionarioModel(funcionario)
		await newFuncionario.save()

		res.status(201).json(newFuncionario)
	}

	async deleteFuncionario(req, res) {
		const id = req.params.id

		const funcionario = await funcionarioModel.findByIdAndDelete(id)

		if (!funcionario) {
			res.status(404).json({ message: 'Funcionario não encontrado' })
		}

		res.status(200).json({ message: 'Funcionario deletado com sucesso' })
	}
}

export const funcionarioController = new FuncionarioController()
