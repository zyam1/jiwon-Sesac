// PostItem 컴포넌트입니다.
interface Post{
    userId:number,
    id:number,
    title:string,
    body:string,
}
interface PropsComtent{
    post:Post,
 
}


const PostItem = (props:PropsComtent) => {
  const { post} = props;
  
  return (
    <div className='PostItem'>
      <div>
        <span className='id'>No. {post.id}</span>
        <span className='title'>- {post.title}</span>
      </div>
      <p className='body'>{post.body.slice(0, 120)}...</p>
    </div>
  );
};

export default PostItem;