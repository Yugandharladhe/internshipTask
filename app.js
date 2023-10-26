const express=require("express")
const dotenv=require("dotenv")
dotenv.config()
const loginRoute=require("./routes/Login")
const RegisterRoute=require("./routes/Register")

const PORT=9090
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const db=require("./models/index")


//create main model
const employee=db.Assignment

app.use(loginRoute)
app.use(RegisterRoute)

app.get("/",async(req,res)=>{
    
    const data=await Employee.findAll({})
    res.json(data)
})



app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`)
})