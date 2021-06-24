module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Comment', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED, 
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
          model: 'Users',
          key: 'id'
        }
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    post_id:{
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Posts',
        key: 'id'
      }
    }
  }); 
};