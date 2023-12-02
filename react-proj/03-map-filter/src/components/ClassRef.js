import { Component } from "react";

class ClassRef extends Component {
        focusInput = () => {
            this.input.focus();
        };
        render(){
      
        return(<>
        <input type="text"
        ref={(ref)=>{
            //ref에 콜백함수를 넘길 때 첫번째 매개변수는
            //ref 걸려있는 요소를 담고 있다.
            this.input =ref;
        }}/>
        <button type="button" onClick={this.focusInput}>버튼</button>
        </>)
    }
}
export default ClassRef;