import { useRef } from "react";
function FunRef(){
    const input = useRef();
    const focusInput=()=>{
        input.current.focus();
    };


    return(
        <>
         <input type="text"ref={input}/>
         <button onClick={focusInput}>버튼</button>
        </>
    )
}
export default FunRef;