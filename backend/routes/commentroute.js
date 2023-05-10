const { usercomment } = require("../controller/controller");

const express=require("express");
const router=express.Router();
router.post("/comment",usercomment)

module.exports=router;