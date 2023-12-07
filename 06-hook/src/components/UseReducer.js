import{useReducer, useState} from "react"
const initialValue = {value :0};
const reducer =(prevState,action)=>{
    
    //액션값에 따른 조건을 추가하게된다
    switch(action.type) {
        case 'PLUS':
            return {value:prevState +1};
        case 'MINUS':
            return{value: prevState.value-1};
        case "RESET":
            return initialValue;
        default:
            return {value: prevState.value};
    }
};

export default function UseReducer(){
    const [state,dispatch] =useReducer(reducer,initialValue);
    const plus =() => dispatch({type:"PLUS"});
    const minus =() => dispatch({type:"MINUS"});
    const reset =() => dispatch({type:"RESET"});
    return(<>
     <h3>useReducer공부</h3>
     <div>
        {state.value}
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
        <button onClick={reset}>RESET</button>
     </div>
    </>)
}
