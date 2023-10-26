const {Sequelize}=require("sequelize")

module.exports=(sequelize,DataTypes)=>{
    const Login=sequelize.define("Login",{
        login_id:{
            type:DataTypes.STRING(30),
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
            type:DataTypes.STRING(350),
            allowNull:false        
        },
        status:{
            type:DataTypes.STRING(350),
            allowNull:false
        }
    })

    return Login
}