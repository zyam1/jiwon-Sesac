//import add2 from "./math_es6.js";
//math_ex6 파일에서 default로 export 하고 있는 식별자를 add2라는 식별자로 받아옴 

//console.log(add(2,3));

//import {add} from "./math_es6.js";
//console.log(add(2,3));


//es6에서 모듈 import 할때, 구조분해없이 식별자를 만들어서 받아오는 방법은 
// module 파일()에 default 로 export해야함
import math from "./math_es6.js";
//console.log(math.PI); //오류발생!!
