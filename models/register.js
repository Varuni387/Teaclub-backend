import mongoose from "mongoose";

const schema = new mongoose.Schema({
    FirstName:{
        type:String
    },
    LastName:{
        type:String
    },
    Email:{
        type:String
    },
    Pno:{
        type:Number
    },
    User:{
        type:String
    },
    Pwd:{
        type:String
    }
})

export const model = mongoose.model("RegisterModel",schema)

