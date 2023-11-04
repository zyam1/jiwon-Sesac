const {Customer, Orders,Sequelize} =require("../model");
const Op =Sequelize.Op;

exports.main = async(req,res) =>{
    //customer의 주문 목록"custname"과 함께
    const cust = await Customer.findAll({
        attributes:["custid","custname"],
        where:{
            birth:{[Op.gte]:"2000-01-01"}
        },
        include:[
            {
                model:Orders,
                attributes:{exclude:["custid"]},
                // where:{}
                
            },
        ],

    });

    res.send(cust);
}