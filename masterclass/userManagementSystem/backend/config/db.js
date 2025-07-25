const mongoose=require("mongoose");

const DBConnect=async ()=>{
    try {
        const connect=await mongoose.connect(process.env.mongo_user);
        console.log(`databse is connected ${connect.connection.host}`);
    } catch (err) {
        console.log(err);
    }
};

module.exports=DBConnect