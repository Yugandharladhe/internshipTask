const {Sequelize}=require("sequelize")

module.exports=(sequelize,DataTypes)=>{
    const Report=sequelize.define("Report",{
        report_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        student_id:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        class:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        date:{
            type:DataTypes.STRING(350)            
        },
        file:{
            type:DataTypes.STRING(350)
        },
        status:{
            type:DataTypes.STRING(350)
        }
    })

    return Report
}