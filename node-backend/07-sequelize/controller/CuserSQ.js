const {User} = require('../model')

exports.index = (req, res) => {
  res.render('Sindex')
}

exports.signup = (req, res) => {
  res.render('signup')
}



exports.visitor = (req, res) => {
  //select * from visitor(전체)
  Visitor.findAll().then((result)=>{
      console.log("findAll result: ",result);
      console.log("0 index의 username",result[0].name);
      res.render("user",{data : result});
  });//조건이 없으므로 모두 넘긴다

};

//회원가입
exports.post_signup = (req, res) => {
//   User.post_signup(req.body, function () {
//     res.send({ result: true })
//   })
    const data ={
        userid:req.body.userid,
        pw:req.body.pw,
        name:req.body.name,
    }
    
    User.create(
        data
      ).then((result)=>{
      res.send({ result: true })
    })

}

exports.signin = (req, res) => {
  res.render('signin')
}

//로그인 포스트 전송
exports.post_signin = (req, res) => {
  User.findOne({
    where: { 
      userid:req.body.userid,
      pw:req.body.pw
    },
  })
    .then((rows) => {
      if (rows.length > 0) {
        // 사용자가 존재하는 경우
        res.send({ result: true, id: rows[0].id });
      } else {
        // 사용자가 존재하지 않는 경우
        res.send({ result: false });
      }
    })
    .catch((error) => {
      // 오류가 발생한 경우 처리
      console.error(error);
      res.status(500).send({ result: false, error: 'An error occurred' });
    });
}


//프로필(회원정보 수정) 포스트 전송
exports.profile = (req, res) => {
//   User.get_user(req.body.id, function (result) {
//     console.log('profile', result)
//     if (result.length > 0) res.render('profile', { data: result[0] })
//     else res.redirect('/user/signin')
//   })
}

//회원 정보 수정
exports.profile_edit = (req, res) => {
//   const data = {
//     ...req.body,
//     id: req.params.id,
//   }
//   User.update_profile(data, function () {
//     res.send({ result: true })
//   })
}

//회원 삭제
exports.profile_delete = (req, res) => {
//   User.delete_user(req.params.id, function () {
//     res.send({ result: true })
//   })
}
