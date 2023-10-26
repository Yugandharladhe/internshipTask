const bcrypt=require("bcrypt")
const db=require("../models/index")

const LoginModel=db.Login
const Register=async(req,res)=>{
    const {login_id,password,email,school_code,status}=req.body
    try{
        const find=await LoginModel.findByPk(login_id);
        if(find)
        {
            res.json({msg:"User already registered"});
        }
        else{

            const encryptedPass=await bcrypt.hash(password,10);
            const login=await LoginModel.create({login_id,password:encryptedPass,email,school_code,status})
            if(login)
            {
                res.json({msg:"user registered successfully",registration:login})
            }
            else{
                res.json({msg:"somethig went wrong"})
            }
        }
    }catch(err)
    {
        res.json({msg:err})
    }
}

module.exports=Register