import {Component} from "react";
class HWClassComponent extends Component {
    state={
        numberT:0,
    }
    render(){
       
        return(
           <> 
           <div>클래스 형 컴포넌트 State실습 숫자:{this.state.numberT}</div>
        <button onClick={()=>{
           this.setState((prevState)=>{
            return{numberT : prevState.numberT +2};
        }); 
        }}>+2</button>
        <button onClick={()=>{
            this.setState((prevState)=>{
            return{numberT : prevState.numberT -1 }
        })
        }}>
            -1
        </button>
        </> 
        )
        
    }
  
}
export default HWClassComponent;