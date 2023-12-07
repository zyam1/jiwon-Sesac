import { Component } from "react";

class LifeCycleClass extends Component{
    state = {text:""};

    componentDidMount(){
        console.log("class component:✅ mount");
    }

    componentDidUpdate(prevProps,prevState){
        console.log("class component: ♥️update")
        
        //text state 가 변경될 때마다if문 안에 있는 코드 실행시킴
        if(prevState.text != this.state.text){
             console.log("class component: ✨textupdate")
        }
       
    }
    componentWillUnmount(){
        console.log("class component: ☠️unmount")
    }

    render(){
        return(<><h2>클래스형 컴포넌트 LifeCycle공부</h2>
        <div>number:{this.props.number}</div>
        <input
            type="text"
            value={this.state.text}
            onChange={(e)=>this.setState({text: e.target.value})}/>
        </>)
    }
}

export default LifeCycleClass;