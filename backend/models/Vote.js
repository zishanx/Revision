import mongoose from "mongoose";

const VoteSchema = new mongoose.Schema({
    name: {type:String, require:true},

})