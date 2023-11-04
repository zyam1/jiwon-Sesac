const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use( "/static", express.static( "static" ) );
app.use(express.urlencoded({ extended: true }));

const router = require("./routes");
//다른 파일 불러오려면 이름도 적어야한다 index불러오는거기때문에 안적는거일뿐

app.use("/", router);

app.get("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
