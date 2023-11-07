const bcrypt =require("bcrypt");

const salt =10;

function bcryptpw(pw){
    return bcrypt.hashSync(pw,salt);

}
console.log('1234: ',bcryptpw("1234"))

function comparepw(pw,db_pw){
    return bcrypt.compareSync(pw,db_pw);
}

const db_pw=bcryptpw("1234");
console.log("pw 1234:",db_pw);
console.log("pw 1234: ",)