import {useForm} from "react-hook-form";

export default function ReactHook (){
    const {
        register,
        handleSubmit,
        formState:{errors},
    }= useForm();
    function onValid(data){
        console.log("성공",data);
    }
    function onInValid(errors){
        console.log("실패",errors);
    }
    return(<>
    <h4>react hook form실습</h4>
    <form onSubmit={handleSubmit(onValid,onInValid)}>
        <input type="text" placeholder="이름" {...register("name",{
            required:"이름은 필수값 입니다"
        })} />
        <br/>
        <input type="text" placeholder="나이" {...register("age",{
            required:"나이는 필수값 입니다"
        })} />
        <br/>
        {errors.name?.message}
        <br />
        {errors.age?.message}
        <br />
        <button type="submit">제출</button>
    </form>
    </>)
}