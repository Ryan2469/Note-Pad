const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'first'
  });
  
  
app.use(cookieParser());
app.use(bodyParser.json())







app.listen(port, () => {
    console.log(`서버가동 http://localhost:${port}`)
})

module.exports = connection

