'use strict';
module.exports = (sequelize, DataTypes) => {
  const genres = sequelize.define('genres', {
    title_genre: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  genres.associate = function(models) {
    // associations can be defined here
  };
  return genres;
};