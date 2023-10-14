class House{
    constructor(name, year){
        this.name =name;
        this.year=year;

    }
    age(){
        console.log(`이 건물은 ${new Date().getFullYear()-this.year}년 됐습니다.`)
    }
}
const home = new House("새싹","2022");
home.age();



class Apartment extends House{

    constructor(name, year, floor){
        //부모의  생성자 호출
        super(name, year);
        this.floor =floor;

    }

    //오버라이딩 : 부모에 있는 메소드를 자식이 다시 정의하는것(함수의 이름이랑 변수의 개수가 똑같아야함)
    age(){
        console.log(`이 건물은 ${new Date().getFullYear()-this.year}년 됐습니다.`)
        console.log(`입주는 ${this.year + 1}부터 시작했습니다`)
    }
}

//오버로딩 : 똑같은 이름으로 여러개의 함수를 선언하는 것(매개변수가 다르다, 이름만 같은 다른함수 단, 자바스크립트에서는 작동하지 않음)

//js는 변수를 적지않으aus --처리됨

const apart = new Apartment("레이크" ,2013 , 23);

apart.age();
console.log(apart.year,apart.floor);


//=========실습=============

class Shape{
    constructor(width, height){
        this.width=width;
        this.height=height;
    }

    getArea(){
        return this.width * this.height;
    }
}

let rec1 =new Shape(3,4);
console.log(rec1.getArea());

//실습2--------------------

class Rectangle extends Shape {
    constructor(width,height){
        super(width,height);
    }
    getArea(){
        return this.width * this.height ;
    }
    getDiagonal(){
       return Math.sqrt(this.width**2+this.height&&2);
    }
}

class Triangle extends Shape{
    constructor(width,height){
        super(width,height);
    }
    getArea(){
        return this.width * this.height / 2 ;
    }
}

class Circle extends Shape{
    constructor(width,height,radius){
        super(width,height);
        this.radius =radius;
    }

    getArea(){
        return this.radius**2 * 3.141592;
    }
}

const rec =new Rectangle(3,4);
const tri =new Triangle(3,4);
const cir =new Circle(3,4,2);
console.log(rec.getArea(),tri.getArea(),cir.getArea());