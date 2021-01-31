module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
      realname: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      id: {
        type: DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      pnumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  };

  