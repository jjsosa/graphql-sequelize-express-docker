'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
      // Avoid plural in tables
      freezeTableName: true,
      // Avoid created_at & updated_at columns
      timestamps: false
  });

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.recipe);
  };
  return User;
};