// function FuncPropsEx(props){
   
//     return(<div>
//         <div>함수형 컴포넌트를 이용하여 (Props)</div>
//         <div>{props.title}</div>
//         <div>{props.content}</div>
//     </div>
    

// )
// }


// function FuncPropsEx(props){
   
//     return(<div>
//         <div>함수형 컴포넌트를 이용하여 (Props)</div>
//         <div>{props.title}</div>
//         <div>{props.content}</div>
//     </div>
    

// )
// }

// 매개변수로 받아올때부터 구조분해
// function FuncPropsEx({title,content}){
   
//     return(<div>
//         <div>함수형 컴포넌트를 이용하여 (Props)</div>
//         <div>{title}</div>
//         <div>{content}</div>
//     </div>
    

// )
// }


//proptype을 이용해서 어떤 props가 넘어올지 명시 방법
//유연한 js의 특징으로 인해 예기치 못한 오류가 발생
import PropTypes from "prop-types"
function FuncPropsEx({title,content,number}){
   
    return(<div>
        <div>함수형 컴포넌트를 이용하여 (Props)</div>
        <div>{title}</div>
        <div>{content}</div>
        <div>숫자는:{number}</div>
    </div>
    

)
}
FuncPropsEx.defaultProps ={
    // 데이터 값이 안넘어왔을때 기본값으로 할당할 부분
    title:"지원"
}

FuncPropsEx.propTypes ={
    title:PropTypes.string,
    content:PropTypes.string,
    number:PropTypes.number,
}

export default FuncPropsEx;