const mongoose=require("mongoose");

const conectDB=async ()=>{
    try {
        const connection= await mongoose.connect("mongodb://127.0.0.1:27017/MyPracticeDB");
        console.log("DB connect");

        await UserModel.insertOne({name:"sage",age:"21",email:"dsfh@hjd",password:"sjdskdj"});
        console.log("data insert");
    } catch (error) {
        console.log("error",error);
    }
}

const UserSchema=mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    password:String
},{
    versionKey:false
})

const UserModel=mongoose.model("user",UserSchema);
module.exports=UserModel;
module.exports=conectDB;