'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Tag.belongsToMany(models.Activo,{through:models.ActivoconTag,onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    }
  }
  Tag.init({
    nombre:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Tag',
  });

  /*
  Tag.associate = function(models){
    Tag.belongsTo(models.Activo,{through: models.ActivoconTag});
  }
  */
  return Tag;
};