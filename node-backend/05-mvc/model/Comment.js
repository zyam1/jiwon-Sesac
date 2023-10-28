exports.commentInfos =() => {

    //mysql연결 select * from commrnt;로 가져왔다고 가정
    return[
        {id:1, userid:"jiwon", data: "2013-10-26", comment: "hello"},
        {id:2, userid:"coco",  data: "2013-10-26", comment: "mew"}
];
}