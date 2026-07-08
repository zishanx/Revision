import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()

app.use(express.json())
dotenv.config()
app.use(cors())

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('MongoDB connected')
}).catch(err=>console.log(err.message))


app.listen(process.env.PORt,()=>{
    console.log("Running on port 3000")
})