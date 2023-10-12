const express = require("express");

//express 모듈 import
const app = express(); //server 객체
const PORT = 8000;
//포트(1~65536 존재, 1~1023까지는 정해진 기능이 있다.)
//3000,8000등등 사용할 수 있다 3306은 mysql에서 사용하기때문에 피한다

//<http메소드가 적히기전에>
//app객체의 view engine 설정을 ejs로 변경
app.set("view engine","ejs");
//app객체의 view폴더 설정. 기본값 : ./views
//만약 ./view 폴더로 바꾸고 싶다면 아래처럼 작성하면된다.
//app.set("views", "./views")

app.use("/static", express.static(__dirname +"/static"));
// __dirname : ~~~~~/01-express/static   을 클라이언트가 /static 주소로 들어올 수 있다.(뒤를 가상으로 만들어주는 느낌이라고 생각하면 된다)
//app.use("/public", express.static(__dirname +"/static"));
// __dirname : ~~~~~/01-express/static   을 클라이언트가 /public 이라는 주소로 들어올 수 있다.(뒤를 가상으로 만들어주는 느낌이라고 생각하면 된다)

//get 메소드(http 메소드):클라이언트가 요청 할 수 있는 방법들을 정의함.
//localhost:8000/
app.get("/",function (req,res){
    //응답 객체 내의 send 메소드 실행."hello express" 문자열을 응답으로 전송한다.
    res.send("hello express");
})
//cjt번째 매개변수 :request 객체(요청)
//두번째 매개변수 :respons 객체(응답)

//localhost:8000/test
app.get("/test",function (req,res){
    //응답 객체 내의 send 메소드 실행."hello express" 문자열을 응답으로 전송한다.
    //res.send("get test");
    console.log(__dirname)
    res.sendFile(__dirname + "/index.html")//html파일을 응답으로 보낸다
})

//localhost:8000/ejs
app.get("/ejs", function(req,res){

    //render메소드의 기본 dir(디렉토리가) "./views"
   //res.render("index.ejs");
    res.render("test/index");
})


app.get("/lily",function(req,res){
    res.render("lily",{
     name:"lily",
     product:["운동화","후드집업","스웨터"] });
})
//서버를 연다
//localhost:8000
//127.0.0.1:8000<-내컴퓨터로 8000번에 들어간다
app.listen(PORT,function(){
    console.log(`server open ${PORT}`);
})
//닫거나 오류가 나기전엔 계속 열린다 콘솔에 ctrl+c 치면 끈다는뜻