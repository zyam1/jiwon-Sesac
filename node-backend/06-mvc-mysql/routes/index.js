const express = require("express");
const router = express.Router(); //2.라우터 객체를 만들어준다
const controller =require("../controller/Cvisitor")



// ~~~~~:8000 -> index.ejs render
router.get("/",controller.home);

// ~~~~~:8000/visitor -> visitor.ejs render
router.get("/visitors",controller.visitor
);

//방명록 등록
router.post("/visitor",controller.postVisitor);
//방명록 수정
router.patch("/visitor",function(req,res){
    res.send("");
});

//방명록 삭제
router.delete("/visitor/:id",controller.deleteVisitor);







module.exports = router;

