import { useState } from "react";

function Look (){
    const [look,setLook] =useState("visible");
    const [text,setText]=useState("사라져라");
    return(<>
    <h2 style={{visibility:look}}>안녕하세요</h2>
    <button onClick={()=>{
        if(look=="visible"){
            setLook("hidden");
            setText("보여라");
        }else{
            setLook("visible");
            setText("사라져라");
        }
        
    }}>{text}</button>
    </>)

}

export default Look;