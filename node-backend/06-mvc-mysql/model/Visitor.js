const mysql =require("mysql");


//createConnection : mysql 연결 정보를 받아서 mysql과 연결
//db연결한다. host ,user, password ,database 이름
const conn = mysql.createConnection({
   host:"localhost",
   user:"user",
   password:"1234qwer*",
   database:"test"

})

// exports.getvisitor=()=>{
//    return[
//         {id:1,username:"홍길동", Comment:"내가 왔다" },
//         {id:2,username:"이찬혁", Comment:"으라차차" }
//    ] ;
// };

exports.getVisitors=(cb)=>{
   conn.query(`SELECT * FROM visitor`,(err,rows)=>{
      //err변수가 빈값이 아니라면 에러가 발생 했다는 것
      if(err){
         throw err;
      }
      console.log("visitor",rows);
      cb(rows);
   })
}

exports.insertVisitor = (data, cb) => {
   // insert into visitor (username, comment) values ('????', '?????')
   const sql = `insert into visitor (username, comment) values ('${data.username}', '${data.comment}')`;
 
   conn.query(sql, (err, result) => {
     // err 변수가 빈 값이 아니라면, err가 발생했다는 것.
     if (err) {
       throw err;
     }
 
     console.log("visitor insert", result);
     cb(result.insertId);
   });
 };

 exports.delVisitor = (id,cb)=>{
   const sql =`delete from visitor where id = ${id}`
   conn.query(sql,(err,result)=>{
      if(err){
         throw err;
      }

      let flag=false;
      if(result.affectedRows){
         flag= true;

      }
      console.log("visitor delete",result);
      cb(flag);
   })
 }