const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const {User} = require("./model/User")
const config = require('./config/key')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
mongoose
  .connect(
    config.mongoURI
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.post('/register', (req, res) =>{
  // 회원가입 시 필요한 정보들을 client에서 가져오면
  // 그것들을 database에 넣어준다
  const user = new User(req.body)
  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({success: true})
  })
  
})

app.post('/login', (req, res)=> {
  // 요청된 email을 데이터베이스에 있는지 찾는다.

  // 요청된 메일이 db에 있다면 비밀번호가 맞는지 확인한다

  // 비밀번호가 맞다면 그 유저를 위한 token 생성
  
})



// root directory에 오면 hello world 출력
app.get("/", (req, res) => res.send("Hello World!"));
// port 5000번에서 실행
app.listen(port, () => console.log(`Example app listening on port ${port}`));
// 모델은 하나ㅢ 스키마를 감쌈
// 스키마는 정보를 정의