'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Responsable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //models.Responsable.hasMany(models.Activo);
    }
  }
  Responsable.init({
    nombre:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    numEmpleado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    imagen: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Responsable',
  });
  return Responsable;
};