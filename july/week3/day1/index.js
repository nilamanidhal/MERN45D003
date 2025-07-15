const express=require("express");
const app=express();
const port=9000;


app.use(express.json())
const router=express.Router();
app.use("/api",router)


router.get("/",(req,res)=>{
    res.send("my server is accepted");
})

router.post("/user",(req,res)=>{
    const {name,age}=req.body;
    console.log(name,age);
    const userobj=req.body;
    // console.log(userobj);
    res.send("request sended");
})

router.put("/user/:userId",(req,res)=>{
    const {userId}=req.params;
    res.send(`put id is ${userId}`);
})

router.delete("/user/:id",(req,res)=>{
   const {id}=req.params;
    res.send(`delete id is ${id}`);
})


// app.get("/",(req,res)=>{
//     // const obj=req.query;
//     // console.log(obj.name);
//     res.send(`"my server is accepted"`);
// })

// app.post("/user",(req,res)=>{
//     const {name,age}=req.body;
//     console.log(name,age);
//     const userobj=req.body;
//     // console.log(userobj);
//     res.send("request sended");
// })

// app.put("/user/:userId",(req,res)=>{
//     const {userId}=req.params;
//     res.send(`put id is ${userId}`);
// })

// app.delete("/user/:id",(req,res)=>{
//    const {id}=req.params;
//     res.send(`delete id is ${id}`);
// })

app.listen(port,()=>{
    console.log("my server is running on port:",port);
})