const {Sequelize}=require("sequelize")

module.exports=(sequelize,DataTypes)=>{
    const Attendence=sequelize.define("Attendence",{
        attendence_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        student_id:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        student_name:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        enroll_no:{
            type:DataTypes.STRING(350),
            allowNull:false          
        },
        standard:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        division:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        attendence:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        date:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        status:{
            type:DataTypes.STRING(350),
            allowNull:false
        }
    })

    return Attendence
}