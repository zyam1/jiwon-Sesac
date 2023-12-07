import { useEffect ,useState} from "react";

function LifeCycle(props){
    const {number}=props;
    const [text,setText] =useState("");
    //useEffect(콜백함수, 의존성 배열(배열이 뭐냐에따라서 실행이 되냐안되냐 판단))
    //1.의존성 배열이 빈경우 :
    //컴포넌트가 마운트될때 실행
    useEffect(()=>{
        console.log("function component : ♥️mount");

        return () => {
            console.log("function component : ☠️unmount");
        }
    },[]);

    //2.의존성 배열을 전달하지 않을 경우
    //컴포넌트가 mount & update 시에 콜백함수 실행시킴
    
    useEffect(()=>{
        console.log("function component : ✅update");
    });

    //3.의존성 배열에 원소가 존재할 경우
    //해당 원소가 mount&update가 될 때 마다 콜백함수를 실행시킨다.
    useEffect(()=>{
        console.log("function component : ✨textUpdate");
    },[text]);


    return (<>
        <h2>함수형 컴포넌트 LifeCycle 공부</h2>
        <div>number:{number}</div>
        <input 
            type="text" 
            value={text} 
            onChange={(e)=>setText(e.target.value)}
        />
    </>)
}

export default LifeCycle;