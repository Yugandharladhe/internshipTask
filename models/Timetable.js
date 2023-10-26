const {Sequelize}=require("sequelize")

module.exports=(sequelize,DataTypes)=>{
    const Timetable=sequelize.define("Timetable",{
        tt_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        standard:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        division:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        subject:{
            type:DataTypes.STRING(350)            
        },
        day:{
            type:DataTypes.STRING(350)
        },
        start_time:{
            type:DataTypes.STRING(350)
        },
        end_time:{
            type:DataTypes.STRING(350)
        },
        lect_no:{
            type:DataTypes.STRING(350)
        },
        status:{
            type:DataTypes.STRING(350)
        }
    })

    return Timetable
}