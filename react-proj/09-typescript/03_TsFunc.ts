function sum(a:number,b:number):number{
     return a + b;
   // return "hell0" 리턴의 자료형이 지정한거랑 달라서 오류가난다
}
//함수 자체의 type -> 함수가 실행되어 결국 return 하는 값(잘안쓰는데 나중에 함수자체를 인자로 넘길때 사용)

console.log(sum(1,2));

//옵셔널한 매개변수 가능(단 리턴값에 자료형이 있다면 잘맞추기) 
// const sum1 =(a:number,b?:number):number => {
//     if(b){
//         return a + b; 
//     }
//     return a;
   
// }


//void:함수 자체의 return 값이 없을때 사용 
//함수 오버로딩 

//두 개의 수를 매개 변수로 받고 합을 console.log 로 출력하는 함수 sum1 만들기


function sum1 (a:number,b:number){
    console.log(a+b);
}
sum1(5, 11); // 테스트는 이렇게 하기!


// 매개 변수로 여러 개의 수를 받고 전달된 값을 모두 더하는 함수 sum2
// 모두 합산한 값을 "return" 합니다.
// Hint: 전개 연산자 이용하기

function sum2(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b,0)
    //reduce 함수사용 =>나중에 콜백함수로 바꿔보기
}



// 테스트는 이렇게!
console.log(sum2(1, 2, 3, 4, 10)); // 20

//제네릭 이용

function arrElement <t>(arr:t[],index:number){
    //배열과 인덱스 번호를 매개변수로 받고, Arr[index]에 대한 요소를 리턴
   return arr[index];
}


console.log(arrElement<string>(["a"], 0));

// 첫번째 인자로 들어간 배열의 길이보다 큰 index 수(두번째 인자)가 전달된다면 return false 시키기!
function arrElement2 <T>(arr:T[],index:number){
   if(index > arr.length){
    return false;
   }
   return arr[index];
}
console.log(arrElement2<string>(['a'], 1));