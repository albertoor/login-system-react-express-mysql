const mysql = require("mysql2")

const connectionMysql = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})

connectionMysql.connect((err, connection) => {
  if (err) throw err
  else console.log('DB is connected')
})


module.exports = connectionMysql
