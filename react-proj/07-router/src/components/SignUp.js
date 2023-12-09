import {useForm} from "react-hook-form";
export default function SignUp () {
    const {register,
           handleSubmit,
           formState:{errors},
           }=useForm();//객체 구조분해

    const onValid =(data)=>{
        console.log("성공",data)
    }
    const onInValid =(errors)=>{
        console.log("실패",errors)
    }
    return(<>
        <h4>react hook 테스트</h4>
        {/* handlesubmit(onValid,onInvalid) */}
        {/* onValid:폼을 정상적으로 제출 할 수 있는 상태일때, 실행시킬 함수 */}
        <form onSubmit={handleSubmit(onValid,onInValid)}>
            <input type="text" placeholder="아이디" {...register("ID",{
                required:"아이디는 필수값 입니다",
                
            })}/>
            <br/>
             <input type="text" placeholder="이름" {...register("Name",{
                required:"이름은 필수값 입니다",
                minLength:{
                    value:2,
                    message:"이름은 두 글자 이상 입력해야 합니다"
                }
                
            })}/>
        <br/>
        {errors.Name?.message}
        <br/>
        {errors.ID?.message}
        <br/>
        <button type="submit">제출</button>
        </form>
    </>)
}