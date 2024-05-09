'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Identificador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Identificador.belongsToMany(models.Acceso,{through:models.Usuario,onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    }
  }
  Identificador.init({
    nombre: DataTypes.STRING,
    ip: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'Identificador',
    tableName: 'Identificadores',
    name:{
      singular: 'identificador',
      plural: 'identificadores'
    }  
});
  return Identificador;
};