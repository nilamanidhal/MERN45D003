const jwt=require("jsonwebtoken");

exports.isUser=async (req,res,next)=>{
  try {
    const token=req.headers.authorization;
    res.send(token)
  } catch (error) {
      console.log("error is ",error);
    res.send({status:false,message:"somthing error"});
  }
}