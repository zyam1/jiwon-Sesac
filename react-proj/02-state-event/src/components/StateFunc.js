import { useState } from "react";//state를 사용하기위해
//state는 계속해서 변하는 개체

function StateFunc(){
    //useState는 배열을 반환 -> 그 배열을 구조분해하여 number와 setNumber 선언
    // [state변수를 리턴 , state를 변경시키는 함수를 리턴]
    const [number,setNumber] =useState(0);//useState(state초기 값)
    const [text, setText] =useState("하하");
    return(
        <>
        <h3>함수형 컴포넌트 state 공부</h3>
        <div>
            number state value{number}{""}
            <button onClick={()=>{
               // setNumber(number+1);//넘버를 사용하고 있는 부분을 다시 렌더
               // setNumber(number+1);// 비동기 함수이기 때문에 이렇게 하면 2씩오르지않음
               setNumber((prevNumber)=>prevNumber+1);
               setNumber((prevNumber)=>prevNumber+1);
            }}>
            +1
            </button>
        </div>


        </>
    );
}

export default StateFunc;