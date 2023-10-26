const router=require("express").Router()
const register=require("../controllers/Register")


router.post("/register",register);

module.exports=router