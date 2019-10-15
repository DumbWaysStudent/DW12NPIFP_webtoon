'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        username: 'admin',
        email: 'ad@min.com',
        password: 'admin',
      },
      {
        username: 'jarwo',
        email: 'j@rwo.com',
        password: 'jarwo',
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
