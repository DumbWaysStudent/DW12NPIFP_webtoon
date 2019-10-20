'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('detailcomics', [
      {
        title: 'Episode 1',
        thumbImg: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        idComics: 1
      },
      {
        title: 'Episode 2',
        thumbImg: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        idComics: 1
      },
      {
        title: 'Episode 3',
        thumbImg: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        idComics: 1
      },
      {
        title: 'Episode 1',
        thumbImg: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        idComics: 2
      },
      {
        title: 'Episode 2',
        thumbImg: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        idComics: 2
      },
      {
        title: 'Episode 3',
        thumbImg: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        idComics: 2
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
