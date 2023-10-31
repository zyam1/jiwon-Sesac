//테이블 구조를 정의
//orm은 객체와 db의 table을 매핑하는 기술
//sequelze을 이용해서 table의 구조를 정의할 필요가 있음.

function Visitor(Sequelize, DataTypes){
    return Sequelize.define(
        //모델(table) 정의 세개의 인자가있다
        "visitor",//테이블 이용
        {
            id:{// int not null primary key auto_increment
                type: DataTypes.INTEGER,
                allowNull: false,//true가 기본값이다.(null값이 들이갈 수 있음 비어놔도 된다)
                primaryKey:true,//false가 기본값
                autoIncrement:true,//false가 기본값
            },
            username:{
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            comment:{
                type: DataTypes.TEXT("medium"),
            }
        },//컬럼 정의
        {
            tableName:"visitor",
            freezeTableName:true,
            //sequelize에서 간혹 단수로 지정해둔 테이블 이름을 sql문을 날릴 때 복수로 변경시키는 경우가 이씀 
            //insert into visitor ~~ =>create() =>insert into visitors ~~바꾸는 경우가 있기때문에 그걸 막는 내용
            timestamps:false,//(저장하지마!! ==flase)
            //insert,update시에 그 시간을 자동으로 저장하겠다.라는 옵션
            //createAt ,updateAt이라는 컬럼에 자동으로 저장하려고해서 안만들어둔 나의 테이블에 저장할시 오류가 생기기때문에 꺼둠
        }//부가적 세팅

    );
}

module.exports = Visitor;