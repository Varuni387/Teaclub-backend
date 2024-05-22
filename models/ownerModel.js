import mongoose from "mongoose";

const schema = new mongoose.Schema({
    FirstName:{
        type:String
    },
    LastName:{
        type:String
    },
    Age:{
        type:String
    },
    ID:{
        type:Number
    },
    Pnum:{
        type:Number
    }
})

export const model = mongoose.model("OwnerModel",schema)