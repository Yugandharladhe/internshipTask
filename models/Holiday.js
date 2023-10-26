const {Sequelize}=require("sequelize")

module.exports=(sequelize,DataTypes)=>{
    const Holiday=sequelize.define("Holiday",{
        holiday_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        title:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        description:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        date:{
            type:DataTypes.STRING(350)            
        },
        status:{
            type:DataTypes.STRING(350)
        }
    })

    return Holiday
}