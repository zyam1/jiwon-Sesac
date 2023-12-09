import { useEffect, useState } from "react";


export default function PhotosPage(){
    const [photo, setPhoto] =useState();
    const [img, setImg] =useState();
    const getPhotos = async()=>{
        const res =await fetch("https://jsonplaceholder.typicode.com/photos")
        //이미지 주소를 가져온걸 한번더 받아야함 아마도
        //배열을 만들어서 주소를 하나하나 넣어야하나?
        
        const photos =await res.json();
        setPhoto(photos);
    }
    useEffect(()=>{
        getPhotos();
    },[])
    return(<>
    
    {photo ? <>{photo.map((value)=>(
        <ul key={value.id}>
        <li>번호:{value.id}</li>
        <li><img src={`${value.url}`}></img></li>
        </ul>
        ))}</>:<div>로딩중,,,</div>}
    
    </>)
}