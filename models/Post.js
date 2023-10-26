const {Sequelize}=require("sequelize")

module.exports=(sequelize,DataTypes)=>{
    const Post=sequelize.define("Post",{
        post_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        teacher_id:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        caption:{
            type:DataTypes.STRING(350),
            allowNull:false
        },
        file:{
            type:DataTypes.STRING(350)            
        },
        date:{
            type:DataTypes.STRING(350)
        },
        post_type:{
            type:DataTypes.STRING(350)
        },
        status:{
            type:DataTypes.STRING(350)
        }
    })

    return Post
}