// 모듈 로드
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');

// 초기화 파트
const app = express();
const users = require('./routes/api/user');

// 미들웨어 설정 파트
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());

// 몽고DB 설정 파트
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("몽고 DB가 연결되었습니다."))
    .catch(err => console.log(err));

// 패스포트 모듈 설정
require('./config/passport')(passport);


// 라우팅 파트
app.use('/api/users', users);

// 서버 실행
app.listen(5000, (req, res) => {
    console.log("서버 실행중..");
});