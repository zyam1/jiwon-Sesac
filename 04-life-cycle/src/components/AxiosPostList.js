import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AxiosPostList() {
  const [post, setPost] = useState([]);

  
  const getData = async () => {
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");//형식을 잘 맞춰야함
      setPost(data);//가져온 데이터를 변수안에 넣기
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    
    setTimeout(()=>{
        getData();
    },2000);
    
  }, []); 

  return (
    <>
      {/* 내용 보이게 (아까랑 똑같음)*/}
      <div>
        {post.length <= 0 ? "Loading" : post.map((value) => (
          <li key={value.id}>
            <div>{value.title}</div>
            <div>{value.body}</div>
          </li>
        ))}
      </div>
    </>
  );
}
