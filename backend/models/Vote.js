import mongoose from 'mongoose'

const VoteSchema = mongoose.Schema({
    pollId: ObjectId,   // which poll
    userId: ObjectId,   // who voted
    option: String,     // what they chose
    createdAt: Date
})