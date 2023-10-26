const {Sequelize}=require("sequelize")

module.exports=(sequelize,DataTypes)=>{
    const Exam=sequelize.define("Exam",{
        exam_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        teacher_id:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        title:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        description:{
            type:DataTypes.STRING(350)            
        },
        standard:{
            type:DataTypes.STRING(350)
        },
        division:{
            type:DataTypes.STRING(350)
        },
        subject:{
            type:DataTypes.STRING(350)
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

    return Exam
}