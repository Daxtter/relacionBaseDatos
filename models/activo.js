'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Activo.belongsToMany(models.Tag,{through:models.ActivoconTag,onDelete: 'CASCADE', onUpdate: 'CASCADE'});
      models.Activo.belongsTo(models.Responsable,{foreignKey: "responsableID",onDelete: 'CASCADE', onUpdate: 'CASCADE' });
      models.Activo.belongsTo(models.Ubicacion,{foreignKey: "ubicacionID",onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    }
  }
  Activo.init({
    numSerie: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
    },
  numInventario:{
    type: DataTypes.INTEGER,
    unique: true
  },
  descripcion:{
    type: DataTypes.STRING,
    allowNull: false
  },
  ubicacionID:{
    type:DataTypes.INTEGER,
    allowNull: true
  },
  responsableID:{
    type:DataTypes.INTEGER,
    allowNull: true
  },
  imagen:{
    type: DataTypes.BLOB,
    allowNull: true
  }
  }, {
    sequelize,
    modelName: 'Activo',
  });
  
  return Activo;
};