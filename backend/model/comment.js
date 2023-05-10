const mongoose = require("mongoose");
const commentSchema= new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        require:true
    }
},{timestamps:true})
module.exports=mongoose.model("comment",commentSchema);