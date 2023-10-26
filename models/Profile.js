const {Sequelize}=require("sequelize")

module.exports=(sequelize,DataTypes)=>{
    const Profile=sequelize.define("Profile",{
        profile_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        type:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        status:{
            type:DataTypes.STRING(350),
            allowNull:false
        }
    })

    return Profile
}