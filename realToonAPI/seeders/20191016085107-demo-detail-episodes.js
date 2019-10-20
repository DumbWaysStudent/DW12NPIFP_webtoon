'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('detailepisodes', [
      {
        page: 1,
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        idDetailComics: 1
      },
      {
        page: 2,
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        idDetailComics: 1
      },
      {
        page: 3,
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        idDetailComics: 1
      },
      {
        page: 4,
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        idDetailComics: 1
      },
      {
        page: 5,
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        idDetailComics: 1
      },
      {
        page: 1,
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        idDetailComics: 2
      },
      {
        page: 2,
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        idDetailComics: 2
      },
      {
        page: 3,
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        idDetailComics: 1
      },
      {
        page: 4,
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        idDetailComics: 2
      },
      {
        page: 5,
        image: 'https://www.forbes.com/sites/joanmacdonald.jpg',
        idDetailComics: 2
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
