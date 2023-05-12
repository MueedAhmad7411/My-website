const { usercomment, allcomments } = require("../controller/controller");

const express=require("express");
const router=express.Router();
router.post("/comment",usercomment);
router.get("/getallcomments",allcomments);

module.exports=router;