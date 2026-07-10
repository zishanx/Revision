import mongoose from "mongoose";

const PollSchema = mongoose.Schema({
    question: "What's your favorite language?",
    options: ["JS", "Python", "Go"]
})