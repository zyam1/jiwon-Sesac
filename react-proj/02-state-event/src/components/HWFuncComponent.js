import { useState } from "react";
function HWFuncComponent (){
    const[number,setNumber] =useState(0);//초깃값 0설정
    function increase (){
        setNumber((prevNumber)=>prevNumber+1);
    }
    function decrease (){
        setNumber((prevNumber)=>prevNumber-2);
    }
    return(<>
    <div>함수형 컴포넌트 State실습 숫자:{ number}{""}</div>
    <button onClick={()=>{increase()}}>+1</button>
    <button onClick={()=>{decrease()}}>-2</button>

    </>)
}

export default HWFuncComponent;