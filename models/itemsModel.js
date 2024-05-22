import mongoose from "mongoose";

const schema = new mongoose.Schema({
    Item:{
        type:String
    },
    Price:{
        type:Number
    },
    Type:{
        type:String
    },
})

export const model = mongoose.model("ItemsModel",schema)

