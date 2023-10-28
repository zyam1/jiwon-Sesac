

const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmembership");


router.get("/", controller.membership);

module.exports = router;


