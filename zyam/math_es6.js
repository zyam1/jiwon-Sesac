const add =(a,b) =>a+b;//중괄호 안쓰면 바로 리턴하겠단 뜻
const minus =(a,b) =>a-b;

const PI =3.14;
//1)하나만 내보낼 경우
//module.eaports =add;
export default add;

//2)여러개 내보낼 경우
// module.exports ={
//     add,
//     minus,
// };
//export default PI;
export {add , minus};


