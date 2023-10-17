const express = require("express");
const app= express();
const PORT = 8000;

app. set("view engine","ejs");

app.use(express.urlencoded({ extended: true }));
//x-www.-form-unlencoded 형태의 데이터를 해석
//true일 경우 qs 모듈(외부 모듈)을 이용한다. false일 경우, 내장 모듈인 queryString을 사용한다
app.use(express.json());
//aplication/json 형태의 데이터 해석
//미들웨어 !! 데이터를 쉽게 처리 할 수 있도록 도와주는 미들웨어

//localshost:8000번을 열기위해 
app.get("/",function (req,res){
    res.render("index");
});

//get 요청은url로 접속이 가능하다.
//get 요청은 req.query에 데이커가 담겨서 온다.
//데이터 전송시에 form태그를 이용할 경우, mwthod를 get으로 해두면 get 요청
//클라이언트가 get 요청으로 데이터를 보낼 때  url에 직접 query를 만들어서 전송이 가능하다.
//localhost:8000/get
//정보를 조회하는 요청에 많이 사용(CRUD 중에서 Read를 의미하는 요청에 사용)
app.get("/get",function (req,res){
    console.log(req.query);
    //req.query
    //req.query: get 요청에대해 client가 보낸 데이터를 담고 있다.
    //url 에서 기본 주소 (localhost:8000/get)뒤에 오는 ?id=lily&pw=1234 이런 주소를 의미
    //기본 주소?id 뒤에오는걸 query라고 한다
    res.send("get 요청 성공~~~!!");
});

//localhost:8000/post로 post요청을 받기 위한 준비.
//post요청은 url로 직접 요청하는것이 불가능함
//post요청에 대한 데이터는 req.body에 담아서 옴
//정보가 숨겨짐.(url에 노출되지않음.) 
//데이터를 새로 생성하는 요청에 자주쓰인다.(CRUD중에서 C)
app.post("/post",function(req,res){
    console.log(req.body);
    res.send("post 요청 성공~~!");
})

app.post("/post/ver2",function(req,res){
    console.log(req.body);
    res.render("result", {
        name: req.body.name ,
        email: req.body.email,
    });
})

app.get("/hw01",function (req,res){
    res.render("hw01");
});
app.post("/hw",function(req,res){
    res.send("post 요청 성공~~!");
    console.log(req.body);
})

app.post("/hw02/post",function(req,res){
    res.send("post 요청 성공~~!");
    console.log(req.body);
})
app.get("/hw02",function (req,res){
    res.render("hw02");
});
//조회, 데이터 저장(db에 데이터 삽입),원래있던 데이터 변경하기 위해, 데이터 삭제
//CRUD(create, read, update, delete)
app.listen(PORT, function(){
    console.log(`server Open:${PORT}`);
});