//테이블 구조를 정의 

function User(Sequelize,DataTypes){
    return Sequelize.define(
        "user",//user 라는 테이블 사용
        {
            id:{
                type: DataTypes.INTEGER,
                allowNull: false,//true가 기본값이다.(null값이 들이갈 수 있음 비어놔도 된다)
                primaryKey:true,//false가 기본값
                autoIncrement:true,//false가 기본값
            },
            userid:{
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            name:{
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            pw:{
                type: DataTypes.STRING(255),
                allowNull: false,
            }

        },//컬럼 정의 
        {
            tableName:"user",
            freezeTableName:true,
            timestamps:false,
        }//부가 세팅
    );
}

module.exports =User;