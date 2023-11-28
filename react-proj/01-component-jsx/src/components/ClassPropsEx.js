import { Component } from "react";

class ClassPropsEx extends Component {
    render(){
        return(
            <>
            <div>클래스형 컴포넌트를 이용 (props)
            <div>
                제목은 {this.props.title}
            </div>
            </div>
            </>
        )
    }
}