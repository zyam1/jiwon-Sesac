const express = require("express");
const app = express();
const PORT = 8000;
const cookieParser = require("cookie-parser");
app.set("view engine", "ejs");
app.use(cookieParser());
const router = require("./routes");
app.use("/",router);

const cookieConfig ={
  maxAge:24*60*60*1000,
}







app.get("*", function (req, res) {
    res.render("404");
  });





app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });
  