import { Component } from "react";

class EventClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            msg :"hello",
        };
        //메소드 내부에서 클래스의 this를 사용하고 싶을경우,생성자 내에서 this를 bind 해주는 작업을 거쳐
        //함수 선언문을 이용하여 선언된 메소드는 this객체를 직접 바인딩 해줘야
        //handleOnClick 내부에서 클래스를 가리키고 있는 this를 사용할 수 있다.
        this.handleonClick = this.handleonClick.bind(this)
    }
    //함수 선언문을 사욯하여 메소드를 정의
    //함수 내부에서 자체적인 this를 만들 수있고,this가 클래스의 this가 아니게된다
    //해결법1. 생성자 내부에서 this를 원하는 것으로 바인딩
    //해결법2. 함수 표현식을 사용 한다.
    handleonClick(){
        this.setState({msg:"bye"});
    }

    // 함수 표현식(함수가 선언될때 this를 결정지음)
    handleonClickHello= ()=>{
        this.setState({msg:"hello"});
    }
    render(){
        return(
            <>
            <h3>클래스형 컴포넌트 event 핸들링 공부 </h3>
            {this.state.msg}
            <button onClick={this.handleonClick}>
             잘 가 라
            </button>
            <button onClick={this.handleonClickHello}>
             다시 안녕
            </button>
            
            <button onClick={(e)=>{
                //e는 리액트 합성 이벤트 객체(함성이벤트 매개변수), 함성 이벤트에 대한 모든 정보를 담고 있음.
                //그중에 target리아는 거에 접근을 하면, 이벤트가 걸린 태그를 확인할 수 있음.
                console.log(e);
            }}>
                test
            </button>
            </>
        )
    }
}
export default EventClass;