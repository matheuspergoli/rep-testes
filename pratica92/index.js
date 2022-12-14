const fs = require('fs')
const url = require('url')
const http = require('http')

// Blocking, synchronous way
// const file = fs.readFileSync('./txt/input.txt', 'utf-8')
// const text = `This is what we know about avocado: ${file}.\nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', text)
// console.log('File Written!')

// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (error, data1) => {
// 	fs.readFile(`./txt/${data1}.txt`, 'utf-8', (error, data2) => {
// 		console.log(data2)
// 		fs.readFile('./txt/append.txt', 'utf-8', (error, data3) => {
// 			console.log(data3)

// 			fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, () => {
// 				console.log('Your file has been written! 🎉')
// 			})
// 		})
// 	})
// })
// console.log('Will read file!')

// Server
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)

const server = http.createServer((request, response) => {
	const pathName = request.url

	if (pathName === '/' || pathName === '/overview') {
		response.end('This the Overview Page!')
	} else if (pathName == '/product') {
		response.end('This the Product Page!')
	} else if (pathName == '/api') {
		response.writeHead(200, {
			'Content-type': 'application/json'
		})

		response.end(data)
	} else {
		response.writeHead(404, {
			'Content-type': 'text/html'
		})
		response.end('<h1>Page not found!</h1>')
	}
})

server.listen(8000, () => {
	console.log('Listening to requests on http://localhost:8000')
})
