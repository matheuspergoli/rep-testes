import fs from 'fs'

const file = fs.readFile('./text.txt', 'utf-8', (error, data) => {
	if (error) {
		console.log(error)
	} else {
		console.log(data)
	}
})
