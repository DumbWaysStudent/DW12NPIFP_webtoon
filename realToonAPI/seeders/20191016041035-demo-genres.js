'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('genres', [
      {
        title_genre: 'Drama',
        description: 'Ini adalah Genre Drama',
      },
      {
        title_genre: 'Romance',
        description: 'Ini adalah Genre Romance',
      },
      {
        title_genre: 'Horor',
        description: 'Ini adalah Genre Horor',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
