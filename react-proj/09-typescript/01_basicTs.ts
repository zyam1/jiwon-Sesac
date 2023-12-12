//let str=hello;
let str: string = "hello";
//변수이름을 정한뒤 : 자료형
console.log(str);

let arr: number[] = [1,2,3,4];

let numStrArr: (number| string)[] =[1,'a'];
//number이거나 string 이거나 

let abc: number|string="a";
abc=5;

console.log(abc);

//1.

let olimoic_newgame:readonly [object,boolean] = [
    {  name:"쇼트트랙",
       type:"혼성 계주",
    
    },
    true,
];


