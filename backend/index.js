const express=require("express");
const app = express();
const mongoose=require("mongoose")
const commentroute=require("./routes/commentroute")
const cors =require("cors");
const dotenv=require("dotenv");
dotenv.config({path:'config/config.env'});
const PORT=process.env.PORT;

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log ("database connected")
})

app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use("/api",commentroute)

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})