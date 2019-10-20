'use strict';
module.exports = (sequelize, DataTypes) => {
  const comics = sequelize.define('comics', {
    title: DataTypes.STRING,
    genre: DataTypes.INTEGER,
    bumpImg: DataTypes.STRING,
    thumbImg: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {});
  comics.associate = function (models) {
    // associations can be defined here
    comics.belongsTo(models.users, {
      as: 'created_by',
      foreignKey: 'createdBy'
    })
    // comics.belongsTo(models.genres, {
    //   as: 'genre_id',
    //   foreignKey: 'genre'
    // })
  };
  return comics;
};