import express from "express"
import dotenv from 'dotenv'
dotenv.config()

const  port = process.env.PORT || 5000

const app = express()

app.get('/' , (req,res)=>{
    return res.status(200).json({message:'helllo parthesh'})

})

app.get('/health' , (req,res)=>{
    return res.status(200).json({message:'all is good'})
    
})





app.listen(port , (req,res)=>{
    console.log(`server started at ${port}`)
})