const express = require('express')
const app = express()
const port = 3000

// app.use(cookieParser());
// app.use(bodyParser.json())

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'first'
  });

  
app.post('api/register', async (req, res, next) => {
  const {email, pwd} = req.body;

  try{
    const [duplicateCheck] = await connection.promise().query(`SELECT * FROM users WHERE username = ?`, [email]);
    if(duplicateCheck.length > 0) {
      return res.status(409).json({ message: '중복 입니다. 다른 아이디를 선택해 주세요'});
    }

    // const userpwd = await bcrypt.hash(pwd, 10);
    const result = await connection.promise().query("회원가입 완료");

    console.log(result)

  } catch (error) {
    console.log(error)
  }


})  
  







app.listen(port, () => {
    console.log(`서버가동 http://localhost:${port}`)
})

module.exports = connection

