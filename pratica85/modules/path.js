const path = require('path')

// Nome do arquivo atual
console.log(path.basename(__filename))

// Nome do diretório atual
console.log(path.dirname(__filename))

// Nome da extensão do arquivo atual
console.log(path.extname(__filename))

// Cria um objeto com as informações do caminho
console.log(path.parse(__filename))

// Concatena caminhos
console.log(path.join(__dirname, 'test', 'hello.html'))
