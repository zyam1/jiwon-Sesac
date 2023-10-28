const express =require("express");
//exprerss를 가져온다
const app =express.Router();





router.get("/",function(req,res){
    res.render
});



router.get("/axiosGetTest", function (req, res) {
    console.log(req.query);
    res.send(req.query);
  });





router.post("/axiosPostTest",function(req,res){
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