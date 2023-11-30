import { useState } from "react";

function TurnColor(){
    const [text,setText] =useState("검정색 글씨");
    const [color,setColor] =useState("black");
    return(<>
    <h2 style={{color:color}}>{text}</h2>
    <button onClick={()=>{
        setText("빨간색 글씨");
        setColor("red");
    }}>빨간색</button>
    <button onClick={()=>{
        setText("파란색 글씨");
        setColor("blue");
    }}>파란색</button>    
    </>)
}
export default TurnColor;