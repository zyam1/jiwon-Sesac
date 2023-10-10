//중괄호를 안쓰면 :값을 return 하겠다는 뜻
const add =(a,b) => a + b;
const minus =(a,b) => a - b;
const PI= 3.141592

module.exports ={
    add,
    minus,
    PI,
};


// //위와 같은 코드
// const add2 =(a,b) => {
//     return a+b;
// }



module.exports.hello = "hello";
//선언 할 때 부터 내보내는 코드