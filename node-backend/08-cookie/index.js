const express = require("express");
const app = express();
const PORT = 8000;
const cookieParser = require("cookie-parser");
app.set("view engine", "ejs");
app.use(cookieParser());//쿠키를 해석할 수 있게 해줌

const cookieConfig ={
    //2.설정을 해준다
    //httpOnly:true,//document.cookie로 접근 불가능,서버에서만 쿠키에 접근 할 수 있다
    maxAge:30000,
    //만료일(밀리초단위로 보존하고자 하는 기간을 설정한다)
    // path:"/",
    // //경로 설정 (root부터 )
    // secure:true,//보안 서버에서만 쿠키를 동작하게 한다.
    // signed:true//쿠키 암호화->true값을 주면 조회할때 req,signedCookies에서 가져와야한다
}

app.get("/",(req,res)=>{
    res.render("index");
})


app.get("/set",(req,res)=>{
    //1.
    //서버가 쿠키를 만들어서 응답으로 보낸다
    //key:key /value:value1 
    res.cookie("key1","value1",cookieConfig);
    res.send("set cookie");
})
app.get("/get",(req,res)=>{
    console.log("cookie:",req.cookies)
    res.send(req.cookies);
})

app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });
  