const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//라우터 분리 (요청을 정의)

const router =require("./routes/user");
app.use("/user",router);




app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});