import mongoose from "mongoose";

const schema = new mongoose.Schema({
    UserName:{
        type:String
    },
    Pswd:{
        type:String
    },
    Role:{
        type:String
    }
})

export const model = mongoose.model("LoginModel",schema)

