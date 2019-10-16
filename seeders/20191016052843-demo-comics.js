'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comics', [
      {
        title: 'True Beauty',
        genre: 1,
        bumpImg: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        thumbImg: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        createdBy: 1
      },
      {
        title: 'Age Matters',
        genre: 2,
        bumpImg: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        thumbImg: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        createdBy: 1
      },
      {
        title: 'A Good Day to be a Dog',
        genre: 1,
        bumpImg: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        thumbImg: 'https://www.forbes.com/sites/joanmacdonald.jpg',
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
