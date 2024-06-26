'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Acceso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Acceso.belongsToMany(models.Identificador,{through:models.Usuario,onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    }
  }
  Acceso.init({
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Acceso',
  });
  return Acceso;
};