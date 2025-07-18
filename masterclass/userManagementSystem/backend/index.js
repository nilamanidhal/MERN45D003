const express=require('express');
const env=require('dotenv');
const DBConnect=require("./config/db");
const routes=require("./routes/allRoutes");

const app=express();
app.use(express.json());
env.config();
DBConnect();
const port=process.env.port;


app.get("/",(req,res)=>{
    res.send("welcome to user management system backend");
});

app.use("/api",routes);

app.listen(port,()=>{
    console.log(`backend is running in port ${port}`);
})

