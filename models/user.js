const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequlize){
        return super.init({
            email:{
                type:Sequelize.STRING(40),
                allowNull: true,
                unique: true,
            },
            nick:{
                type: Sequelize.STRING(15),
                allowNull:false,
            },
            password:{
                type:sequlize.STRING(100),
                allowNull:true,
            },
            provider:{
                type:Sequelize.STRING(10),
                allowNull: false,
                defalutValue:'local',
            },
            snsId:{
                type:Sequelize.STRING(30),
                allowNull:true,
            },
        },
        {
                sequelize,
                timestaps: true,
                underscored: false,
                modelName: 'User',
                tableName:'users',
                paranoid: true,
                paranoid: true,
                charset:'utf8',
                collate: 'utf8_general_ci',
        });
    }

    static associate(db){}
};