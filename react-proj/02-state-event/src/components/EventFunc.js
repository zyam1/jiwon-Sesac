import { useState } from "react";

function EventFunc (){
    const [msg,setMsg] = useState("hello");
    const [name,setName] =useState("");
    const handleOnClick =(e)=>{
        setMsg("bye");
        console.log(e)
    }

    function handleonClickHello (){
        setMsg("안녕");
    }
    function handleonClicTest (a){
        setMsg(a);
    }
    const handeleEnter = (e) => {
        console.log(e);
        if(e.key=="Enter"){
            console.log("엔터가 눌렸습니다");
        }
    }
    return(<>
    <h3>함수형 컴포넌트 event 핸들링 공부</h3>
    <div>{msg}</div>
    <button onClick={
        handleOnClick
    }>잘가</button>
    <button onClick={
        handleonClickHello
    }>어서와</button>
    {/* 함수에서 매개변수를 받고 싶으면 어떻게 하나요? */}
    {/* 익명함수를 선언하고, 그 내부에서 함수를 실행 */}

    {/* 또는 .bind사용 */}
    {/* bind의 첫번째 매개변수는 .앞에있는 함수 의 this를 결정 한다. */}
    <button onClick={
        handleonClicTest.bind(null,"바인드 활용")
        // 첫번째 매개변수(this)를 결정할게 없기때문에 null을 넘겨준뒤 그 다음 매개변수 차례대로 적는다
    }>바인드</button>
    {/* input 태그에서 엔터를 누르면 "엔터를 눌렀습니다!" 라는 콘솔이 찍히도록 */}
    <input onKeyDown={
        handeleEnter
    }/>

    </>)
}
export default EventFunc;