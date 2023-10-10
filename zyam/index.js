//const add = require("./math.js");//모듈을 불러온 함수 (굳이 math파일에있는 변수이름과 같을 필요는 없다.)
const math =require("./math.js");


//파일에서 여러개의 식별자를 객체형태로 내보내는 경우 
//모듈을 받아올 때 객체를 그대로 math라는 식별자로 받음
const sum =math.add(3,5);
console.log(sum);
const Pi =math.PI;
console.log(Pi);



//파일에서 여러개의 식별자를 객체형태로 내보내는 경우(필요한것만 가져옴)
//특정식별자만 필요한 경우 (객체 구조분해 할당 문법을 통해 받아올 수 있다.)
//메모리상 추천하는 방식
const {minus,PI} =require("./math.js");
console.log(minus(5,1));
console.log(PI);