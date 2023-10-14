const cat ={
    name: "코코",
    age:2,

    mew : function(){
        console.log("먀...")
    }
}

const cat2 ={
    name: "야옹이",
    age:3,

    mew : function(){
        console.log("먀...")
    }
}

//PadcalCase 규칙을 이용해서 식별자 생성
//camelCase 에서 첫글자도 대문자인 방식 

class Cat  {
    //생성자: 메소드의 일종
      // 메소드중에서 Cat 클래스를 이용해서 객체를 만드는 순간에 호출되는 메소드
    constructor(name, age){
        //오타내면 안됨
        this.name=name;
        this.age=age;

    }

    //메소드
    mew(){
        console.log("먕..");
    }
    //고양이의 정보를 콘솔로 찍는 메소드
    info() {
        console.log(`이름은 : ${this.name},\n나이는: ${this.age}`);
    }
}


const cat4 =new Cat("코코",2);

cat4.mew();
cat4.info();


class School{
    constructor( friend,classnumber){
        this.friend=friend;
        this.classnumber=classnumber;

    }

    info(){
        console.log(`반이름은 ${this.classnumber}이고, 친구는 ${this.friend}명 입니다`);
    }
}

const sesac = new School(2,"웹풀스텍");
sesac.info();