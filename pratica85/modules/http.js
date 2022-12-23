const http = require('http')

const port = 8080

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.writeHead(200, {
			'Content-Type': 'text/html'
		})
		const html = `
      <h1>Hello, World!</h1>
    `
		res.write(html)
		res.end()
	}

	if (req.url === '/users') {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		})
		const users = [
			{ name: 'John Doe', age: 30 },
			{ name: 'Jane Doe', age: 25 }
		]
		res.write(JSON.stringify(users))
		res.end()
	}
})

server.listen(port, () => {
	console.log(`Rodando na porta ${port}`)
})
