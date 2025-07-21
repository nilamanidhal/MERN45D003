const User=require("../model/usermodel")
const bcrypt =require("bcrypt");
const jwt=require('jsonwebtoken');


exports.Register= async (req,res)=>{
try {
    const {fullname,email,password,phonenumber}= req.body;

    if(!fullname || !email || !password){
        return res.send({status:false,message:"fill all the field"});
    }

    const existuser=await User.findOne({email:email});

if(existuser){
    return res.send({status:false,message:"already exist"});
}

bcrypt.hash(password, 9, async function (err, hash) {
      if (err) {
        return res.send({ status: false, message: "Error on bcrypt" });
      }
  const user = new User({
        fullname,
        email,
        password: hash,
        phonenumber,
      });

      const result = await user.save();

      return res.send({
        status: true,
        message: "Register success",
        user: result,
      });
    });



} catch (err) {
    return res.send({
        status:false,
        message:"registration failed",
    });
}
};

exports.Login=async (req,res)=>{
  try {
    const {email,password}=req.body;
    if(!email || !password){
      return res.send({status:false,message:"please field all the field"})
    }

    const user=await User.findOne({email});
    if(!user){
      return res.send({status:false,message:"user not found"})
    }

    bcrypt.compare(password,user.password, function(err, result) {
    // result == true
    if(err){
      return res.send({status:false,message:"error on bycrypt"});
    }
    // return res.send(user);
    const secret=process.env.jwt_secrete
   const token= jwt.sign({user}, secret, { expiresIn: '1h' });

   return res.send({status:true,message:"sucessfully login",user,token});
});



  } catch (error) {
    console.log("error is",error);
    res.send({status:false,message:"somthing went wrong",error})
  }
}


exports.GetAllUser=async (req,res)=>{
  try {
    const user=await User.find();
    if(!user){
      return res.send({status:false,message:"no user found"});
    }else{
      return res.send({status:true,message:"user found",user})
    }
  } catch (error) {
  console.log("error is",error);
  res.send({status:false,message:"somthing is error",error})   
  }
}