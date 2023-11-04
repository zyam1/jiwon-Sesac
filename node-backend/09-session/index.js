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
        maxAge:10*60*100//보안이 중요한 서버라서 정해진 시간마다 쿠키를 빼앗아야 할 경우
    }
}))

app.get("/",(req,res)=>{
  
    res.send("안녕 세상아");
})
app.get("/set",(req,res)=>{
    console.log("1:",req.session)
    req.session.user ="lily"
    console.log("2:",req.session)
    res.send("set session");
})



app.get("/get",(req,res)=>{
    if(req.session.user){
        //로그인이 되어있는지 안되어있는지 세션에 값을 넣어서 확인 한다.
    }else{

    }
    console.log("user:",req.session.user)
    res.send({user:req.session.user});
})







app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });
  