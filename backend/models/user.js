
const { DataTypes } = require('sequelize');
const db = require("../middleware/db_config");

module.exports = 	db.define('User', {
    pseudo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
      isEmail: true 
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    presentation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fonction:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
  });


