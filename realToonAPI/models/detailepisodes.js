'use strict';
module.exports = (sequelize, DataTypes) => {
  const detailepisodes = sequelize.define('detailepisodes', {
    page: DataTypes.STRING,
    image: DataTypes.STRING,
    idDetailComics: DataTypes.INTEGER
  }, {});
  detailepisodes.associate = function (models) {
    // associations can be defined here
    detailepisodes.belongsTo(models.detailComics, {
      as: 'detailComicId',
      foreignKey: 'idDetailComics'
    })
  };
  return detailepisodes;
};