const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.get("/", (req, res) => {
    //
    res.send("여기는 루트 입니다.")
});

app.get("/login", (req,res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <input type="text"></input><br>
        <input type="text"></input><br>
    </body>
    </html>
    `)
})

app.listen(3000, function() {
    console.log("서버 가동");
});