const express =require("express");
const router =express.Router();
const controller =require("../controller/Cmain");


//코드를 분리해서 정리하기위함

//localhost:8000/
router.get("/",controller.main);

//localhost:8000/comments 로 연걸 
router.get("/comments",controller.comments);

router.get("/login",controller.login);

router.post("/axios",controller.axios)

module.exports =router;



