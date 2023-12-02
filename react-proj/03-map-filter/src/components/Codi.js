//실습1
import { useState } from "react";
function Codi (){
    const amailList =[
        {name:"코디" , email:"codi@gmailcom" },
        {name:"지원" , email:"jiwon@example.com" }
    ]
    const [list,setList] =useState(amailList);
    const [newEmail,setNewEmail]=useState("");
    const [newName,setNewName]=useState("");
    function addEmail(){
        const newObj = {name:newName , email:newEmail};
        const newList =[...list,newObj];
        setList(newList);
        setNewName("");
        setNewEmail("");
    }
    function delList(name){
        const newList =list.filter((value)=>{
            return value.name != name;
        })
        setList(newList);
    }
    return(<>
    {/* 이름 */}
    <input type="text" placeholder="이름" value={newName} onChange={(e)=>{
            setNewName(e.target.value);
        }}/>
    {/* 이메일 */}
    <input type="text" placeholder="이메일" value={newEmail} onChange={(e)=>{
            setNewEmail(e.target.value);
        }}/>
    <button onClick={addEmail}>등록</button>
    <div>
        <ul>
            {list.map((value)=>{
                return<li
                key={value.name}
                onDoubleClick={()=>{delList(value.name)}}
                >
                    {value.name} : {value.email}
                </li>
                
            })}
        </ul>
    </div>
    </>)
}

export default Codi;