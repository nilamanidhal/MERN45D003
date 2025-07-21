const express=require('express');
const { Register,Login, GetAllUser } = require('../controller/authColtroller');
const { isUser } = require("../middleware/isUser");

const authRoutes=express.Router();

authRoutes.post("/register",Register);
authRoutes.post("/login", Login);
authRoutes.get("/", isUser , GetAllUser);
module.exports=authRoutes;
