const { DataTypes } = require('sequelize');
const db = require("../middleware/db_config");

module.exports =  db.define('Comment', {
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });