const fs = require('fs')
const express = require('express')

const app = express()

app.use(express.json())

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8'))

app.get('/api/tours', (req, res) => {
	res.status(200).json({
		status: 'success',
		data: { tours }
	})
})

app.get('/api/tours/:id', (req, res) => {
	console.log(req.params)

	const tour = tours.find((el) => el.id === parseInt(req.params.id))

	if (!tour) {
		return res.status(404).json({
			status: 'fail',
			message: 'Invalid ID'
		})
	}

	res.status(200).json({
		status: 'success',
		data: { tour }
	})
})

app.post('/api/tours', (req, res) => {
	const newId = tours[tours.length - 1].id + 1
	const newTour = Object.assign({ id: newId }, req.body)

	tours.push(newTour)

	fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
		res.status(201).json({
			status: 'success',
			data: { tour: newTour }
		})
	})
})

app.patch('/api/tours/:id', (req, res) => {
	const selectedTour = tours.find((el) => el.id === parseInt(req.params.id))

	if (!selectedTour) {
		return res.status(404).json({
			status: 'fail',
			message: 'Invalid ID'
		})
	}

	res.status(200).json({
		status: 'success',
		data: {
			tour: '<Updated tour here>'
		}
	})
})

app.listen(3000, () => {
	console.log('Server started on port http://localhost:3000')
})
