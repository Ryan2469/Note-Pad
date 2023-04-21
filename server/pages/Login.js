const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

app.use(cookieParser());
app.use(bodyParser.json())


/**
 * JWT는 필요한 모든 정보를 자체적으로 지니고 있고
 * JWT 시스템에서 발급된 토큰은, 토큰에 대한 기본정보, 
 * 전달할 정보 그리고 토큰이 검증됐다는 것을 증명해주는 암호화된 키(signature)를 포함하고 있다.
 * 그리고 jwt를 사용하는 가장 큰 이유는 쿠키를 한번더 감싸서 암호화를 강화시켜주기 때문이다. 
 * 그렇지 않으면 클라이언트 측에 값을 보낼때 쿠키의 값을 볼수 있다
 */

const jwtKey = "abc1234567";


// jwtkey 가져오기
app.get('/api/jwtkey', (req, res) => {
    // 토큰이 담긴 객체 , 토큰
    if (req.cookies && req.cookies.token) {
        jwt.verify(req.cookies.token, jwtKey, (err, decoded) => {
            if (err) {
                console.log(err);
                return res.sendStatus(401);
            }
            res.send(decoded);
        })
    }
    else {
        res.sendStatus(401);
    }
})


// TODO: Reast Full API 사용법
// POST /api/board insert - POST 등록 & 생성
// GET /api/board 리스트가져오기 - GET 조회 & 가져오기 
// GET /api/board/:id  상세
// PUT /api/board/:id 업데이트 - PUT 업데이트 & 수정
// DELETE /api/board/:id 삭제 - DELETE 삭제
// PATCH /api/board/:id 업데이트 필드별


// 로그인
app.post('/api/login', (req, res) => {
    // 로그인 아이디 , 비밀번호 
    const loginId = req.body.loginId;
    const loginPw = req.body.loginPw;

    if(loginId === "" || loginId === undefined || loginId === null) {
        return console.log("아이디에 값이 없습니다.");
    };

    if(loginPw === "" || loginPw === undefined || loginPw === null) {
        return console.log("패스워드에 값이 없습니다.");
    };


    connection.query(

        `SELECT * FROM account WHERE userid = ? AND pw = ?`,

        // 보안 문제가 있기 때문에 SQL문에 ?를 사용하고 변수를 매핑해줘야 한다. 
        [loginId,loginPw], 

        //TODO: 아이디만 가지고 조회해서 값을 가져옴
        //TODO: 가져온 값이 있으면 패스워드 비교
        
        function(err, results, fields) {
            console.log(results);
            if (results.length === 1) {
                const options = {
                    domain: "localhost",
                    path: "/",
                    httpOnly: true
                };
        
                const token = jwt.sign({
                    id: results[0].id,
                    name: results[0].username,
                }, jwtKey, {
                    expiresIn: "15m",
                    issuer: "africalib"
                });
        
                res.cookie("token", token, options);
                res.send(results[0]);
            } else {
                res.sendStatus(404);
            }
        }
      );
})

/**
* ReastFull API post-logout
* 로그아웃
* 쿠키와 토큰을 삭제해 줌으로 로그아웃 시켜준다. 
*/
app.delete('/api/logout', (req, res) => {
    if (req.cookies && req.cookies.token) {
        res.clearCookie("token");
    }

    res.sendStatus(200);
})


/**
* ReastFull API get-signup
* 아이디 중복체크
* 'api/signup/:id'라는 라우터 경로에 'id'는 'req.params.id'로 불러올 수 있다.
* req 객체에 'parameter'라는 프로퍼티가 있고, 그 프로퍼티의 'id'라는 프로퍼티로 접근해 요청을 보낼 수 있는 것. 
*/
// 회원가입 TODO: 아이디 중복체크 하기 여기 꼭 
app.get('/api/signup/:id', async (req, res) => {

    const id = await req.params.id

    connection.query(

        // signup 컴포넌트의 userid 중복값 체크
        `SELECT * FROM account where userid = ?`,

        // 보안 문제가 있기 때문에 SQL문에 ?를 사용하고 변수를 매핑해줘야 한다. 
        id,

        function(err, rows) {
            if(!err) {
                res.send(rows[0]);
                console.log("중복");
                return
            } else {
                console.log(err);
                console.log("Error while performing Query.");
                res.sendStatus(200)
            }
        }
    )
});