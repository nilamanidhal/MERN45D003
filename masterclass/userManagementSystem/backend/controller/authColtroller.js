const User=require("../model/usermodel")
const bcrypt =require("bcrypt");


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