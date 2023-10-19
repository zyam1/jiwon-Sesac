const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/ajax", function (req, res) {
  console.log(req.query);
  // { key: value, key: value }
  res.send(req.query);
});

app.post("/ajax", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", function (req, res) {
  console.log(req.body);
  const data = {
    ...req.body,
    msg: "반가워요",
  };
  //   {
  //     id: ,
  //     name: ,
  //     pw: ,
  //     msg: "반가워요",
  //   };
  res.send(data);
});


app.get("/fetch",function(req,res){
    console.log(req.query);
    res.send(req.query);
})

app.post("/fetch",function(req,res){
    console.log(req.body);
    res.send(req.body);
})

app.get("/test01",function(req,res){
    res.render("fdTest01");
})


app.get("/test02",function(req,res){
    res.render("fdTest02");
})


app.get("/axiosGetTest", function (req, res) {
    console.log(req.query);
    res.send(req.query);
  });




app.post("/axiosPostTest",function(req,res){
    console.log(req.body);
    
    
   
    const id1 ="jiwon";
    const pw1="1234";


    const success = (req.body.id===id1 && req.body.pw===pw1);

    const data = {
        ...req.body,
        success :success,
        msg:success ?"로그인 성공": "다시 입력해 주세요"
    }
    


    // const id ="jiwon";

    // const pw ="1234";
    //res.body와 id pw비교하는 코드 작성해서
    //일치하지않으면 =>로그인 실패(빨간글자)
    //일치하면 =>로그인 성공으로.(파란 글자)
    res.send(data);

})
app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});