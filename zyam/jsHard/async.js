function goMart(){
    console.log("마트에 가서 어떤 음료를 살지 고민한다");
}

let product;
let price;


function pickDrink(callback){
    setTimeout(function(){
        console.log("고민 끝!");
        product = "제로콜라";
        price = 2000;
        callback(product,price)
        
    }, 3000);
}

function pay(product,price){
    console.log(`상품명: ${product},가격:${price}`);
}
goMart();
pickDrink(pay);
//pay(product,price);

//자바스트립트는 비동기언어라는 특징이 있다.


function promise1(flag){
    return new Promise(function(resolve,reject){
        if(flag){
            resolve("상태 fullfilled ! then으로 연결")
        }
        else{
            reject("상태 rejectted ! catch로 연결")
        }
    })
}


//특정 함수가 return하는 값이 promise 객체일 경우, chaining으로 then, catch 라는 메소드
promise1(true).then((result)=>{
    console.log(result);
    //reult 에는 resolve로 보낸 
});
