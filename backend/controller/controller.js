const Comment =require("../model/comment");

exports.usercomment=async(req,res)=>{
    const{firstname,lastname,email,comment}=req.body;
    try{
    const newcomment=await Comment.create(req.body);
    if(!firstname&&lastname&&email&&comment){
        res.status(400).json({
            success:false,
            Message:"Plz fill the required field"
        })
    }
    await newcomment.save();
    res.status(200).json({
        success:true,
        newcomment,
    })}catch(error){
         res.status(500).json({
            success:false,
            message:error.message
         })
    }
    
};