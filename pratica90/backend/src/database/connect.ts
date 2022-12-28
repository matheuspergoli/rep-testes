import mysql from 'mysql2'

export const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Weewefamilha1999.22',
	database: 'empresa'
})

db.connect((error) => {
	if (error) {
		console.log(error)
	} else {
		console.log('MySQL Connected')
	}
})
