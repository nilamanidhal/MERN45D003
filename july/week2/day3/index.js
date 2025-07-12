// //to import the package
// const http=require("http");
// const port=9000;

// //server creation
// const myServer=http.createServer((req,res)=>{
//     console.log("requst accepted");
//     res.end("this is response");
// })


// //to run the server
// myServer.listen(port,()=>{
//      console.log("server is running on port",port);
// });




const express=require("express");

const app=express();
const port=9000;

app.get("/",(req,res)=>{
    console.log("request accepted");
    res.send("response sended");
})


app.post("/user",(req,res)=>{
    res.send("request sended");
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})