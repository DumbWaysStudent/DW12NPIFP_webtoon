'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('list_comics', [
      {
        title: "True Beauty",
        genre: "Drama",
        thumbnailImg: "https://www.forbes.com/sites/joanmacdonald.jpg",
        createdBy: 1
      },
      {
        title: "Age Matters",
        genre: "Romance",
        thumbnailImg: "https://www.forbes.com/sites/joanmacdonald.jpg",
        createdBy: 1
      },
      {
        title: "A Good Day to be a Dog",
        genre: "Drama",
        thumbnailImg: "https://www.forbes.com/sites/joanmacdonald.jpg",
        createdBy: 2
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
