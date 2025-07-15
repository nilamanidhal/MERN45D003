const express=require("express");
const router=require("./routes/allRoutes");
const connectDB=require("./config/db");

const app=express();
// const router=express.Router();
const port=8000;

connectDB();
app.use("/api",router);

// //this is the middleware
// const validation=(req,res,next)=>{
//     console.log("validation");
//     next();
// }

// //anothor middleware
// const autho=(req,res,next)=>{
//      console.log("authntication");
//     next();
// }

// app.use("/api",router);

// router.get("/",validation,autho,(req,res)=>{
//     res.send("get method called");
// })


app.listen(port,()=>{
    console.log("my server is runing on port:",port)
})