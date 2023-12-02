import { useState } from "react";
import { useRef } from "react";
function MakeListOne(){
    const inputN =useRef();
    const inputT=useRef();

    const [table,setTable]=useState([]);
    const [newTitle,setnewTitle]=useState("");
    const [newName,setnewName]=useState("");
    const [ftable,setFTable]=useState([]);
    function addTable(){
        if(inputN.current.value==""){
            inputN.current.focus();
            return
        }
        if(inputT.current.value==""){
            inputT.current.focus();
            return
        }
        const newObj = {id:table.length ,title:newTitle , name:newName};
        const newTable =[...table,newObj];
        setTable(newTable);
         setnewName("");
         setnewTitle("");
         
    }
    function find(){
        const findObj = table.filter((value)=>{
            return value.title = find;
        })
        setFTable(findObj);
    }
    return(<>
       {/* 이름 */}
       <input ref={inputN} type="text" placeholder="이름" value={newName} onChange={(e)=>{
            setnewName(e.target.value);
        }}/>
        {/* 제목*/}
        <input ref={inputT} type="text" placeholder="제목" value={newTitle} onChange={(e)=>{
                setnewTitle(e.target.value);
            }}/>
        <button onClick={addTable}>등록</button>
        <table>
           <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
           </tr>
           {table.map((value)=>{
                return<tr
                key={value.name}
                
                >
                    <td>{value.id+1}</td>
                    <td>{value.title}</td>
                    <td>{value.name}  </td>
                </tr>
                
            })}
        </table>
        {/* 검색*/}
        <select>

        </select>
        <input type="text" placeholder="검색" value={""}/>
        <button onClick={find}>검색</button>    
        <table>
        <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
           </tr>
           {ftable.map((value)=>{
                return<tr
                key={value.name}
                
                >
                    <td>{value.id+1}</td>
                    <td>{value.title}</td>
                    <td>{value.name}  </td>
                </tr>
                
            })}
        </table>

    
    </>)
}
export default MakeListOne;