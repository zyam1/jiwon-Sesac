import { Component } from "react";

class HandleEx extends Component{
    state = {
        text : "Hello World!"
    }

    render(){
        return(
            <>
            <h3>{this.state.text}</h3>
            <button onClick={()=>{
                this.setState({text:"Good bye.."})
            }}>클릭</button>
            </>
        )
    }
}
export default HandleEx;