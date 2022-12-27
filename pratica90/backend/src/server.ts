import dotenv from 'dotenv'
import { router } from './routes'
import { connect } from './database/connect'
import express, { Request, Response } from 'express'

dotenv.config()
connect()
const app = express()
const port = 8080

app.use(express.json())
app.use(router)

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
