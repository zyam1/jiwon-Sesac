const crypto =require("crypto");

function createHashedPw(pw){
    return crypto.createHash("sha512").update(pw).digest("base64");
}

console.log("password1234:",createHashedPw("1234"));
console.log("password5678:",createHashedPw("5678"));

const input ="1234";
const db_pw="1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w=="

console.log("compare result:",createHashedPw(input)==db_pw);

function createHashPwWithSalt(pw){
    const salt =crypto.randomBytes(16).toString("base64");
    console.log("salt:", salt)
    const iterations =100;
    const keylen =64;
    const digest ="sha512"; 
    return crypto.pbkdf2Sync(pw,salt,iterations,keylen,digest).toString("base64");
    //암호화 할 문자열, salt,반복횟수,키의 길이, 알고리즘

}
console.log("pw salt: ", createHashPwWithSalt("1234"));