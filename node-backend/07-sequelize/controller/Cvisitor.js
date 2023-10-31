const {Visitor} = require("../model"); 

exports.home = (req, res) => {
  res.render("index");
};

//GET/visitorts =>기존 방명록 조회후 
exports.visitor = (req, res) => {
    //select * from visitor(전체)
    Visitor.findAll().then((result)=>{
        console.log("findAll result: ",result);
        console.log("0 index의 username",result[0].username);
        res.render("visitor",{data : result});
    });//조건이 없으므로 모두 넘긴다

};

// POST /visitor => 방명록 insert
exports.postVisitor = async(req, res) => {
    const data = {
        username:req.body.comment,
        comment:req.body.comment
    }
    // Visitor.create(data)
    //     .then((result)=>{
    //         console.log("create",result);
    //         res.send(result);
    // });
    const createVisitor = await Visitor.create(data);
    res.send(createVisitor);
};

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
   Visitor.destroy({
    where:{
        id:req.params.id,
    },
   }).then((result)=>{
    console.log("destroy result:",result);
    res.send({result:true});
   })
};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
  Visitor.findOne({
        where:{
            id:req.params.id,

        },
    }).then((result)=>{
        console.log("findOne result:",result);
        res.send(result);
    })
};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
    const data= {
        username:req.body.username,
        comment:req.body.comment,
    }
    Visitor.update(data,{
        where:{
            id:req.body.id,
        },
       
    }).then((result)=>{
        res.send({result:true});
    })
};

exports.getTest =(req,res)=>{
    Visitor.findAll({
        attributes:["username","id"],
        // where:{
        //     id:req.params.id,

        // },
        order:[["username","ASC"]]
    }).then((result)=>{
        console.log("findOne result:",result);
        res.send(result);
    });
};