'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('my_favorites', [
      {
        webtoon_id: 1,
        user_id: 1,
        isFavorite: 1
      },
      {
        webtoon_id: 1,
        user_id: 2,
        isFavorite: 1
      },
      {
        webtoon_id: 1,
        user_id: 2,
        isFavorite: 1
      },
      {
        webtoon_id: 2,
        user_id: 1,
        isFavorite: 1
      },
      {
        webtoon_id: 2,
        user_id: 2,
        isFavorite: 1
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
