const fs = require('fs')
const path = require('path')

// Criar uma pasta
fs.mkdir(path.join(__dirname, './test'), (error) => {
	if (error) console.log(`Erro: ${error}`)
	console.log('Pasta criada com sucesso!')
})

// Criar um arquivo
fs.writeFile(path.join(__dirname, 'test', 'test.html'), 'Hello Node', (error) => {
	if (error) console.log(`Erro: ${error}`)
	console.log('Arquivo criado com sucesso!')
})

// Adicionar conteúdo ao arquivo
fs.appendFile(path.join(__dirname, 'test', 'test.html'), 'Hello NodeJS', (error) => {
	if (error) console.log(`Erro: ${error}`)
	console.log('Arquivo modificado com sucesso!')
})

// Ler um arquivo
fs.readFile(path.join(__dirname, 'test', 'test.html'), 'utf-8', (error, data) => {
	if (error) console.log(`Erro: ${error}`)
	console.log(data)
})
