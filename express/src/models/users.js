const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    //date:{
        //type:Date
    //}
    
})
const User=new mongoose.model("User",userSchema);
module.exports=User;