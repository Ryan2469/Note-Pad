const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

app.use(cookieParser());
app.use(bodyParser.json())


// TODO: Reast Full API 사용법
// POST /api/board insert - POST 등록 & 생성
// GET /api/board 리스트가져오기 - GET 조회 & 가져오기 
// GET /api/board/:id  상세
// PUT /api/board/:id 업데이트 - PUT 업데이트 & 수정
// DELETE /api/board/:id 삭제 - DELETE 삭제
// PATCH /api/board/:id 업데이트 필드별


/**
* ReastFull API post-signup
* 회원가입
*/
app.post('/api/signup', (req, res) => {
    // 회원가입 이름, 비밀번호, 아이디

    const id = req.body.id;금융결제원
    const name = req.body.name;
    const pw = req.body.pw;


    // TODO: 비밀번호 sha256하기 
    //TODO: 변수체크 작성하기
    //TODO: 변수 맵핑하기     
    
    connection.query(

        // account 테이블에 userid, username, pw를 삽입하는 구문
        `INSERT INTO account(
            userid, username, pw
        ) VALUES (
            ?, ?, ?
        ) `,
    
        [id, name, pw],

        //TODO: 더블쿼테이션 쓰지말기, 쿼리에 변수를 맵핑할때 다이렉트로 넣지말고 맵핑하기
        function(err, results, fields) {
           if(err) { 
            console.log("errr")
            res.status(500).send(err);
            return
           }
           res.sendStatus(200);
        }
      );
})