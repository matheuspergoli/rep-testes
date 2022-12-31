import mongoose from 'mongoose'

const funcionarioSchema = new mongoose.Schema({
	nome: { type: String, required: true },
	sobrenome: { type: String, required: true },
	cargo: { type: String, required: true },
	perido: { type: String, required: true },
	idade: { type: Number, required: true }
})

export const funcionarioModel = mongoose.model('funcionario', funcionarioSchema)
