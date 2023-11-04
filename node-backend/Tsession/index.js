const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;



app.set("view engine", "ejs");



app.use(session({
    secret:"secret key",
    resave:false,//모든 요청마다 session을 다시 저장할 거니?
    saveUninitialized:true,//클라이언트가 처음 접속할때 session을 초기화 할것인가?
    cookie:{
        httpOnly: true,
        maxAge:3*60*1000
    }
}))



app.get("/",(req,res)=>{
  
    res.render("index");
    //인덱스 페이지에 로그인(/set으로 이동 시키기)버튼과 입장하기(/get으로 이동 시키기) 버튼이 있다.(views에 접근할 수 있는 미들웨어 가 필요)
})

//세션을 주는 페이지=> 세션을 만들었다는 데이터를 보내야 한다.

app.get("/set", (req, res) => {
    req.session.user = "jiwon";
    res.send("로그인 되었습니다");
});


//result페이지를 열고 user 값을 보내야 한다.
app.get("/get", (req, res) => {
    res.render("result", { user: req.session.user });
});





app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });
  