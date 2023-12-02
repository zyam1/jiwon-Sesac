import { useState } from "react";
function ListMap(){
    
    const productList = [
        {id:1 ,  product:"가방" },
        {id:2 ,  product:"패딩" },
        {id:3 ,  product:"신발" },
        {id:4 ,  product:"상의" },
        {id:5 ,  product:"하의" },
    ];
    const [list,setList] =useState(productList);
    const [newProduct, setNewProduct] = useState("");

    // map은 앞에 있는 배열에 대해 반복을 하면서,
    // map의 인자로 넘어가는 콜백함수의 return값을 이용해 새로운 배열을 생성함.
    //[<li>a</li>, <li>b</li>, <li>c</li>,] 

    const addProduct = () =>{
        //원래라면 새로운 상품을 back에서 insert하고 생긴 고유 primary값을 id에 담아두면 된다.
        const newObj = {id: list[list.length-1].id+1, product:newProduct};

        const newList =[...list,newObj];
        setList(newList);
        setNewProduct("");
    }
    const deleteProduct = (id) =>{
        //더블클릭한 상품에 대해서 삭제를 진행
        //filter 메소드는 앞에 있는 배열에 대해서 반복 
        //filter 메소드의 return값은 조건이 되어야함. 조건이 true일 경우, 해당 원소는 새로운 배열에 포함.
        //조건이 false일 경우 , 해당원소는 새로운 배열에 포함하지 않음 
        const newList = list.filter((value)=>{
            return value.id !=id;
        }
        )
        //rendering 할 때 list배열을 이용. ->list 배열에서 원하는 원소를 삭제해야함.
        //삭제된 버전의 배열을 setlist를 이용하여 list의 상태를 변경
         setList(newList);
    };
    return(<>
   
    <ul>
        <label>추가할 상품:</label>
        <input type="text" 
        value={newProduct}
        onChange={(e)=>{
            setNewProduct(e.target.value);
        }}/>
        <button onClick={addProduct}>추가</button>
        {list.map((value)=>{
            return<li key={value.id} onDoubleClick={()=>{deleteProduct(value.id)}}>{value.product}</li>;
        })}
            {/* 맵에는 콜백함수가 온다 */}
        
    </ul>
    </>)
    
}
export default ListMap;