import { useState ,useEffect } from "react";
import { useParams, useSearchParams ,useNavigate} from "react-router-dom"

export default function ProductDetailPage(){
    const [product,setProduct] =useState(null);
    const [error,setError] =useState(null);
    const {id} =useParams();
    console.log(id)
    //쿼리를 가져오고 싶을떈?
    const [query,setQuery] =useSearchParams();
    console.log(query);
    //query
    //products/:id/:name
    //params -> {id:value,name:value}

    //Link 컴포넌트를 이용하지 않고, js함수 내부에서 페이지르 이동시키는 코드를 
    const navigator =useNavigate();


    const getProduct =async()=>{
        try{
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            if(res.ok){
                setProduct(await res.json());
            }else{
                throw Error("존재하지않는 상품 입니다")
            }
            
        
        }catch(error){
           console.log(error);
           setError(error.message);
        }
       
    }
    useEffect(()=>{
        getProduct();
    },[]);

    return(<>
        <div>여기는 상품 상세 페이지</div>
        <button onClick={()=>{
            navigator(-1)
        }}>목록으로</button>

        <button onClick={()=>{
            navigator("/")
        }}>홈으로</button>

        {/* <button onClick={()=>{
            setQuery({name:"codee",id:5})
        }}>setQuery테스트</button> */}
        {product? (<ul>
            <li>번호:{product.id}</li>
            <li>내용:{product.body}</li>
        </ul>):<div>Loading...</div>}
    </>)
}