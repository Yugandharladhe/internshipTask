const {Sequelize}=require("sequelize")

module.exports=(sequelize,DataTypes)=>{
    const Chat=sequelize.define("Chat",{
        chat_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        user_id:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        massage:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        datetime:{
            type:DataTypes.STRING(350)            
        },
        status:{
            type:DataTypes.STRING(350)
        }
    })

    return Chat
}