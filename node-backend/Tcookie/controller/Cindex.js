exports.home=(req,res)=>{
    const noPop =req.cookie.popup;
    res.render("index",{noPop});
    //변수를 보낸다 
    
}


exports.mkCookie=(req,res)=>{
    //값을 가져와서 쿠키를 생성한다.
    res.cookie("popup","y",this.cookieConfig);
    res.send({result:true});
}