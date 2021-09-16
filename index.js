const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sohae:sohae123@cluster0.gl0k0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// root directory에 오면 hello world 출력
app.get("/", (req, res) => res.send("Hello World!"));
// port 5000번에서 실행
app.listen(port, () => console.log(`Example app listening on port ${port}`));
// 모델은 하나ㅢ 스키마를 감쌈
// 스키마는 정보를 정의