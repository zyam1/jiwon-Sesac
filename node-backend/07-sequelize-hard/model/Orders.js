function Orders(Sequelize,DataTypes){

//     orderid   INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
//    custid    CHAR(10) NOT NULL, 
//    prodname  CHAR(6) NOT NULL, 
//    price     INT  NOT NULL, 
//    amount    SMALLINT  NOT NULL,
//    FOREIGN KEY (custid) REFERENCES customer(custid)
        
    return Sequelize.define(
        "orders",
        {
            orderid: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
              },
              custid: {
                type: DataTypes.STRING(10),
                allowNull: false,
              },
              prodname: {
                type: DataTypes.STRING(6),
                allowNull: false,
              },
              price: {
                type: DataTypes.INTEGER,
                allowNull: false,
              },
              amount: {
                type: DataTypes.INTEGER,
                allowNull: false,
              },
            
            },
        {
            tableName:"orders",
            freezeTableName:true,
            timestamps:false,
        }
    );
}

module.exports =Orders;