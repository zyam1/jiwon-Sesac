const data ={
    name:"jiwon",
    gender :"women"
}



const jsonData =JSON.stringify(data);
console.log("json:",jsonData)

console.log("",JSON.parse(jsonData));