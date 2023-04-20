const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')


// TODO: Reast Full API 사용법
// POST /api/board insert - POST 등록 & 생성
// GET /api/board 리스트가져오기 - GET 조회 & 가져오기 
// GET /api/board/:id  상세
// PUT /api/board/:id 업데이트 - PUT 업데이트 & 수정
// DELETE /api/board/:id 삭제 - DELETE 삭제
// PATCH /api/board/:id 업데이트 필드별


/**
* ReastFull API post-board
* 게시판 글 작성하기
*/
app.post('/api/board', (req, res) => {
    // 게시판 번호 , 게시글 제목 , 게시글 내용, 작성자

   // TODO: 인증처리하고 유저아이디로 받지말고 JWT로 써서 빼기 (JWT, 세션 공부)     

    const board_title = req.body.board_title;
    const board_content = req.body.board_content;
    const board_userid = req.body.board_userid;

    // TODO: value 값 확인하기

    connection.query(
        // boardwrite DB에 boardtitle, boardcontent, boarduserid 값을 저장한다
        // TODO: 쿼리구문 작성할때 데이터 맵핑해서 넣기
        `INSERT INTO boardwrite(
            boardtitle, boardcontent, boarduserid
        ) VALUES (
           ?, ?, ?
        ) `,

        [board_title, board_content, board_userid],

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


/**
* ReastFull API get-board
* 게시판 리스트 가져오기
*/
app.get('/api/board', (req,res) => {

    connection.query(
        // TODO: 페이징 뷰 날짜 집어넣기(정렬)
        `SELECT * FROM boardwrite`,

        function(err, rows) {
            if(!err) {
                res.send(rows);
                return
            } else {
                console.log(err);
                console.log("Error while performing Query.");
                res.sendStatus(200)
            }
        }
    )

})


/**
* ReastFull API get-board/:id
* 게시판 리스트를 클릭 했을 때 보여주는 게시판 상세보기
*/
app.get('/api/board/:id', (req,res) => {

    const id = req.params.id;

    connection.query(
        `SELECT * FROM boardwrite where boardnum = ?`,
        
        id,

        function(err, rows) {
            if(!err) {
                console.log(rows);
                res.send(rows[0]);
                return
            } else {
                console.log(err);
                console.log("Error while performing Query.");
                res.sendStatus(200)
            }
        }
    )
})

/**
* ReastFull API put-board/:id
* 게시판에 작성된 게시글 업데이트
*/
app.put('/api/board/:id', (req,res) => {
    
    // TODO: 가장먼저 사용자가 로그인이 되어있는지 부터 확인하기 
    // TODO: 데이터를 먼저 가져온 뒤 사용자의 아이디와 동일한지 먼저 체크 후 업데이트 할 수 있게 해주기 

    const board_title = req.body.boardtitle;
    const board_content = req.body.boardcontent; 
    const id = req.params.id; // TODO: 유저 아이디 말고 JWT로 변경하기

    console.log(board_title, board_content);

    connection.query(
        // TODO: 쿼리구문 맵핑해서 다시 작성하기
        `UPDATE boardwrite SET boardtitle = ?, boardcontent = ? WHERE boardnum = ?`,
        
        [board_title, board_content, id],

        function(err, rows) {
            if(!err) {
                console.log(rows);
                res.send(rows[0]);
                return
            } else {
                console.log(err);
                console.log("Error while performing Query.");
                res.sendStatus(200)
            }
        }
    )
})


/**
 *  ReastFull API get-board/:id 
 *  게시판 글 삭제
 */
app.delete('/api/board/:id', (req,res) => {

    const id = req.params.id;

    connection.query(
        `DELETE FROM boardwrite where boardnum = ?`,

        id,

        function(err, rows) {
            if(!err) {
                res.send(rows[0]);
                console.log("테이블 삭제완료");
                return
            } else {
                console.log(err);
                console.log("Error while performing Query.");
                res.sendStatus(200)
            }
        }
    )
})