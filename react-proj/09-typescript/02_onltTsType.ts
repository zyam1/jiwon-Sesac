//or  
type gender ="Men"|"Women";
const lily:gender ="Women"
//사용자가 타입을 만들 수 있다

type productInfo =[string,number];
const cola:productInfo=["cola",2500]
// 튜플도 만들 수 있다

//객체에 대한 타입을 지정할 겨우 
interface ProductInfo2 {
    productName:string,
    price:number,

}

//interface는 type을 사용하여 아래처럼도 가능
type ProductInfo3={
    productName:string,
    price:number,
    sale?:number//이런식으로 뒤에 ?를 적을 경우 있을수도있고 없을수도있는 요소

}

const cider:ProductInfo2={
    productName:"cider",
    price:2500,
    //sale:200, 이런식으로 요소를 추가하면 안된다고 뜬다
}
const beer:ProductInfo3={
    productName:"beer",
    price:2000,
    sale:200
}

//옵셔널한 키에 접근하기 위해선 
//undefined에는 함수에 접근 할 수 없다.접근하기위해선 ?를 접어야한다(옵셔널 체이닝 해줘야한다. 정의되어있지않은 요소에 접근하면 undefined를 출력)

//실습
// 아래 나와 있는 heroGame_A 와 heroGame_B 를 만족할 수 있는 interface Game 만들어보기

interface Game{
    title:string,
    price:number,
    desc?:string,
    category:string,
    platform:string

}

let heroGame_A: Game = {
    title: 'DC 언체인드',
    price: 50000,
    desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
    category: '액션',
    platform: '모바일',
  }
  
  let heroGame_B: Game = {
    title: 'MARVEL 퓨처파이트',
    price: 65000,
    category: '롤플레잉',
    platform: '모바일',
  }


