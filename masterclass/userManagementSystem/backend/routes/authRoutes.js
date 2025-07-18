const express=require('express');
const { Register } = require('../controller/authColtroller');
const authRoutes=express.Router();

authRoutes.post("/register",Register);
module.exports=authRoutes;
