const express=require("express")
const { CLIENT_RENEG_LIMIT } = require("tls")

const PORT=9090
const app=express()

app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`)
})