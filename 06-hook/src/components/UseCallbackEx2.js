import { useCallback, useEffect, useState } from "react";

export default function UseCallbackEx2({ postId }) {
  const [post, setPost] = useState();
  //   https://jsonplaceholder.typicode.com/posts/
  const fetchData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await res.json();
    setPost(post);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h3>useCallback 공부 2</h3>
      <div>조회한 포스트 ID: {postId}</div>

      {post && (
        <div>
          <div>id: {post.id}</div>
          <div>title: {post.title}</div>
          <div>body: {post.body}</div>
        </div>
      )}
    </>
  );
}