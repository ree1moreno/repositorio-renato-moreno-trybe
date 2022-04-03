const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const Categorie = sequelize.define('Categorie', Attributes, {
    underscored: false,
    timestamps: false,
    tableName: 'Categories',
  });

  return Categorie;
};
