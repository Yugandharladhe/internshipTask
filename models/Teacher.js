const {Sequelize}=require("sequelize")

module.exports=(sequelize,DataTypes)=>{
    const Teacher=sequelize.define("Teacher",{
        teacher_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        profile_id:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        name:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        blood_group:{
            type:DataTypes.STRING(350)            
        },
        connection:{
            type:DataTypes.STRING(350)
        },
        email:{
            type:DataTypes.STRING(350)
        },
        enroll_no:{
            type:DataTypes.STRING(350)
        },
        standard:{
            type:DataTypes.STRING(350)
        },
        division:{
            type:DataTypes.STRING(350)
        },
        farebaseuid:{
            type:DataTypes.STRING(350)
        },
        guardian_name:{
            type:DataTypes.STRING(350)
        },
        is_teacher:{
            type:DataTypes.STRING(350)
        },
        is_verified:{
            type:DataTypes.STRING(350)
        },
        mobile_number:{
            type:DataTypes.STRING(350)
        },
        photo_url:{
            type:DataTypes.STRING(350)
        }
    })

    return Teacher
}