import mysql from 'mysql2'

export const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: process.env.DB_PASSWORD,
	database: 'empresa'
})

db.connect((error) => {
	if (error) {
		console.log(error)
	} else {
		console.log('MySQL Connected')
	}
})
