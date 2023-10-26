const {createToken,verifyToken}=require("../utils/JwtTokenGeneration")
const db=require("../models/index")

const LoginModel=db.Login
const Login=async(req,res)=>{
    const {login_id,password}=req.body
    try{
        // console.log(login_id)
        const login=await LoginModel.findByPk(login_id)
        // console.log(login?.login_id)
        if(login && password===login?.password)
        {
            const token=createToken({login_id:login?.login_id});
            res.json({token});
        }
        else{
            res.json({msg:"Check username or password"})
        }


    }catch(err)
    {
        console.log(err)
        res.json({msg:err})
    }
}

module.exports=Login