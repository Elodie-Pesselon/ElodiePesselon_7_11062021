module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Post', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED, 
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
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
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id:{
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id' 
      }
    },
    classMethods:{
      associate: function(models){
        models.Post.belongsTo(models.Comment);
      }
    }
  });
}