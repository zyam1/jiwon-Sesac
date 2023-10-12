const fruits =["apple","banana","grape"];

const [apple2, banana2, grape2,, strawberry2 = "strawberry"] = fruits
//const apple2 =fruit[0]; 
//const banana2 =fruit[1]; 
//const grape2 =fruit[2]; 





const obj = {
    name: "jiwon",
    gender : "여",
    age: 27,

};
const {age, gender , name:name2 , test = "test"} =obj;






let x =1, y=3;
[x,y]=[y,x];
console.log(x);

const arr1= [1,2,3,4,5];
const arr2=["a","b","c","d","e"];
const arr3 =[...arr1,...arr2];

console.log("arr3는:",arr3);
//...[1,2,3,4,5] => 1,2,3,4,5 (전개구문)

// -------------------실습-----------------------

const hello = [..."hello"];
console.log(hello);

const word1="abc";
const word2="xyz";

const word3=[...word1,...word2];
console.log("실습: ",word3)



const obj2 ={
    name: "jiwon",
    gender : "여",
    age : 99,
}

const obj3={
    ...obj2,
    test : "test",
}

console.log("obj3", obj3);

const values =[10,20,30];
function get(a,...rest){
    console.log(a);
    console.log(rest);//남은 인자들이 배열로 들어가게된다.
}

get(...values);