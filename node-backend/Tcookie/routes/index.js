const express = require("express");
const router = express.Router();
const controller = require("../controller/Cindex");




router.get("/",controller.home);




//쿠키를 만든다
router.post("/setCookie",controller.mkCookie);

module.exports = router;