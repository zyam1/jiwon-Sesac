const { render } = require("ejs");
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", function(req, res){
//     res.render("index");
// })

//const router = require("./routes/index");
const router =require("./routes")//routes 인경우만 줄여쓸 수 있다
app.use("/",router);
//localhost:8000/~~~~~뒤에 뭐가오든 라우터 객체안에 들어간다
//미들웨어
//1차적으로 /뒤에있는건 저쪽으로 들어가서 있는지 없는지 확인 한다

app.get("*",function(){
    res.send("페이지를 찾을 수 없습니다.")
})//위에서 다 걸러져 아무런 요청이 없을때 작동(그래서 보통 마지막에 작성)

app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });

  