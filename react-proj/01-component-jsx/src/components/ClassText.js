import { Component } from "react";
import proptypes from "prop-types"

class ClassText extends Component {
    render(){
        return(
            <>
            <div>{this.props.text}</div>
            <button type="button" onClick={()=>{
                this.props.valid();
            }}>valid</button>
            </>
        )
    }

    static defaultProps = {
        text:"이건 기본 입니다"
    }
    static propTypes ={
        text:proptypes.string.isRequired,
    }
}



export default ClassText;