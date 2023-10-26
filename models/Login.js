const {Sequelize}=require("sequelize")

module.exports=(sequelize,DataTypes)=>{
    const Login=sequelize.define("Login",{
        login_id:{
            type:DataTypes.STRING,
            primaryKey:true
        },
        email:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        password:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        school_code:{
            type:DataTypes.STRING(350)            
        },
        status:{
            type:DataTypes.STRING(350)
        }
    })

    return Login
}