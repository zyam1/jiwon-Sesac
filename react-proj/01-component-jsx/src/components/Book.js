function Book (props){
    return(
        <div>
            <div style={{color:"orange"}}>이번주 베스트셀러</div>
            <div><img src="/book.jpg" alt="" style={{width:"200px"}}/></div>
            <h1>{props.title}</h1>
            <div>저자:{props.author}</div>
            <div>판매가:{props.price}</div>
            <div>구분:{props.type}</div>
        </div>
    )
}


export default Book;