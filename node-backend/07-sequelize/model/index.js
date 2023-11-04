const Sequelize = require("sequelize");

//key로 접근
const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
//sequelize객체를 만든다(테이블 마다 객체를 만드는건 무리)

db.sequelize = sequelize;
db.Sequelize = Sequelize;//라이브러리 에서 호출 모듈 호출한 그자체
// db={ sequelize : sequelize, Sequelize: Sequelize}; =>db안에 할당 시킴

db.Visitor = require("./Visitor")(sequelize, Sequelize);//db안에Visitor호출 한 것을 넣음
//const Visitor =require("/visitor")
//db.Visitor = Visitor(equelize, Sequelize)를 축약한 코드임
// db.Visitor에는 sequellize로 visitor 테이블을 정의한 객체를 담음

// db.User = require("./User")(sequelize, Sequelize);처럼 나중에 코드가 확장됨

//----------------------------회원가입, 로그인 기능------------------
db.User = require("./UserSQ")(sequelize, Sequelize);

module.exports = db;