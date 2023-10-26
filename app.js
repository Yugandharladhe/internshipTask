const express=require("express")


const PORT=9090
const app=express()
const db=require("./models/index")


//create main model
const employee=db.Assignment


app.get("/",async(req,res)=>{
    
    const data=await Employee.findAll({})
    res.json(data)
})



app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`)
})