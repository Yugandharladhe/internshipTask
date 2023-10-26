const jwt=require("jsonwebtoken");
const { Model } = require("sequelize");

const jwtSecretKey=process.env.jwtSecretKey

const createToken=(data)=>{
    const token=jwt.sign(data,jwtSecretKey)
    return token;
}

const verifyToken=(token)=>{
    const verified=jwt.verify(token,jwtSecretKey);
    if(verified)
    {
        return verified;
    }
    else{
        return null;
    }
}

module.exports={createToken,verifyToken}