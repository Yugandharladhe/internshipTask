const {Sequelize}=require("sequelize")

module.exports=(sequelize,DataTypes)=>{
    const Assignment=sequelize.define("Assignment",{
        assignment_id:{
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
        subject:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        date:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        url:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        by:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        status:{
            type:DataTypes.STRING(350),
            allowNull:false
        }
    })

    return Assignment
}