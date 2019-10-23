'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comics', [
      {
        "id": 1,
        "title": "The Secret Of Angel",
        "genre": 1,
        "bumpImg": "https://i.ytimg.com/vi/hNKk5qf9JMI/maxresdefault.jpg",
        "thumbImg": "https://i.pinimg.com/originals/dc/33/11/dc33119e7f12ffb3c142c0fe1eb13dc8.jpg",
        "createdBy": 1
      },
      {
        "id": 2,
        "title": "Si Ocong",
        "genre": 2,
        "bumpImg": "https://i.pinimg.com/originals/27/49/1f/27491fc4762259ee8214247c85c87441.jpg",
        "thumbImg": "https://i.pinimg.com/originals/27/49/1f/27491fc4762259ee8214247c85c87441.jpg",
        "createdBy": 1
      },
      {
        "id": 3,
        "title": "Kosan 95",
        "genre": 1,
        "bumpImg": "https://pbs.twimg.com/media/DgvqZ6RUcAA6aZ_.jpg",
        "thumbImg": "https://pbs.twimg.com/media/DgvqZ6RUcAA6aZ_.jpg",
        "createdBy": 1
      },
      {
        "id": 4,
        "title": "iMarried",
        "genre": 1,
        "bumpImg": "https://pbs.twimg.com/media/D2r-nNfXgAAKA1x.jpg",
        "thumbImg": "https://pbs.twimg.com/media/D2r-nNfXgAAKA1x.jpg",
        "createdBy": 1
      },
      {
        "id": 5,
        "title": "Pasutri Gaje",
        "genre": 1,
        "bumpImg": "https://otaku.dafunda.com/wp-content/uploads/sites/11/2019/04/Pasutri-Gaje-Season-3-Dafunda-Otaku.jpg",
        "thumbImg": "https://otaku.dafunda.com/wp-content/uploads/sites/11/2019/04/Pasutri-Gaje-Season-3-Dafunda-Otaku.jpg",
        "createdBy": 1
      }
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
