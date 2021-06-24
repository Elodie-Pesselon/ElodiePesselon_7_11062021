
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED, 
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
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
      classMethods:{
        associate: function(models){
          models.User.hasMany(models.Post);
          models.User.hasMany(models.Comment);
        }
      },
  });
  return User;
}


 


