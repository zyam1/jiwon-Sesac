
const {commentInfos} =require("../model/Comment");
const {user} = require("../model/UserID");


exports.main = (req, res) => {
    res.render("index");
};


exports.comments = (req, res ) => {
    const commentData =commentInfos();
    //얘를 실행 시키면 데이터가 들어가게됨 

    res.render("comments",{
        commentInfos : commentData
    });
}





exports.login=(req,res) =>{
    res.render("login")
}

exports.axios =(req,res) =>{
    const userInfo = user();

    const success = (req.body.id===id1 && req.body.pw===pw1);

    const data = {
        ...req.body,
        success :success,
        msg:success ?"로그인 성공": "다시 입력해 주세요"
    }
    

    res.send(data);

}