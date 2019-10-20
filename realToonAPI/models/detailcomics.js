'use strict';
module.exports = (sequelize, DataTypes) => {
  const detailComics = sequelize.define('detailComics', {
    title: DataTypes.STRING,
    thumbImg: DataTypes.STRING,
    idComics: DataTypes.INTEGER
  }, {});
  detailComics.associate = function (models) {
    // associations can be defined here
    detailComics.belongsTo(models.comics, {
      as: 'Comics',
      foreignKey: 'idComics'
    })
  };
  return detailComics;
};