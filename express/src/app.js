const express =require("express");
const app=express();
require(".db/connect");
const User=require("./models/users");
app.use(express.json())






app.post("/app",async(req,res)=>{
try{
const firstUser=new User(req.body);
const result= await firstUser.save();
    res.send(result)
}catch(err){
    console.log(err);
}


app.listen(8000);
})