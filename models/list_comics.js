'use strict';
module.exports = (sequelize, DataTypes) => {
  const list_comics = sequelize.define('list_comics', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    thumbnailImg: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {});
  list_comics.associate = function (models) {
    // associations can be defined here
    list_comics.belongsTo(models.users, {
      as: 'createdby',
      foreignKey: 'createdBy'
    })
  };
  return list_comics;
};