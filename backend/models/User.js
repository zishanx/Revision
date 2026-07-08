
import mongoose from "mongoose";

const userSchema = newmongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: String, default: false }
})

const User = mongoose.model("User", userSchema)