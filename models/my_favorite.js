'use strict';
module.exports = (sequelize, DataTypes) => {
  const my_favorite = sequelize.define('my_favorite', {
    webtoon_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    isFavorite: DataTypes.INTEGER
  }, {});
  my_favorite.associate = function (models) {
    // associations can be defined here
  };
  return my_favorite;
};