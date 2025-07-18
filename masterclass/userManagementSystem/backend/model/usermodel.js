const mongoose=require("mongoose");

const userschema=new mongoose.Schema({
    fullname:{
        type:String,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
         type:String,
        require:true,
    },
    dob:{
        type:Date,
    },
    phonenumber:{
        type:Number
    },
});


const User = mongoose.model("users", userschema);

module.exports = User;