const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
         type:String,
         required:true,
    },
    imageUrl:{
         type:String,
         required:true,
    },
    address:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"Address",
    }
});

const User = mongoose.model("User",userSchema);
module.exports = User;