const { DataTypes } = require('sequelize');
const db = require("../middleware/db_config");

module.exports = db.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
    
  });