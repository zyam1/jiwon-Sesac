// export default FunctionComponent = () =>
// {
//     return
//     <div>
//         Function Component (함수형 컴포넌트)입니다.
//     </div>
// };


function FunctionComponent(){
    const text ="hello?";
    const name = "coco";
    function tell(){
        if(name==="jiwon"){
            return "안녕하세요";
        }else if(name==="jiin"){
            return "어 왔냐";
        }else{
            return "누구..."
        }
    }
   

    return (<div>
        {/* 하나의 태그로 감싸서 return */}
       <div>Function Component (함수형 컴포넌트)입니다.</div> 
       <div>Function Component (함수형 컴포넌트)입니다3.</div> 

       {/* js문법 사용 가능 (변수)*/}
       <h3>코딩온{text}</h3>
       {/* 삼항 연산자 */}
       <h4>{name ==="jiwon" ? "지원님 안녕하세요":"누구세요?"}</h4>
       {/* 복잡한 기능은 함수를 만들어서 실행시키는 방법으로 사용 가능하다 */}
        <h5>{tell()}</h5>
       {/*조건에 따른 렌더링(&&) */}
       <h5>{name==="coco" && "코코 귀여워"}</h5>
       {/* 인라인스타일 적용방법 (html과 다름=>style 속성 안으로 객체를 전달한다. js문법이기 때문에 {}한번쓰고 객체를 전달하는 거기떄문에 {}를 적어서 결국 {{}} 이런 모양이 된다)*/}
       <div style={{fontSize:"20px", color:"red"}}>인라인 스타일 적용</div>
       
       {/* class와 onclick을 jsx에서 사용 하기 */}
       <div className="test-css">jsx에서 css 사용하기</div>
       {/* html에서는 함수를 호출 ,but jsx에서는 함수를 선언 */}
       <button onClick={()=>{
        console.log(" 함수를 호출할 순 없고 함수를 선언해야해")
       }}>콘솔에 글이 찍히는 버튼</button>
       {/* 종료태그 필수!*/}
       {/* 이미지가 같은 파일안에있으면 그냥 경로를 적으면 되고 다른경로에 있는경우 import해서 사용 */}
    </div>)
    
}

export default FunctionComponent;