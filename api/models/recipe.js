'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('recipe', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    direction: {
      type: DataTypes.TEXT,
      allowNull: true
    },
  }, {
    // Avoid plural in tables
    freezeTableName: true,
    // Avoid created_at & updated_at columns
    timestamps: false
  });
  
  Recipe.associate = function (models) {
    Recipe.belongsTo(models.user, { foreignKey: 'userId' })
  }
  return Recipe;
};